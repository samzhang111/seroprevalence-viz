import {briefPause} from "./asyncTools"
import sampleBeta from '@stdlib/random/base/beta'
import sampleGamma from '@stdlib/random/base/gamma'
import betaln from '@stdlib/math/base/special/betaln'
import sampleUniform from '@stdlib/random/base/uniform'
import floor from '@stdlib/math/base/special/floor'
import e from '@stdlib/constants/math/float64-e'
import logBase from '@stdlib/math/base/special/log'

const ln = (x) => logBase(x, e)

export const samplePosteriorMcmc = async (samps, pos, n, tp, tn, fp, fn, progressCallback=()=>{}) => {
  let sp = (tn + 1)/(tn + fp + 2)
  let se = (tp + 1)/(tp + fn + 2)
  let r = (pos + 1)/(n + 2)


  let rPosterior = []
  let sePosterior = []
  let spPosterior = []

  // mcmc tuning parameters; larger values decrease variability in proposals
  // burn_in must be multiple of thin
  const sp_adj = pos/n < 1-sp ? n+tn+fp : tn+fp
  const delta_r = 100*(1 + floor(n/3000))
  const delta_sp = 100*(1 + floor((sp_adj)/3000))
  const delta_se = 100*(1 + floor((tp+fn)/3000))
  const thin = 50
  const burn_in = 2*thin

  const settings = {delta_r, delta_sp, delta_se, pos, n, fp, tp, fn, tn}

  const totalItersProg = (samps*thin + burn_in)
  await progressCallback(0)
  await briefPause()

  let results = await innerLoop(r, sp, se, settings, burn_in)
  await progressCallback(burn_in / totalItersProg)
  await briefPause()

  r = results.r
  se = results.se
  sp = results.sp

  for (let i=1; i<=samps; i++) {
    results = await innerLoop(r, se, sp, settings, thin)
    r = results.r
    se = results.se
    sp = results.sp

    rPosterior.push(r)
    sePosterior.push(se)
    spPosterior.push(sp)

    if (i % 100 == 0) {
      let prog = 100*(i + burn_in/thin) / (samps + burn_in/thin)
      await progressCallback(prog)
      await briefPause()
    }
  }

  await progressCallback(100)
  await briefPause()

  return {rPosterior, sePosterior, spPosterior}
}

let logCache = []

const logBinom = (k, n, p) => {
  if (p == 0 || p == 1) {
    return 0 + (k == p)
  }

  let runningLog = 0
  let lognfac, logkfac, lognminuskfac = 0
  for (let i = 1; i <= n; i++) {
    if (logCache.length < i) {
      logCache.push(ln(i))
    }

    runningLog += logCache[i - 1]

    if (i == k) {
      logkfac = runningLog
    }

    if (i == n - k) {
      lognminuskfac = runningLog
    }
  }
  lognfac = runningLog

  return lognfac - logkfac - lognminuskfac + k*ln(p) + (n-k)*ln(1-p) 
}

const logBeta = (x, alpha, beta) => {
  return (alpha - 1) * ln(x) +
    (beta - 1) * ln(1 - x) -
    betaln(alpha, beta)
}

const sampleBetaCustom = (alpha, beta) => {
  const u = sampleGamma(alpha, 1)
  const v = sampleGamma(beta, 1)

  return u / (u + v)
}

const innerLoop = async (r, se, sp, settings, innerIters) => {
  const {delta_r, delta_sp, delta_se, pos, n, fp, tp, fn, tn} = settings

  for (let s=1; s<innerIters; s++) {

    let r_prop = sampleBetaCustom(r*delta_r, (1-r)*delta_r)
    let tries = 0

    while (r_prop == 0 && tries < 100) {
      r_prop = sampleBetaCustom(r*delta_r, (1-r)*delta_r)
      tries += 1

      if (tries >= 99) {
        console.error("Warning: 100 zeros in a row")
      }
    }

    let ar_r = logBinom(pos, n, r_prop*se + (1-r_prop)*(1-sp)) -
        logBinom(pos,n,r*se+(1-r)*(1-sp))+
        logBeta(r, r_prop*delta_r, (1-r_prop)*delta_r)-
        logBeta(r_prop,r*delta_r,(1-r)*delta_r)

    let rv = ln(sampleUniform(0, 1))

    if (rv < ar_r) {
      r = r_prop
    }

    const se_prop = sampleBetaCustom(se*delta_se, (1-se)*delta_se)
    const ar_se = logBinom(pos,n,r*se_prop+(1-r)*(1-sp))-
      logBinom(pos,n,r*se+(1-r)*(1-sp))+
      logBinom(tp,(tp+fn),se_prop)-
      logBinom(tp,(tp+fn),se)+
      logBeta(se,se_prop*delta_se,(1-se_prop)*delta_se)-
      logBeta(se_prop,se*delta_se,(1-se)*delta_se)

    rv = ln(sampleUniform(0, 1))
    if(rv < ar_se){
      se = se_prop
    }

    const sp_prop = sampleBetaCustom(sp*delta_sp,(1-sp)*delta_sp)
    const ar_sp = logBinom(pos,n,r*se+(1-r)*(1-sp_prop))-
      logBinom(pos,n,r*se+(1-r)*(1-sp))+
      logBinom(tn,(fp+tn),sp_prop)-
      logBinom(tn,(fp+tn),sp)+
      logBeta(sp,sp_prop*delta_sp,(1-sp_prop)*delta_sp)-
      logBeta(sp_prop,sp*delta_sp,(1-sp)*delta_sp)

    rv = ln(sampleUniform(0, 1))

    if(rv < ar_sp){
      sp = sp_prop
    }

  }

  return {r, se, sp}
}

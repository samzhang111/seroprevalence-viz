import * as _ from "lodash"
import {jStat} from "jstat"
import { compare} from "mathjs"
const sampleBeta = require( '@stdlib/random/base/beta' );
const sampleGamma = require( '@stdlib/random/base/gamma' );
const betaln = require( '@stdlib/math/base/special/betaln' );
const sampleUniform = require( '@stdlib/random/base/uniform' );

const briefPause = (x) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 1);
  });
}


export const computePosteriorNumerator = (r, nplus, nminus, u, v) => {
  const numerator = (u + r*(1 - u - v))**nplus * (1 - u - r*(1-u-v))**nminus
  return numerator
}

export const computePosterior = (r, nplus, nminus, u, v) => {
  const numerator = computePosteriorNumerator(r, nplus, nminus, u, v)
  const denominator = (jStat.ibeta(1-v, 1 + nplus, 1 + nminus) - jStat.ibeta(u, 1+nplus, 1+nminus))/(1 - u -v)
  return numerator/denominator
}

export const computeLogPosteriorNumerator = (r, nplus, nminus, u, v) => (
  nplus*Math.log(u + r*(1 - u - v)) + nminus*Math.log(1 - u - r*(1-u-v))
)

export const computeLogPosterior = (r, nplus, nminus, u, v) => {
  const numerator = computeLogPosteriorNumerator(r, nplus, u, v)
  let a = jStat.ibeta(u, 1+nplus, 1+nminus) - jStat.ibeta(1-v, 1 + nplus, 1 + nminus)
  let b = u + v - 1

  if (a < 0) {
    a *= -1
    b *= -1
  }

  const denominator = Math.log(a) - Math.log(b)

  return numerator - denominator
}

export const samplePosteriorLog = async (pos, neg, u, v, size, progressCallback=()=>{}) => {
  const rm = (pos/(pos+neg)-u)/(1-u-v)

  let mCands = [
    computeLogPosteriorNumerator(0,pos,neg,u,v),
    computeLogPosteriorNumerator(1,pos,neg,u,v),
  ]

  if (rm > 0 && rm < 1) {
    mCands.push(computeLogPosteriorNumerator(rm,pos,neg,u,v))
  }

  const logM = jStat.max(mCands)

  let accepted = []
  let acceptances = 0
  let i = 0

  while (acceptances < size) {
    if (i % 1000 == 0) {
      let prog = 100*acceptances/size
      await progressCallback(prog)
      await briefPause()
    }
    let proposal = Math.random()
    let logrv = Math.log(Math.random())

    if (logrv < computeLogPosteriorNumerator(proposal, pos, neg, u, v) - logM) {
      accepted.push(proposal)
      acceptances += 1

    }

    i += 1
  }

  progressCallback(100)
  await briefPause()

  progressCallback(0)
  await briefPause()

  return accepted
}

export const samplePosterior = (pos, neg, u, v, size) => {
  const rm = (pos/(pos+neg)-u)/(1-u-v)

  let mCands = [
    computePosteriorNumerator(0,pos,neg,u,v),
    computePosteriorNumerator(1,pos,neg,u,v),
  ]

  if (rm > 0 && rm < 1) {
    mCands.push(computePosteriorNumerator(rm,pos,neg,u,v))
  }

  const M = jStat.max(mCands)
  let samples = []
  let n_accepted = 0
  let failures = 0

  let proposals = []
  let rvs = []
  for (let i = 0; i < 3*size; i++) {
    proposals.push(Math.random())
    rvs.push(Math.random())
  }

  let cutoffs = _.map(proposals, (x) => computePosteriorNumerator(x, pos, neg, u, v)/M)
  let results = compare(rvs, cutoffs)

  return _.take(_.unzip(
    _.filter(_.zip(proposals, results), (pair) => {
      return pair[1] == -1
    })
  )[0], size)
}

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
  const delta_r = 100*(1 + Math.floor(n/3000))
  const delta_sp = 100*(1 + Math.floor((sp_adj)/3000))
  const delta_se = 100*(1 + Math.floor((tp+fn)/3000))
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

  await progressCallback(0)
  await briefPause()

  return {rPosterior, sePosterior, spPosterior}
}

let logCache = []

const logBinom = (k, n, p) => {
  let runningLog = 0
  let lognfac, logkfac, lognminuskfac
  for (let i = 1; i <= n; i++) {
    if (logCache.length < i) {
      logCache.push(Math.log(i))
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

  return lognfac - logkfac - lognminuskfac + k*Math.log(p) + (n-k)*Math.log(1-p) 
}

const logBeta = (x, alpha, beta) => {
  return (alpha - 1) * Math.log(x) +
    (beta - 1) * Math.log(1 - x) -
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

    let rv = Math.log(sampleUniform(0, 1))

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

    rv = Math.log(sampleUniform(0, 1))
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

    rv = Math.log(sampleUniform(0, 1))

    if(rv < ar_sp){
      sp = sp_prop
    }

  }

  return {r, se, sp}
}

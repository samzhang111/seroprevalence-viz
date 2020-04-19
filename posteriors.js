import * as _ from "lodash"
import {jStat} from "jstat"
import { compare} from "mathjs"

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

export const samplePosteriorLog = (pos, neg, u, v, size) => {
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

  while (acceptances < size) {
    let proposal = Math.random()
    let logrv = Math.log(Math.random())

    if (logrv < computeLogPosteriorNumerator(proposal, pos, neg, u, v) - logM) {
      accepted.push(proposal)
      acceptances += 1
    }
  }

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

const briefPause = (x) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 1);
  });
}

export const samplePosteriorMcmc = async (samps, pos, n, tp, tn, fp, fn, progressCallback=()=>{}) => {
  let sp = tn/(tn + fp)
  let se = tp/(tn + fp)
  let r = (pos + 1)/(n + 2)

  let rPosterior = []
  let sePosterior = []
  let spPosterior = []

  // mcmc tuning parameters; larger values decrease variability in proposals
  // burn_in must be multiple of thin
  const delta_r = 100
  const delta_sp = 100
  const delta_se = 100
  const thin = 50
  const burn_in = 2*thin

  const settings = {delta_r, delta_sp, delta_se, pos, n, fp, tp, fn, tn}

  const totalItersProg = (samps*thin + burn_in)
  progressCallback(0)
  await briefPause()

  let results = await innerLoop(r, sp, se, settings, burn_in)
  progressCallback(burn_in / totalItersProg)
  await briefPause()

  r = results.r
  se = results.se
  sp = results.sp
  let prog = 0

  for (let i=1; i<=samps; i++) {
    results = await innerLoop(r, sp, se, settings, thin)
    r = results.r
    se = results.se
    sp = results.sp

    rPosterior.push(r)
    sePosterior.push(se)
    spPosterior.push(sp)

    prog = parseInt(100*(i + burn_in/thin) / (samps + burn_in/thin))

    if (i % 100 == 0) {
      progressCallback(prog)
      await briefPause()
    }
  }
  progressCallback(prog)
  progressCallback(0)

  return {rPosterior, sePosterior, spPosterior}
}

const innerLoop = async (r, se, sp, settings, innerIters) => {
  const {delta_r, delta_sp, delta_se, pos, n, fp, tp, fn, tn} = settings

  for (let s=1; s<innerIters; s++) {

    let r_prop = jStat.beta.sample(r*delta_r, (1-r)*delta_r)

    let ar_r = Math.log(jStat.binomial.pdf(pos, n, r_prop*se + (1-r_prop)*(1-sp))) -
        Math.log(jStat.binomial.pdf(pos,n,r*se+(1-r)*(1-sp)))+
        Math.log(jStat.beta.pdf(r, r_prop*delta_r, (1-r_prop)*delta_r))-
        Math.log(jStat.beta.pdf(r_prop,r*delta_r,(1-r)*delta_r))

    let rv = Math.log(jStat.uniform.sample(0, 1))

    if (rv < ar_r) {
      r = r_prop
    }

    const se_prop = jStat.beta.sample(se*delta_se, (1-se)*delta_se)
    const ar_se = Math.log(jStat.binomial.pdf(pos,n,r*se_prop+(1-r)*(1-sp)))-
      Math.log(jStat.binomial.pdf(pos,n,r*se+(1-r)*(1-sp)))+
      Math.log(jStat.binomial.pdf(tp,(tp+fn),se_prop))-
      Math.log(jStat.binomial.pdf(tp,(tp+fn),se))+
      Math.log(jStat.beta.pdf(se,se_prop*delta_se,(1-se_prop)*delta_se))-
      Math.log(jStat.beta.pdf(se_prop,se*delta_se,(1-se)*delta_se))

    rv = Math.log(jStat.uniform.sample(0, 1))
    if(rv < ar_se){
      se = se_prop
    }

    const sp_prop = jStat.beta.sample(sp*delta_sp,(1-sp)*delta_sp)
    const ar_sp = Math.log(jStat.binomial.pdf(pos,n,r*se+(1-r)*(1-sp_prop)))-
      Math.log(jStat.binomial.pdf(pos,n,r*se+(1-r)*(1-sp)))+
      Math.log(jStat.binomial.pdf(tn,(fp+tn),sp_prop))-
      Math.log(jStat.binomial.pdf(tn,(fp+tn),sp))+
      Math.log(jStat.beta.pdf(sp,sp_prop*delta_sp,(1-sp_prop)*delta_sp))-
      Math.log(jStat.beta.pdf(sp_prop,sp*delta_sp,(1-sp)*delta_sp))

    rv = Math.log(jStat.uniform.sample(0, 1))

    if(rv < ar_sp){
      sp = sp_prop
    }

  }

  return {r, se, sp}
}

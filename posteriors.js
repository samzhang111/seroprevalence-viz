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



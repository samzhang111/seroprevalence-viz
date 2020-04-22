import {briefPause} from "./asyncTools"
import max from '@stdlib/math/base/special/max'
import log2 from '@stdlib/math/base/special/log2'
import sampleUniform from '@stdlib/random/base/uniform'

export const computeLogPosteriorNumerator = (r, nplus, nminus, u, v) => (
  nplus*log2(u + r*(1 - u - v)) + nminus*log2(1 - u - r*(1-u-v))
)

export const samplePosteriorLog = async (pos, neg, u, v, size, progressCallback=()=>{}) => {
  const rm = (pos/(pos+neg)-u)/(1-u-v)

  let mCands = [
    computeLogPosteriorNumerator(0,pos,neg,u,v),
    computeLogPosteriorNumerator(1,pos,neg,u,v),
  ]

  if (rm > 0 && rm < 1) {
    mCands.push(computeLogPosteriorNumerator(rm,pos,neg,u,v))
  }


  const logM = max(...mCands)

  let accepted = []
  let acceptances = 0
  let i = 0

  await progressCallback(0)
  await briefPause()

  while (acceptances < size) {
    if (i % 1000 == 0) {
      let prog = 100*acceptances/size
      await progressCallback(prog)
      await briefPause()
    }
    let proposal = sampleUniform(0, 1)
    let logrv = log2(sampleUniform(0, 1))

    if (logrv < computeLogPosteriorNumerator(proposal, pos, neg, u, v) - logM) {
      accepted.push(proposal)
      acceptances += 1

    }

    i += 1
  }

  await progressCallback(100)
  await briefPause()

  return accepted
}


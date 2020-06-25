import uniform from '@stdlib/random/base/uniform'
import discreteUniform from '@stdlib/random/base/discrete-uniform'
import gamma from '@stdlib/random/base/gamma'

import {infectiousnessAtTime, infectiousnessAtTime2} from "./infectiousness"


export const flatTriangleArea = (traj, t1, left, right) => {
  let area = 0

  for (let i = Math.ceil(left); i <= right; i++) {
    let inf = infectiousnessAtTime2(traj, t1, i)
    area += inf
  }

  return area
}


export const simulateTrajectories = async (settings) => {
  const { incubationmin, incubationmax, onsetfixed, onsetgamma, peakloadmin, peakloadmax, decaymin, decaymax, numSamples } = settings

  let trajectories = []

  for (let i = 0; i < numSamples; i++) {
    let t0 = uniform(incubationmin, incubationmax)
    let vpeak = uniform(peakloadmin, peakloadmax)
    let tpeakOffset = onsetfixed + gamma(onsetgamma, 1) 
    while (tpeakOffset > 2*(onsetfixed + onsetgamma)) {
      tpeakOffset = t0 + onsetfixed + gamma(onsetgamma, 1)
    }

    let tpeak = t0 + tpeakOffset
    let tf = tpeak + uniform(decaymin, decaymax)

    trajectories.push({t0, tpeak, tf, vpeak})
  }

  return trajectories
}

export const firstDetectableTime = (traj) => {
  return 3*(traj.tpeak - traj.t0)/(traj.vpeak - 3) + traj.t0
}

const infectiousnessPercentage = (traj, t) => {
  let t1 = Math.ceil(firstDetectableTime(traj))

  const area = flatTriangleArea(traj, t1, t1, traj.tf)

  // test result came back after infectiousness period
  if (t >= traj.tf) {
    return {
      area,
      infectiousnessRemoved: 0
    }
  }

  // test result came back before infectiousness period
  if (t <= t1) {
    return {
      area,
      infectiousnessRemoved: area
    }
  }

  if (t < traj.tpeak) {
    let a = flatTriangleArea(traj, t1, t1, t)

    return {
      area,
      infectiousnessRemoved: area - a
    }
  }
  
  let b = flatTriangleArea(traj, t1, t, traj.tf)

  return {
    area,
    infectiousnessRemoved: b
  }
}

export const computeInfectiousness = (trajectories, settings) => {
  const {vsens, testfreq, delay} = settings

  let infectiousnesses = []

  for (let i = 0; i < trajectories.length; i++) {
    const traj = trajectories[i]
    const phase = discreteUniform(0, testfreq)
    let t = phase
    let v = infectiousnessAtTime(traj, t)

    let selfIsolate = uniform(0.0, 1.0) > 0.8
    let caught, selfIsolation

    while (t < traj.tf && v < vsens) {
      t += testfreq
      v = infectiousnessAtTime(traj, t)
    }

    if (
      selfIsolate && 
      (t + delay > traj.tpeak + 1) // test came back after virus peaked, ie after self-isolation began
    ){
      t = traj.tpeak + 1 - delay // hack: subtract delay because we'll add it back later
      v = infectiousnessAtTime(traj, t + delay)
      caught = false
      selfIsolation = true
    }

    else if (t + delay > traj.tf) { // virus was not caught at all, and no self-isolation
      caught = false
      selfIsolation = false
    }
    else if(v >= vsens) { // virus was caught by test
      caught = true
      selfIsolation = false
    }
  
    const {infectiousnessRemoved, area} = infectiousnessPercentage(traj, t + delay)
    infectiousnesses.push({totalInfectiousness: area, infectiousnessRemoved, caught, selfIsolation})
  }

  return infectiousnesses
}

export const makeInfectiousnessData = (infectiousnesses, baselineInfectiousnesses) => {


  let totalInfectiousness = 0
  let infecRemovedByTest = 0
  let infecRemovedBySelf = 0

  let baseTotalInfectiousness = 0
  let baseInfecRemovedByTest = 0
  let baseInfecRemovedBySelf = 0

  for (let i = 0; i < infectiousnesses.length; i++) {
    totalInfectiousness += infectiousnesses[i].totalInfectiousness

    if (infectiousnesses[i].selfIsolation) {
      infecRemovedBySelf += infectiousnesses[i].infectiousnessRemoved
    }
    else {
      infecRemovedByTest += infectiousnesses[i].infectiousnessRemoved
    }
  }

  for (let i = 0; i < baselineInfectiousnesses.length; i++) {
    baseTotalInfectiousness += baselineInfectiousnesses[i].totalInfectiousness

    if (baselineInfectiousnesses[i].caught) {
      baseInfecRemovedByTest += baselineInfectiousnesses[i].infectiousnessRemoved
    }
    else {
      baseInfecRemovedBySelf += baselineInfectiousnesses[i].infectiousnessRemoved
    }
  }

  let data = 
    [
          {x: "No tests", y: 100*baseInfecRemovedByTest/baseTotalInfectiousness, c: "Detected"},
          {x: "No tests", y: 100*baseInfecRemovedBySelf/baseTotalInfectiousness, c: "Self-isolated"},
          {x: "Tests", y: 100*infecRemovedByTest/totalInfectiousness, c: "Detected"},
          {x: "Tests", y: 100*infecRemovedBySelf/totalInfectiousness, c: "Self-isolated"},
    ]

  return data
}

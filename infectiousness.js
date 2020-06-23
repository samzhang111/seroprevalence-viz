export const infectiousnessAtTime = (trajectory, time) => {
  let y

  if (time < trajectory.tpeak) {
    y = 3 + (time - trajectory.t0)*(trajectory.vpeak - 3)/(trajectory.tpeak - trajectory.t0)
  }
  else {
    y = 6 + (time - trajectory.tf)*(trajectory.vpeak - 6)/(trajectory.tpeak - trajectory.tf)
  }

  return y
}

export const infectiousnessAtTime2 = (trajectory, t1, time) => {
  if (t1 == trajectory.tpeak || trajectory.tf == trajectory.tpeak) {
    return trajectory.vpeak
  }

  let y

  if (time < trajectory.tpeak) {
    y = (time - t1)*(trajectory.vpeak - 6)/(trajectory.tpeak - t1)
  }
  else {
    y = (time - trajectory.tf)*(trajectory.vpeak - 6)/(trajectory.tpeak - trajectory.tf)
  }

  return Math.max(y, 0)
}


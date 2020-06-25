import * as d3 from "d3"
import * as _ from "lodash"
//import {samplePosteriorMcmc} from "./sampleCalc2"
//import {makeChart, makeChartProps, updateChart} from "./kde"
import { simulateTrajectories, computeInfectiousness, makeInfectiousnessData  } from "./sampleCalc3"
import { makeTrajectoriesSpec, makeInfectiousnessRemovedBarplotSpec, makeIndividualInfectiousnessScatterSpec } from "./vizcalc3"
import {saveAs} from "file-saver"
import * as vega from "vega"

const numSamples = 100

const vsensElem = document.getElementById("vsens")
const testfreqElem = document.getElementById("testfreq")
const delayElem = document.getElementById("delay")
const incubationminElem = document.getElementById("incubationmin")
const incubationmaxElem = document.getElementById("incubationmax")
const onsetfixedElem = document.getElementById("onsetfixed")
const onsetgammaElem = document.getElementById("onsetgamma")
const peakloadminElem = document.getElementById("peakloadmin")
const peakloadmaxElem = document.getElementById("peakloadmax")
const decayminElem = document.getElementById("decaymin")
const decaymaxElem = document.getElementById("decaymax")
const runSamplingElem = document.getElementById("runsampling")
const summaryElem = document.getElementById("summary")
const fvalElem = document.getElementById("fval")

let vsens = parseFloat(vsensElem.value)
let testfreq = parseInt(testfreqElem.value)
let delay = parseInt(delayElem.value)
let incubationmin = parseFloat(incubationminElem.value)
let incubationmax = parseFloat(incubationmaxElem.value)
let onsetfixed = parseFloat(onsetfixedElem.value)
let onsetgamma = parseFloat(onsetgammaElem.value)
let peakloadmin = parseFloat(peakloadminElem.value)
let peakloadmax = parseFloat(peakloadmaxElem.value)
let decaymin = parseFloat(decayminElem.value)
let decaymax = parseFloat(decaymaxElem.value)

let trajectoriesView, barplotView, scatterplotView

const updateValues = async () => {
  vsens = parseFloat(vsensElem.value)
  testfreq = parseInt(testfreqElem.value)
  delay = parseInt(delayElem.value)
  incubationmin = parseFloat(incubationminElem.value)
  incubationmax = parseFloat(incubationmaxElem.value)
  onsetfixed = parseFloat(onsetfixedElem.value)
  onsetgamma = parseFloat(onsetgammaElem.value)
  peakloadmin = parseFloat(peakloadminElem.value)
  peakloadmax = parseFloat(peakloadmaxElem.value)
  decaymin = parseFloat(decayminElem.value)
  decaymax = parseFloat(decaymaxElem.value)

  if ((decaymin > decaymax) || (peakloadmin > peakloadmax) || (incubationmin > incubationmax)) {
    return
  }

  const trajectories = await simulateTrajectories({
    incubationmin, incubationmax, onsetfixed, onsetgamma, peakloadmin, peakloadmax, decaymin, decaymax, numSamples
  })

  const trajectoriesSpec = makeTrajectoriesSpec(trajectories)

  trajectoriesView = new vega.View(vega.parse(trajectoriesSpec), {
    renderer: 'svg',
    container: '#trajectories',
    hover: true
  })

  window.view = trajectoriesView
  window.view.logLevel(vega.Info);

  trajectoriesView.runAsync()

  const infectiousnesses = computeInfectiousness(trajectories, {vsens, testfreq, delay})
  const infectiousnessesBaseline = computeInfectiousness(trajectories, {
    vsens,
    testfreq: 1000,
    delay: 1000
  })

  const infectiousnessData = makeInfectiousnessData(infectiousnesses, infectiousnessesBaseline)
  const infectiousnessRemovedBarplotSpec = makeInfectiousnessRemovedBarplotSpec(infectiousnessData)

  barplotView = new vega.View(vega.parse(infectiousnessRemovedBarplotSpec), {
    renderer: 'svg',
    container: '#infectiousness-removed',
    hover: true
  })

  barplotView.runAsync()

  const individualInfectiousnessesScatterSpec = makeIndividualInfectiousnessScatterSpec(infectiousnesses, infectiousnessesBaseline)

  scatterplotView = new vega.View(vega.parse(individualInfectiousnessesScatterSpec), {
    renderer: 'svg',
    container: '#individual-infectiousnesses',
    hover: true
  })

  scatterplotView.runAsync()

  fvalElem.textContent = Math.round(1000 * (100 - (infectiousnessData[2]['y'] + infectiousnessData[3]['y']))/(100 - (infectiousnessData[0]['y'] + infectiousnessData[1]['y'])))/1000
  summaryElem.style.display = "block"
}

runSamplingElem.addEventListener("click", updateValues)
updateValues()


  /*
let wrapperSvg, chart, chartSe, chartSp, progressElemReady = false

const updateProgressBar = async (progress) => {
  if (progressElemReady) {
    progressElem.MaterialProgress.setProgress(progress)
  }
}

*/

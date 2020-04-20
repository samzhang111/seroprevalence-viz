import * as d3 from "d3"
import * as _ from "lodash"
import {samplePosteriorLog} from "./posteriors"
import {makeChart, makeChartProps, updateChart} from "./kde"
import {saveAs} from "file-saver"

let nsamples = 10000
let progressElemReady = false

const numposElem = document.getElementById("numpos")
const numnegElem = document.getElementById("numneg")
const sensElem = document.getElementById("sensitivity")
const specElem = document.getElementById("specificity")
const downloadElem = document.getElementById("downloadsvg")
const progressElem = document.getElementById("samplingProgress")
const runSamplingElem = document.getElementById("runsampling")

let nplus = parseInt(numposElem.value)
let nminus = parseInt(numnegElem.value)
let v = 1 - parseFloat(sensElem.value)
let u = 1 - parseFloat(specElem.value)

const makeDisplayParams = () => {

  return `# positive tests: ${nplus}
# negative tests: ${nminus}

Sensitivity: ${1 - v}
Specificity: ${1 - u}`
}


const updateProgressBar = async (progress) => {
  if (progressElemReady) {
    progressElem.MaterialProgress.setProgress(progress)
  }
}

let data, chartProps, width, height, chart

const initChart = async () => {
  data = await samplePosteriorLog(nplus, nminus, u, v, nsamples, updateProgressBar)
  chartProps = makeChartProps(data, "Prevalence", {sens: 1 - v, spec: 1 - u, nplus, nminus})
  width = 500, height = 270
  chart = makeChart(chartProps, {width, height, displayParams: makeDisplayParams()})

  d3.select("#posteriorviz").append(() => chart.svg.node())
}

const updateValues = async () => {
  nplus = parseInt(numposElem.value)
  nminus = parseInt(numnegElem.value)
  v = 1 - parseFloat(sensElem.value)
  u = 1 - parseFloat(specElem.value)

  if (
    isNaN(nplus) || isNaN(nminus) || isNaN(u) || isNaN(v) ||
    nplus < 0 || nminus < 0 || v < 0 || u < 0 || v > 1 || u > 1
  ) {
    return
  }

  data = await samplePosteriorLog(nplus, nminus, u, v, nsamples, updateProgressBar)
  chartProps = makeChartProps(data, "Prevalence", {sens: 1 - v, spec: 1 - u, nplus, nminus})

  updateChart(chart, chartProps, {displayParams: makeDisplayParams()})
}

const downloadChart = () => {
  try {
        let isFileSaverSupported = !!new Blob();
    } catch (e) {
        alert("Your browser does not support this download. Alternatives: you can try to take a screenshot, or print this page as a PDF instead.");
    }

  const html = chart.svg
        .attr("title", "Prevalence")
        .attr("version", 1.0)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

  const blob = new Blob([html], {type: "image/svg+xml"});
  saveAs(blob, `se=${1-v},sp=${1-u},pos=${nplus},neg=${nminus}.svg`)
}

progressElem.addEventListener('mdl-componentupgraded', function() {
  progressElemReady = true
})

window.addEventListener('load', initChart)

runSamplingElem.addEventListener("click", updateValues)
downloadElem.addEventListener('click', downloadChart)

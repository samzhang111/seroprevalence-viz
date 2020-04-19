import * as d3 from "d3"
import * as _ from "lodash"
import {samplePosteriorMcmc} from "./posteriors"
import {makeChart, makeChartProps, updateChart} from "./kde"
import {saveAs} from "file-saver"


const numposElem = document.getElementById("numpos")
const numnegElem = document.getElementById("numneg")
const tpElem = document.getElementById("tp")
const fpElem = document.getElementById("fp")
const tnElem = document.getElementById("tn")
const fnElem = document.getElementById("fn")
const numsampsElem = document.getElementById("numsamps")
const downloadElem = document.getElementById("downloadsvg")
const runSamplingElem = document.getElementById("runsampling")
const progressElem = document.getElementById("samplingProgress")

let nplus = parseInt(numposElem.value)
let nminus = parseInt(numnegElem.value)

let tp = parseFloat(tpElem.value)
let tn = parseFloat(tnElem.value)
let fp = parseFloat(fpElem.value)
let fn = parseFloat(fnElem.value)
let numsamps = parseFloat(numsampsElem.value)

let wrapperSvg, chart, chartSe, chartSp, progressElemReady = false

const updateProgressBar = async (progress) => {
  if (progressElemReady) {
    progressElem.MaterialProgress.setProgress(progress)
  }
}

const width = 500, height = 270

const makeDisplayParams = () => {

  return `# positive tests: ${nplus}
# negative tests: ${nminus}

True Positives: ${tp}
False Positives: ${fp}
True Negatives: ${tn}
False Negatives: ${fn}`
}


const initChart = async () => {
  let data = await samplePosteriorMcmc(numsamps, nplus, nplus + nminus, tp, tn, fp, fn, updateProgressBar)
  let chartProps = makeChartProps(data.rPosterior, "Prevalence", {sens: -1, spec: -1, nplus, nminus})
  wrapperSvg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height*3]);
  chart = makeChart(chartProps, {width, height, hideFooter: true, displayParams: makeDisplayParams()})

  let chartPropsSe = makeChartProps(data.sePosterior, "Sensitivity", {sens: -1, spec: -1, nplus, nminus})
  chartSe = makeChart(chartPropsSe, {width, height, hideFooter: true, hideSettings: true})

  let chartPropsSp = makeChartProps(data.spPosterior, "Specificity", {sens: -1, spec: -1, nplus, nminus})
  chartSp = makeChart(chartPropsSp, {width, height, hideSettings: true})

  wrapperSvg.append(() => chart.svg.attr("y", -height).node())
  wrapperSvg.append(() => chartSe.svg.attr("y", 0).node())
  wrapperSvg.append(() => chartSp.svg.attr("y", height).node())

  d3.select("#posteriorviz").append(() => wrapperSvg.node())
  //d3.select("#posteriorviz").append(() => chart.svg.node())
  //d3.select("#sensviz").append(() => chartSe.svg.node())
  //d3.select("#specviz").append(() => chartSp.svg.node())
}

const updateValues = async () => {
  nplus = parseInt(numposElem.value)
  nminus = parseInt(numnegElem.value)
  tp = parseFloat(tpElem.value)
  tn = parseFloat(tnElem.value)
  fp = parseFloat(fpElem.value)
  fn = parseFloat(fnElem.value)
  numsamps = parseFloat(numsampsElem.value)

  if (
    isNaN(nplus) || isNaN(nminus) || isNaN(tp) || isNaN(tn)
    || isNaN(fp) || isNaN(fn)
  ) {
    return
  }

  let data = await samplePosteriorMcmc(numsamps, nplus, nplus + nminus, tp, tn, fp, fn, updateProgressBar)

  let chartProps = makeChartProps(data.rPosterior, "Prevalence", {sens: -1, spec: -1, nplus, nminus})
  let chartPropsSe = makeChartProps(data.sePosterior, "Sensitivity", {sens: -1, spec: -1, nplus, nminus})
  let chartPropsSp = makeChartProps(data.spPosterior, "Specificity", {sens: -1, spec: -1, nplus, nminus})

  updateChart(chart, chartProps, {displayParams: makeDisplayParams()})
  updateChart(chartSe, chartPropsSe)
  updateChart(chartSp, chartPropsSp)
}

const downloadChart = () => {
  try {
        let isFileSaverSupported = !!new Blob();
    } catch (e) {
        alert("Your browser does not support this download. Alternatives: you can try to take a screenshot, or print this page as a PDF instead.");
    }

  const html = wrapperSvg
        .attr("title", "Prevalence")
        .attr("version", 1.0)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

  const blob = new Blob([html], {type: "image/svg+xml"});
  saveAs(blob, `pos=${nplus},neg=${nminus};tp=${tp},fp=${fp},tn=${tn},fn=${fn}.svg`)
}

progressElem.addEventListener('mdl-componentupgraded', function() {
  progressElemReady = true
  initChart()
})

runSamplingElem.addEventListener("click", updateValues)
//numposElem.addEventListener('input', updateValues)
//numnegElem.addEventListener('input', updateValues)
downloadElem.addEventListener('click', downloadChart)

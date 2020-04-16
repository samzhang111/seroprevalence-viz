import * as d3 from "d3"
import * as _ from "lodash"
import {samplePosteriorLog} from "./posteriors"
import {makeChart, makeChartProps, updateChart} from "./kde"
import {saveAs} from "file-saver"

let nsamples = 10000

const numposElem = document.getElementById("numpos")
const numnegElem = document.getElementById("numneg")
const sensElem = document.getElementById("sensitivity")
const specElem = document.getElementById("specificity")
const downloadElem = document.getElementById("downloadsvg")

let nplus = parseInt(numposElem.value)
let nminus = parseInt(numnegElem.value)
let u = 1 - parseFloat(sensElem.value)
let v = 1 - parseFloat(specElem.value)
let data = samplePosteriorLog(nplus, nminus, u, v, nsamples)
let chartProps = makeChartProps(data, "Seroprevalence")
let chart = makeChart(chartProps)

const initChart = () => {
  d3.select("#posteriorviz").append(() => chart.svg.node())
}

const updateValues = () => {
  nplus = parseInt(numposElem.value)
  nminus = parseInt(numnegElem.value)
  u = 1 - parseFloat(sensElem.value)
  v = 1 - parseFloat(specElem.value)

  if (isNaN(nplus) || isNaN(nminus) || isNaN(u) || isNaN(v)) {
    return
  }

  data = samplePosteriorLog(nplus, nminus, u, v, nsamples)
  chartProps = makeChartProps(data, "Seroprevalence")

  updateChart(chart, chartProps)
}

const downloadChart = () => {
  try {
        let isFileSaverSupported = !!new Blob();
    } catch (e) {
        alert("Your browser does not support this download. Alternatives: you can try to take a screenshot, or print this page as a PDF instead.");
    }

  const html = chart.svg
        .attr("title", "Seroprevalence")
        .attr("version", 1.0)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

  const blob = new Blob([html], {type: "image/svg+xml"});
  saveAs(blob, `se=${1-u},sp=${1-v},pos=${nplus},neg=${nminus}.svg`)
}

window.addEventListener('load', initChart)
numposElem.addEventListener('input', updateValues)
numnegElem.addEventListener('input', updateValues)
sensElem.addEventListener('input', updateValues)
specElem.addEventListener('input', updateValues)
downloadElem.addEventListener('click', downloadChart)


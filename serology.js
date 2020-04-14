import * as d3 from "d3"
import * as _ from "lodash"
import {samplePosteriorLog} from "./posteriors"
import {makeChart, makeChartProps, updateChart} from "./kde"

let nsamples = 10000

const numposElem = document.getElementById("numpos")
const numnegElem = document.getElementById("numneg")
const sensElem = document.getElementById("sensitivity")
const specElem = document.getElementById("specificity")

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

window.addEventListener('load', initChart)
numposElem.addEventListener('input', updateValues)
numnegElem.addEventListener('input', updateValues)
sensElem.addEventListener('input', updateValues)
specElem.addEventListener('input', updateValues)


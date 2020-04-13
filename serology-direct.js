import * as d3 from "d3/d3.js"

window.d3 = d3

import * as functionPlot from "function-plot"
import {computePosterior, computeLogPosterior, samplePosterior} from "./posteriors"

const numposElem = document.getElementById("numpos")
const numnegElem = document.getElementById("numneg")
const sensElem = document.getElementById("sensitivity")
const specElem = document.getElementById("specificity")

let u = 0.9
let v = 0.5
let nplus = 50
let nminus = 10
let maxY = 0

let posteriorviz = functionPlot({
  target: '#posteriorviz',
  
  disableZoom: false,
  xAxis: { domain: [0, 1]},
  yAxis: { domain: [0, 10]},
  data: [{
    fn: function (scope) {
      let y = -computeLogPosterior(scope.x, nplus, nminus, u, v)

      if (y > maxY) {
	maxY = y
      }

      return y
    },
    range: [0, 1],
    nSamples: 1000,
    sampler: 'builtIn',
    graphType: 'polyline'
  }]
})

const updateValues = () => {
  nplus = parseFloat(numposElem.value)
  nminus = parseFloat(numnegElem.value)
  u = 1 - parseFloat(sensElem.value)
  v = 1 - parseFloat(specElem.value)

  maxY = 0
  posteriorviz.draw()
  posteriorviz.programmaticZoom([0, 1], [0, maxY + 0.5])
}

window.addEventListener('load', updateValues)
numposElem.addEventListener('input', updateValues)
numnegElem.addEventListener('input', updateValues)
sensElem.addEventListener('input', updateValues)
specElem.addEventListener('input', updateValues)


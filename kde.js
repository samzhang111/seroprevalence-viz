import * as d3 from "d3"
import * as _ from "lodash"
import {jStat} from "jstat"
import max from '@stdlib/math/base/special/max'
import min from '@stdlib/math/base/special/min'
import round from '@stdlib/math/base/special/round'
import iterstdev from '@stdlib/stats/iter/stdev'
import array2iterator from '@stdlib/array/to-iterator'
import itermean from '@stdlib/stats/iter/mean';
import normalPdf from '@stdlib/stats/base/dists/normal/pdf';

const stdev = data => iterstdev(array2iterator(data))
const computeMean = data => itermean(array2iterator(data))

function silvermanish(data) {
  // Silverman's method for estimating the bandwidth, except enlarged by a factor of 4/3 to be smoother.
  // Hence, "Silverman-ish"...

  let sd = stdev(data)
  let quartiles = jStat.quartiles(data)
  let iqr = quartiles[2] - quartiles[0]

  return 1.2*min(sd, iqr/1.34) * data.length**(-0.2)
}

function kde(kernel, thresholds, data) {
  return thresholds.map(t => [t, d3.mean(data, d => kernel(t - d))]);
}

function gaussian(bandwidth) {
  return x => normalPdf(x/bandwidth, 0, 1)
}

let width, height

const margin = ({top: 20, right: 30, bottom: 50, left: 40})

const leadingZerosBinary = (x) => {
  let i = 0
  while (x < 1) {
    i += 1
    x *= 2
  }

  return i
}

export const makeChartProps = (data, xlabel, settings) => {
  width = settings.width || width || 500
  height = settings.height || height || 270

  const mean = computeMean(data)
  const posteriorCi = jStat.quantiles(data, [0.05, 0.95])
  const ciRange = posteriorCi[1] - posteriorCi[0]

  let order = ciRange == 0 ? 1 : 2**(0.9-leadingZerosBinary(ciRange))

  if (order == 1) {
    order = ciRange + 0.1
  }

  const lowerDomain = max(0, mean - order)
  const upperDomain = min(1.15, mean + order)

  let xrange = [lowerDomain, upperDomain]

  const x = d3.scaleLinear()
      .domain(xrange).nice()
    //.domain([d3.max([0, d3.min(data) - 0.1]), d3.min([1.3, d3.max(data) + 0.1])]).nice()
      .range([margin.left, width - margin.right])

  const thresholds = x.ticks(100)

  const bins = d3.histogram()
      .domain(x.domain())
      .thresholds(thresholds)
  (data)

  const bandwidth = silvermanish(data)

  let density = kde(gaussian(bandwidth), thresholds, data)

  const maxDensity = d3.max(_.unzip(density)[1])
  const maxBarHeight = d3.max(bins, d => d.length) / data.length

  density = _.map(density, (d) => [d[0], maxBarHeight * d[1] / maxDensity])

  const y = d3.scaleLinear()
    .domain([0, maxBarHeight])
    .range([height - margin.bottom, margin.top])

  const line = d3.line()
      .curve(d3.curveBasis)
      .x(d => x(d[0]))
      .y(d => y(d[1]))

  const xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat((d) => ( (d <= 1) ? d : "")))
      .call(g => {
	return g.append("text")
	    .attr("x", width - margin.right)
	    .attr("y", - 6)
	    .attr("fill", "#000")
	    .attr("text-anchor", "end")
	    .attr("font-weight", "bold")
	  .text(xlabel)
      })

  const yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).tickFormat("").tickSizeOuter(0))

  return {x, y, density, thresholds, bins, line, xAxis, yAxis, data, mean, maxBarHeight, posteriorCi, settings, xlabel}
}

const updateBars = (rects, chartProps, skipTransition=false) => {
  let {bins, x, y, data} = chartProps

  rects = rects.data(bins)
    .join("rect")
    .attr("fill", "#6495ed")

  rects = skipTransition ? rects : rects.transition(1000)

  return rects
      .attr("x", d => x(d.x0) + 1)
      .attr("y", d => y(d.length / data.length))
      .attr("width", d => x(d.x1) - x(d.x0) - 1)
      .attr("height", d => y(0) - y(d.length / data.length))
}

const updateDensity = (path, chartProps, skipTransition=false) => {
  let {density, line} = chartProps

  path = path.datum(density)
    .join("path")

  path = skipTransition ? path : path.transition(1000)

  return path.attr("class", "density")
      .attr("fill", "none")
      .attr("stroke", "#000")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("d", line)
}

const updateMeanLine = (lineContainer, chartProps, skipTransition=false) => {
  let {mean, x, y, maxBarHeight, posteriorCi} = chartProps

  let meanLine = lineContainer.select(".meanLine")
  let meanLabel = lineContainer.select(".meanLabel")
  let lowerCiLine = lineContainer.select(".lowerCiLine")
  let lowerCiLabel = lineContainer.select(".lowerCiLabel")
  let upperCiLine = lineContainer.select(".upperCiLine")
  let upperCiLabel = lineContainer.select(".upperCiLabel")


  meanLine = skipTransition ? meanLine : meanLine.transition(1000)
  meanLabel = skipTransition ? meanLabel : meanLabel.transition(1000)
  lowerCiLine = skipTransition ? lowerCiLine : lowerCiLine.transition(1000)
  lowerCiLabel = skipTransition ? lowerCiLabel : lowerCiLabel.transition(1000)
  upperCiLine = skipTransition ? upperCiLine : upperCiLine.transition(1000)
  upperCiLabel = skipTransition ? upperCiLabel : upperCiLabel.transition(1000)

  let upperCiOffset = posteriorCi[1] - posteriorCi[0] > 0.05 ? -5 : 10

  meanLine
    .attr("x1", x(mean))
    .attr("x2", x(mean))
    .attr("y1", y(0))
    .attr("y2", y(maxBarHeight) - 20)
    .attr("fill", "none")
    .attr("stroke-width", 2)
    .attr("stroke", "#000")
    .attr("stroke-linecap", "round")

  meanLabel
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-size", "10px")
    .attr("x", x(mean) + 5)
    .attr("y", y(maxBarHeight) - 5)
    .text(`${(round(mean*10000)/10000).toFixed(4)}`)

  lowerCiLine
    .attr("x1", x(posteriorCi[0]))
    .attr("x2", x(posteriorCi[0]))
    .attr("y1", y(0))
    .attr("y2", y(maxBarHeight) - 20)
    .attr("fill", "none")
    .attr("stroke-width", 1)
    .attr("stroke", "#000")
    .attr("stroke-linecap", "round")

  lowerCiLabel
    .attr("fill", "#000")
    .attr("text-anchor", "end")
    .attr("font-size", "10px")
    .attr("x", x(posteriorCi[0]) - 4)
    .attr("y", y(maxBarHeight) - 5)
    .text(`${(round(posteriorCi[0]*10000)/10000).toFixed(4)}`)

  upperCiLine
    .attr("x1", x(posteriorCi[1]))
    .attr("x2", x(posteriorCi[1]))
    .attr("y1", y(0))
    .attr("y2", y(maxBarHeight) - 20)
    .attr("fill", "none")
    .attr("stroke-width", 1)
    .attr("stroke", "#000")
    .attr("stroke-linecap", "round")

  upperCiLabel
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-size", "10px")
    .attr("x", x(posteriorCi[1]) + 5)
    .attr("y", y(maxBarHeight) + upperCiOffset)
    .text(`${(round(posteriorCi[1]*10000)/10000).toFixed(4)}`)

  return lineContainer
}

export const updateChart = (chart, chartProps, settings, skipTransition=false) => {
  let {svg, gXAxis, gYAxis} = chart

  let rects = svg.selectAll("rect")
  let densityPath = svg.select("path.density")
  let posteriorLines = svg.select(".posteriorLines")
  let settingsContainer = svg.select(".settings")
  let footerContainer = svg.select(".footer")

  updateBars(rects, chartProps, skipTransition)
  updateDensity(densityPath, chartProps, skipTransition)
  updateMeanLine(posteriorLines, chartProps, skipTransition)
  updateSettings(settingsContainer, settings)
  updateFooter(footerContainer, chartProps)

  gXAxis.call(chartProps.xAxis)
  //gYAxis.call(chartProps.yAxis)
}

export const updateSettings = (settingsContainer, settings) => {
  let text = settingsContainer.select(".settingsText")
  let params = settingsContainer.select(".params")

  const settingsOffset = 40
  const settingsGap = 10

  params
    .attr("x", width - margin.right)
    .attr("y", settingsOffset - settingsGap)
    .attr("fill", "#000")
    .attr("text-anchor", "end")
    .attr("font-size", "10")
    .attr("text-decoration", "underline")
  .text("Input Parameters:")

  text.data([settings.displayParams])
      .attr("x", width - margin.right)
      .attr("y", settingsOffset)
      .attr("text-anchor", "end")
      .attr("fill", "#000")
      .attr("font-size", "10")

  let lines = text.selectAll("tspan.settingsLine")
      .data(d => d.split("\n"))
      .join("tspan")
      .attr("class", "settingsLine")
      .text(d => d)
      .attr("x", width - margin.right)
      .attr("text-anchor", "end")
      .attr("dy", 15);
}

const updateFooter = (footerContainer, chartProps) => {
  let linkc = footerContainer.select(".link")

  linkc
    .attr("x", width - margin.right)
    .attr("y", height - 23)
    .attr("fill", "#000")
    .attr("text-anchor", "end")
    .attr("font-size", "7")
    .attr("style", "white-space: pre")
    .text(`${Number(chartProps.data.length).toLocaleString()} posterior draws, with mean and 90% credible interval.        Generated at https://larremorelab.github.io/covid19testgroup`)

}

export const makeChart = (chartProps, settings={}) => {
  width = settings.width || width || 500
  height = settings.height || height || 270

  let svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);


  const rects = svg.append("g")
    .selectAll("rect")

  updateBars(rects, chartProps, true)

  const densityPath = svg.append("path")

  updateDensity(densityPath, chartProps, true)

  const posteriorLineContainer = svg.append("g")
  posteriorLineContainer.attr("class", "posteriorLines")
  posteriorLineContainer.append("line").attr("class", "meanLine")
  posteriorLineContainer.append("text").attr("class", "meanLabel")

  posteriorLineContainer.append("line").attr("class", "lowerCiLine")
  posteriorLineContainer.append("text").attr("class", "lowerCiLabel")

  posteriorLineContainer.append("line").attr("class", "upperCiLine")
  posteriorLineContainer.append("text").attr("class", "upperCiLabel")

  updateMeanLine(posteriorLineContainer, chartProps, true)

  if (settings.displayParams) {
    const settingsContainer = svg.append("g")
    settingsContainer.attr("class", "settings")

    settingsContainer.append("text").attr("class", "params")
    settingsContainer.append("text").attr("class", "settingsText")
    updateSettings(settingsContainer, settings)
  }

  let footerContainer = svg.append("g").attr("class", "footer")
  let xlabelc = footerContainer.append("text").attr("class", "xlabel")
  xlabelc.append("text")
      .attr("x", width - margin.right)
      .attr("y", - 6)
      .attr("fill", "#000")
      .attr("text-anchor", "end")
      .attr("font-weight", "bold")
    .text(chartProps.xlabel)

  if (!settings.hideFooter) {
    let linkc = footerContainer.append("text").attr("class", "link")
    let citec1 = footerContainer.append("text").attr("class", "cite1")
    let citec2 = footerContainer.append("text").attr("class", "cite2")

    updateFooter(footerContainer, chartProps)

    citec1
      .attr("x", margin.right)
      .attr("y", height - 10)
      .attr("fill", "#000")
      .attr("text-anchor", "start")
      .attr("font-size", "7")
      .attr("style", "white-space: pre")
      .text(`Citation:`)

    citec2
      .attr("x", margin.right)
      .attr("y", height - 3)
      .attr("fill", "#000")
      .attr("text-anchor", "start")
      .attr("font-size", "7")
      .attr("style", "white-space: pre")
      .text(`Larremore et al., Estimating SARS-CoV-2 seroprevalence and epidemiological parameters with uncertainty from serological surveys (2020).`)

  }

  let gXAxis = svg.append("g").call(chartProps.xAxis);
  let gYAxis = svg.append("g").call(chartProps.yAxis);

  return {svg, gXAxis, gYAxis}
}

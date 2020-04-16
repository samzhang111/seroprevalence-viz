import * as d3 from "d3"
import {jStat} from "jstat"

function silvermanish(data) {
  // Silverman's method for estimating the bandwidth, except enlarged by a factor of 4/3 to be smoother.
  // Hence, "Silverman-ish"...

  let stdev = jStat.stdev(data)
  let quartiles = jStat.quartiles(data)
  let iqr = quartiles[2] - quartiles[0]

  return 1.2*Math.min(stdev, iqr/1.34) * data.length**(-0.2)
}

function kde(kernel, thresholds, data) {
  return thresholds.map(t => [t, d3.mean(data, d => kernel(t - d))]);
}

function gaussian(bandwidth) {
  return x => jStat.normal.pdf(x/bandwidth, 0, 1)
}

const width = 500, height = 250
const margin = ({top: 20, right: 30, bottom: 30, left: 40})


export const makeChartProps = (data, xlabel) => {
  const mean = jStat.mean(data)
  let xrange = mean < 0.6 ? [0, 0.7] : [0.45, 1.15]
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
  const posteriorCi = jStat.quantiles(data, [0.05, 0.95])

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
      .call(g => g.append("text")
	  .attr("x", width - margin.right)
	  .attr("y", -6)
	  .attr("fill", "#000")
	  .attr("text-anchor", "end")
	  .attr("font-weight", "bold")
	  .text(xlabel))

  const yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).tickFormat("").tickSizeOuter(0))

  return {x, y, density, thresholds, bins, line, xAxis, yAxis, data, mean, maxBarHeight, posteriorCi}
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
    .text(`${(Math.round(mean*1000)/1000).toFixed(3)}`)

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
    .text(`${(Math.round(posteriorCi[0]*1000)/1000).toFixed(3)}`)

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
    .text(`${(Math.round(posteriorCi[1]*1000)/1000).toFixed(3)}`)

  return lineContainer
}

export const updateChart = (chart, chartProps, skipTransition=false) => {
  let {svg, gXAxis, gYAxis} = chart

  let rects = svg.selectAll("rect")
  let densityPath = svg.select("path.density")
  let posteriorLines = svg.select(".posteriorLines")

  updateBars(rects, chartProps, skipTransition)
  updateDensity(densityPath, chartProps, skipTransition)
  updateMeanLine(posteriorLines, chartProps, skipTransition)

  gXAxis.call(chartProps.xAxis)
  //gYAxis.call(chartProps.yAxis)
}

export const makeChart = (chartProps) => {
  const svg = d3.create("svg")
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

  let gXAxis = svg.append("g").call(chartProps.xAxis);
  let gYAxis = svg.append("g").call(chartProps.yAxis);

  return {svg, gXAxis, gYAxis}
}

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
  const x = d3.scaleLinear()
      .domain([0, 0.7]).nice()
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

  return {x, y, density, thresholds, bins, line, xAxis, yAxis, data}
}

export const updateChart = (chart, chartProps, skipTransition=false) => {
  let {svg, gXAxis, gYAxis} = chart

  let rects = svg.selectAll("rect")
  let path = svg.select("path")
  updateBars(rects, chartProps, skipTransition)
  updateDensity(path, chartProps, skipTransition)

  //gXAxis.call(chartProps.xAxis)
  //gYAxis.call(chartProps.yAxis)
}

const updateBars = (rects, chartProps, skipTransition=false) => {
  let {bins, x, y, data} = chartProps

  if (skipTransition) {
    return rects.data(bins)
      .join("rect")
	.attr("fill", "#bbb")
	.attr("x", d => x(d.x0) + 1)
	.attr("y", d => y(d.length / data.length))
	.attr("width", d => x(d.x1) - x(d.x0) - 1)
	.attr("height", d => y(0) - y(d.length / data.length))
  }

  return rects.data(bins)
    .join("rect")
      .attr("fill", "#bbb")
      .transition(1000)
      .attr("x", d => x(d.x0) + 1)
      .attr("y", d => y(d.length / data.length))
      .attr("width", d => x(d.x1) - x(d.x0) - 1)
      .attr("height", d => y(0) - y(d.length / data.length))
}

const updateDensity = (path, chartProps, skipTransition=false) => {
  let {density, line} = chartProps

  if (skipTransition) {
    return path.datum(density)
      .join("path")
	.attr("fill", "none")
	.attr("stroke", "#000")
	.attr("stroke-width", 1.5)
	.attr("stroke-linejoin", "round")
	.attr("d", line)
  }

  return path.datum(density)
    .join("path")
      .transition(1000)
      .attr("fill", "none")
      .attr("stroke", "#000")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("d", line)
}

export const makeChart = (chartProps) => {
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

  const rects = svg.append("g")
    .selectAll("rect")

  updateBars(rects, chartProps, true)

  const path = svg.append("path")

  updateDensity(path, chartProps, true)

  let gXAxis = svg.append("g").call(chartProps.xAxis);
  let gYAxis = svg.append("g").call(chartProps.yAxis);

  return {svg, gXAxis, gYAxis}
}

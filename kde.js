import * as d3 from "d3"
import {jStat} from "jstat"

function kde(kernel, thresholds, data) {
  return thresholds.map(t => [t, d3.mean(data, d => kernel(t - d))]);
}

function gaussian(bandwidth) {
  return x => jStat.normal.pdf(x/bandwidth, 0, 1)
}

const width = 500, height = 250
const margin = ({top: 20, right: 30, bottom: 30, left: 40})

export const makeChartProps = data => {
  const x = d3.scaleLinear()
      .domain([d3.max([0, d3.min(data) - 0.1]), d3.min([1, d3.max(data) + 0.1])]).nice()
      .range([margin.left, width - margin.right])

  const thresholds = x.ticks(100)

  const bins = d3.histogram()
      .domain(x.domain())
      .thresholds(thresholds)
  (data)

  let density = kde(gaussian(0.03), thresholds, data)

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
      .call(d3.axisBottom(x))
      .call(g => g.append("text")
	  .attr("x", width - margin.right)
	  .attr("y", -6)
	  .attr("fill", "#000")
	  .attr("text-anchor", "end")
	  .attr("font-weight", "bold")
	  .text("Seroprevalence"))

  const yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(null, "%"))
      .call(g => g.select(".domain").remove())

  return {x, y, density, thresholds, bins, line, xAxis, yAxis, data}
}

export const updateBars = (rects, chartProps) => {
  let {bins, x, y, data} = chartProps

  return rects.data(bins)
    .join("rect")
      .attr("x", d => x(d.x0) + 1)
      .attr("y", d => y(d.length / data.length))
      .attr("width", d => x(d.x1) - x(d.x0) - 1)
      .attr("height", d => y(0) - y(d.length / data.length))
}

export const updateDensity = (path, chartProps) => {
  let {density, line} = chartProps

  return path.datum(density)
    .join("path")
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
    .attr("fill", "#bbb")
    .selectAll("rect")

  updateBars(rects, chartProps)

  const path = svg.append("path")

  updateDensity(path, chartProps)

  let gXAxis = svg.append("g").call(chartProps.xAxis);
  let gYAxis = svg.append("g").call(chartProps.yAxis);

  return {svg, gXAxis, gYAxis}
}

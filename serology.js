import * as d3 from "d3"
import * as _ from "lodash"
import {samplePosterior} from "./posteriors"
import {makeChart, makeChartProps, updateBars, updateDensity} from "./kde"


let nsamples = 20000

d3.select('#downloadposterior').on('click', function(){
	let svgString = getSVGString(chart.svg.node());
	svgString2Image( svgString, 2*width, 2*height, 'png', save ); // passes Blob and filesize String to the callback

	function save( dataBlob, filesize ){
		saveAs( dataBlob, 'serology-posterior.png' ); // FileSaver.js function
	}
});

function getSVGString( svgNode ) {
	svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
	var cssStyleText = getCSSStyles( svgNode );
	appendCSS( cssStyleText, svgNode );

	var serializer = new XMLSerializer();
	var svgString = serializer.serializeToString(svgNode);
	svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
	svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix

	return svgString;

	function getCSSStyles( parentElement ) {
		var selectorTextArr = [];

		// Add Parent element Id and Classes to the list
		selectorTextArr.push( '#'+parentElement.id );
		for (var c = 0; c < parentElement.classList.length; c++)
				if ( !contains('.'+parentElement.classList[c], selectorTextArr) )
					selectorTextArr.push( '.'+parentElement.classList[c] );

		// Add Children element Ids and Classes to the list
		var nodes = parentElement.getElementsByTagName("*");
		for (var i = 0; i < nodes.length; i++) {
			var id = nodes[i].id;
			if ( !contains('#'+id, selectorTextArr) )
				selectorTextArr.push( '#'+id );

			var classes = nodes[i].classList;
			for (var c = 0; c < classes.length; c++)
				if ( !contains('.'+classes[c], selectorTextArr) )
					selectorTextArr.push( '.'+classes[c] );
		}

		// Extract CSS Rules
		var extractedCSSText = "";
		for (var i = 0; i < document.styleSheets.length; i++) {
			var s = document.styleSheets[i];
			
			try {
			    if(!s.cssRules) continue;
			} catch( e ) {
		    		if(e.name !== 'SecurityError') throw e; // for Firefox
		    		continue;
		    	}

			var cssRules = s.cssRules;
			for (var r = 0; r < cssRules.length; r++) {
				if ( contains( cssRules[r].selectorText, selectorTextArr ) )
					extractedCSSText += cssRules[r].cssText;
			}
		}
		

		return extractedCSSText;

		function contains(str,arr) {
			return arr.indexOf( str ) === -1 ? false : true;
		}

	}

	function appendCSS( cssText, element ) {
		var styleElement = document.createElement("style");
		styleElement.setAttribute("type","text/css"); 
		styleElement.innerHTML = cssText;
		var refNode = element.hasChildNodes() ? element.children[0] : null;
		element.insertBefore( styleElement, refNode );
	}
}


function svgString2Image( svgString, width, height, format, callback ) {
	var format = format ? format : 'png';

	var imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL

	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	var image = new Image();
	image.onload = function() {
		context.clearRect ( 0, 0, width, height );
		context.drawImage(image, 0, 0, width, height);

		canvas.toBlob( function(blob) {
			var filesize = Math.round( blob.length/1024 ) + ' KB';
			if ( callback ) callback( blob, filesize );
		});


	};

	image.src = imgsrc;
}

let data, chartProps, chart, nplus, nminus, u, v

const numposElem = document.getElementById("numpos")
const numnegElem = document.getElementById("numneg")
const sensElem = document.getElementById("sensitivity")
const specElem = document.getElementById("specificity")
//const numsampsElem = document.getElementById("numsamps")

nplus = parseInt(numposElem.value)
nminus = parseInt(numnegElem.value)
u = 1 - parseFloat(sensElem.value)
v = 1 - parseFloat(specElem.value)

data = samplePosterior(nplus, nminus, u, v, nsamples)
chartProps = makeChartProps(data)
chart = makeChart(chartProps)

const createChart = () => {
  d3.select("#posteriorviz").append(() => chart.svg.node())
}

const updateValues = () => {
  //nsamples = parseInt(numsampsElem.value)
  nplus = parseInt(numposElem.value)
  nminus = parseInt(numnegElem.value)
  u = 1 - parseFloat(sensElem.value)
  v = 1 - parseFloat(specElem.value)

  data = samplePosterior(nplus, nminus, u, v, nsamples)
  chartProps = makeChartProps(data)

  let {svg, gXAxis, gYAxis} = chart

  let rects = svg.selectAll("rect")
  let path = svg.select("path")
  updateBars(rects, chartProps)
  updateDensity(path, chartProps)

  gXAxis.call(chartProps.xAxis)
  gYAxis.call(chartProps.yAxis)
}

window.addEventListener('load', createChart)
numposElem.addEventListener('input', updateValues)
numnegElem.addEventListener('input', updateValues)
sensElem.addEventListener('input', updateValues)
specElem.addEventListener('input', updateValues)
//numsampsElem.addEventListener('input', updateValues)


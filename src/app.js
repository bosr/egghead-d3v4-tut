// https://sarasoueidan.com/tags/svg/index.html
//
// Margin convention for D3
var margin = { top: 20, right: 10, bottom: 30, left: 40 };
var width = 400 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .call(responsivefy)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

svg.append('rect')
  .attr('width', width / 2)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');

svg.append('rect')
  .attr('x', width / 2)
  .attr('width', width / 2)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');

var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);  // in SVG, y coordinate is top - bottom

var yAxis = d3.axisLeft(yScale).ticks(5);  // ticks is a hint
svg.call(yAxis); // sufficient to draw an axis

var xScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date(2016, 1, 1)])
  .range([0, width]);

var xAxis = d3.axisBottom(xScale)
  .ticks(5);

svg
  .append('g')
    .attr('transform', `translate(0, ${height})`)
  .call(xAxis);

function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style('width')),
    height = parseInt(svg.style('height')),
    aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizez on initial page load
  svg.attr('viewBox', `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMinYMid")
    .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
    var targetWidth = parseInt(container.style("width"));
    svg.attr('width', targetWidth);
    svg.attr('height', Math.round(targetWidth / aspect));
  }
}

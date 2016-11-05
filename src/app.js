// https://sarasoueidan.com/tags/svg/index.html
//
// Margin convention for D3
var margin = { top: 20, right: 10, bottom: 60, left: 40 };
var width = 400 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .call(responsivefy)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);


var data = [
  { score: 63, subject: 'Mathematics' },
  { score: 82, subject: 'Geography' },
  { score: 74, subject: 'Spelling' },
  { score: 97, subject: 'Reading' },
  { score: 52, subject: 'Science' },
  { score: 74, subject: 'Chemistry' },
  { score: 97, subject: 'Physics' },
  { score: 52, subject: 'ASL' }
]


var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);  // in SVG, y coordinate is top - bottom

var yAxis = d3.axisLeft(yScale).ticks(5);  // ticks is a hint
svg.call(yAxis); // sufficient to draw an axis

var xScale = d3.scaleBand()
  .padding(0.2)
  // .paddingInner(0.2)
  // .paddingOuter(0.3)
  .domain(data.map(d => d.subject))
  .range([0, width]);

var xAxis = d3.axisBottom(xScale)
  .ticks(5);

svg
  .append('g')
    .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
  .selectAll('text')
  .style('text-anchor', 'end')
  .attr('transform', 'rotate(-45)');

svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
    .attr('x', d => xScale(d.subject))
    .attr('y', d => yScale(d.score))
    .attr('width', d => xScale.bandwidth())
    .attr('height', d => height - yScale(d.score))
    // .style('fill', 'steelblue');

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

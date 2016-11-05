// https://sarasoueidan.com/tags/svg/index.html
//
// Margin convention for D3
var margin = { top: 20, right: 10, bottom: 30, left: 40 };
var width = 400 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

var fullWidth = width + margin.left + margin.right;
var fullHeight = height + margin.top + margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('viewBox', `0 0 ${fullWidth} ${fullHeight}`)
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
// .ticks(5, '%') for percentages (needs domain [0, 1])
// .ticks(5, '.2s') 2 decimals
// .ticks(5, 's') 10M
// .ticksValues([8, 19, 43, 77])
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

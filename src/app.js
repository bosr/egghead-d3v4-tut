var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

// 'g' are SVG analogs of 'div'

// bar is now a selection of abstract 'g' elements
var bar = d3.select('.chart')
  .append('svg')
    .attr('width', 225)  // svg elements have a default size
    .attr('height', 300)
  .selectAll('g')
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')');

// append a rect to each 'g' element of 'bar' selection
bar.append('rect')
  .style('width', d => d.score)
  .attr('class', 'bar')
  .on('mouseover', function (d, i, elements) { // all native elements of bar
    d3.select(this)
      .style('transform', 'scaleX(2)');
    d3.selectAll(elements)
      .filter(':not(:hover)')
      .style('fill-opacity', 0.5);
  })
  .on('mouseout', function (d, i, elements) { // 'd' is the data
    d3.select(this)
      .style('transform', 'scaleX(1)');
    d3.selectAll(elements)
      .filter(':not(:hover)')
      .style('fill-opacity', 1);
  });

// append a text element (with offset y) to each 'g' element of 'bar' selection
bar.append('text')
  .attr('y', 20)
  .text(function (d) {
    return d.name;
  });

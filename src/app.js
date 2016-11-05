var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

// create a Data Join
d3.select('.chart')
  .append('svg')
    .attr('width', 225)  // svg elements have a default size
    .attr('height', 300)
  .selectAll('rect')
  .data(scores)
  .enter()
    .append('rect')
    .attr('y', (d, i) => i * 33)
    .text(function (d) {
      return d.name;
    })
    .style('width', d => d.score)
    // .classed('bar', true)  // semantically means we will act on this (not the case here)
    .attr('class', 'bar');

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
  .on('click', () => console.log('hello'))
  .on('mouseover', function () {
    console.log(this); // 'this' is the DOM ('rect') element being moused over
    d3.select(this).style('fill', 'lightblue');
  })
  .on('mouseout', function () {
    d3.select(this).style('fill', 'lightgreen')
  });

// append a text element (with offset y) to each 'g' element of 'bar' selection
bar.append('text')
  .attr('y', 20)
  .text(function (d) {
    return d.name;
  });

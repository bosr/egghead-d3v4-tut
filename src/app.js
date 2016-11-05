var secondLink = d3.selectAll('a:nth-child(2)');
console.log(secondLink.nodes());

// read attribute
console.log(secondLink.attr('href'));

// create or update attribute
secondLink.attr('href', 'http://www.google.com');
secondLink.style('color', 'green');
console.log(secondLink.attr('href'));

// more idiomatic
d3.selectAll('a:nth-child(3)')
  .attr('href', 'http://www.bing.com')
  // .style('color', 'pink')
  .classed('red', true)
  // .text('Inventory')
  .html('Inventory <b>SALE</b>')
  ;

d3.select('.title')
  .insert('button', 'a:nth-child(2)') // 'before' function
    .html('I am a button')
  ;

d3.select('.title')
  .append('div')
    .style('color', 'red')
    .html('Inventory <b>SALE</b>')
  .append('button')
    .style('display', 'block')
    .text('submit')
  ;

d3.select('.action').remove();

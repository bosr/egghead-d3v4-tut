d3.select('#block')
  .transition()
    .duration(500)  // msec
    .delay(750)
    .ease(d3.easeElasticOut)
    // .ease(d3.easeBounceOut)
    // .ease(d3.easeCubicOut)
    .style('width', '400px')
  .transition()
    .duration(1000)  // msec
    .delay(500)
    .ease(d3.easeBounceOut)
    .style('height', '600px')
  .transition()
    .duration(1000)  // msec
    .ease(d3.easeQuadOut)
    .style('background-color', 'purple')
    ;

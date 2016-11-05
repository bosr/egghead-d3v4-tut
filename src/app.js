var div = d3.select('div');
console.log(div.nodes());

var a = d3.select('a');
console.log(a.nodes());
var as = d3.selectAll('a');
console.log(as.nodes());

var divLinks = div.selectAll('a');
console.log(divLinks.nodes());

// using a css selector (or anything that is accepted by document.query.selector)
console.log(d3.selectAll('div a').nodes());


var actionLink = d3.select('.action');
console.log(actionLink.nodes());

var secondLink = d3.selectAll('a:nth-child(2)');
console.log(secondLink.nodes());


// turn a native list of nodes into a D3 Selection
var allLinks = d3.selectAll(document.links);
console.log(allLinks.nodes());
console.log(allLinks.size());

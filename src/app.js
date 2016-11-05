// Loading data
//
// d3.json('data/data.json', function (data) {
//   console.log(data);
// });

// d3.csv('data/data.csv', function (data) {
//   console.log(data);
// });

// d3.tsv('data/data.tsv', function (data) {
//   console.log(data);
// });

d3.json('data/data.json', function (data) {
  var min = d3.min(data, function (d) {
    return d.age;
  });
  console.log(min);

  var extent = d3.extent(data, function (d) {
    return d.age;
  });
  console.log(extent);

  var scale = d3.scaleLinear()
    .domain(extent)
    .range([0, 600]);
  console.log(scale(24));
  console.log(scale(38));

  // getting a set from the values
  var ages = d3.set(data, function (d) {
    return d.age;
  });
  console.log(ages);
  console.log(ages.values());
});

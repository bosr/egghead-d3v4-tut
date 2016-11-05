var timeScale = d3.scaleTime()
  .domain([new Date(2016, 1, 1), new Date(2016, 12, 31)])
  .range([0, 100])
  .clamp(true);

console.log(timeScale(new Date(2015, 12, 30)));
console.log(timeScale(new Date(2016, 1, 15)));
console.log(timeScale(new Date(2016, 7, 1)));
console.log(timeScale(new Date(2016, 12, 31)));
console.log(timeScale(new Date()));

console.log(timeScale.invert(50));

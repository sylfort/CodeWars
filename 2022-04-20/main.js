// Get the mean of an array
function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let sum = marks.reduce((acc, cur) => acc + cur, 0);
  let average = sum / marks.length;
  return Math.floor(average);
}

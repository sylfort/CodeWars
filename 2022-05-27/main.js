// How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  classPoints.push(yourPoints);
  const avg = classPoints.reduce((a, b) => a + b) / classPoints.length;
  return yourPoints > avg ? true : false;
}

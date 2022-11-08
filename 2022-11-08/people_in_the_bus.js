// Number of People in the Bus

var number = function (busStops) {
  let arr = [];
  for (let i = 0; i < busStops.length; i++) {
    arr.push(busStops[i][0] - busStops[i][1]);
  }

  return arr.reduce((a, c) => a + c, 0);
};

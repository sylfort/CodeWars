// return the two oldest/oldest ages within the array of ages passed in.
// Two Oldest Ages
function twoOldestAges(ages) {
  let sorted = ages.sort((a, b) => a - b);
  let arr = [];
  arr.push(sorted[sorted.length - 2], sorted[sorted.length - 1]);
  return arr;
}

// Take a Ten Minutes Walk
function isValidWalk(walk) {
  //insert brilliant code here
  //   divide directions in two parts: n,s and e,w
  let numSouth = walk.filter((e) => e == "s").length;
  let numNorth = walk.filter((e) => e == "n").length;
  let numEast = walk.filter((e) => e == "e").length;
  let numWest = walk.filter((e) => e == "w").length;
  //   n = +1 s= -1 sum should be 0
  if (numSouth - numNorth == 0 && numEast - numWest == 0 && walk.length == 10) {
    return true;
  } else {
    return false;
  }
}

// P: 10 directions
// R: true or false
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true

// Opposites Attract
function lovefunc(flower1, flower2) {
  // moment of truth
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower2 % 2 === 0 && flower1 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// Get the Middle Character
function getMiddle(s) {
  let x = s.length;
  if (x % 2 == 0) {
    let middlechr =
      s.charAt(Math.ceil(s.length / 2) - 1) +
      s.charAt(Math.floor(s.length / 2));
    return middlechr;
  } else {
    let middlechr = s.charAt(Math.ceil(s.length / 2) - 1);
    return middlechr;
  }
}

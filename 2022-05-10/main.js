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

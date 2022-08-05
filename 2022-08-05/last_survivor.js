// Last Survivor
function lastSurvivor(letters, coords) {
  let arrLetters = letters.split("");
  for (let coord of coords) {
    arrLetters.splice(coord, 1);
  }
  return arrLetters[0];
}

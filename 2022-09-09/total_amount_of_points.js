// Total amount of points
function points(games) {
  return games
    .map((e) => {
      console.log(Number(e[0]), Number(e[2]));
      if (Number(e[0]) > Number(e[2])) {
        return 3;
      } else if (Number(e[0]) < Number(e[2])) {
        return 0;
      } else {
        return 1;
      }
    })
    .reduce((a, c) => a + c);
}

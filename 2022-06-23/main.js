// UEFA EURO 2016
function uefaEuro2016(teams, scores) {
  let results;
  if (scores[0] > scores[1]) {
    results = `${teams[0]} won!`;
  } else if (scores[0] < scores[1]) {
    results = `${teams[1]} won!`;
  } else {
    results = "teams played draw.";
  }

  return `At match ${teams[0]} - ${teams[1]}, ${results}`;
}

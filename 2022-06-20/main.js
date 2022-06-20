//My Language Skills
function myLanguages(results) {
  let scores = [];
  let sortable = [];
  for (let score in results) {
    if (results[score] >= 60) {
      sortable.push([score, results[score]]);
    }
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log(sortable);
  sortable.map((e) => scores.push(e[0]));
  return scores;
}

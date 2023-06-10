// 6 kyu Find The Parity Outlier

function findOutlier(integers) {
  let odds = [];
  let evens = [];

  for (let i of integers) {
    if (i % 2 == 0) {
      odds.push(i);
    } else {
      evens.push(i);
    }
  }

  return odds.length > evens.length ? evens[0] : odds[0];
}

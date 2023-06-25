//7 kyu Beginner Series #3 Sum of Numbers

function getSum(a, b) {
  if (a === b) return a;

  let allInts = [];
  let counter = 0;

  if (a > b) {
    for (let i = b; i <= a; i++) {
      allInts[counter] = i;
      counter++;
    }
    let final = allInts.reduce((acc, value) => acc + Number(value), 0);
    console.log(final);
    return final;
  }

  for (let i = a; i <= b; i++) {
    allInts[counter] = i;
    counter++;
  }
  let final = allInts.reduce((acc, value) => acc + Number(value), 0);
  console.log(final);
  return final;
}

//(1, 0) --> 1 (1 + 0 = 1)
//(1, 2) --> 3 (1 + 2 = 3)
//(0, 1) --> 1 (0 + 1 = 1)
//(1, 1) --> 1 (1 since both are same)
//(-1, 0) --> -1 (-1 + 0 = -1)
//(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

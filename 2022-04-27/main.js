//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is
// strictly greater than the sum of the cubes of each element in b.
arrA = [2, 3, 4, 5];
arrB = [5, 6, 7, 8];

function sumSquaresComparison(arrA, arrB) {
  let arrASquared = arrA.reduce((acc, x) => {
    acc + x ** 2;
  }, 0);
  let arrBSquared = arrB.reduce((acc, x) => {
    acc + x ** 3;
  }, 0);

  if (arrASquared > arrBSquared) {
    return true;
  } else {
    return false;
  }
}

console.log(sumSquaresComparison(arrA, arrB));

// To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  return array.map((e) => {
    if (Number.isInteger(Math.sqrt(e))) return Math.sqrt(e);
    else return e ** 2;
  });
}

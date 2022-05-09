// Odd or Even?
function oddOrEven(array) {
  return array.reduce((acc, cur) => acc + cur, 0) % 2 == 0 ? "even" : "odd";
}

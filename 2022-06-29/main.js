// Sum of Odd Cubed Numbers
function cubeOdd(arr) {
  let notNum = arr.filter((e) => !(typeof e == "number"));
  if (notNum.length !== 0) return undefined;
  let cubed = arr.map((e) => (typeof e == "number" ? e ** 3 : 0));

  let odds = cubed.filter((e) => e % 2 !== 0);

  return odds.reduce((a, b) => a + b, 0);
}

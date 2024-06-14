//7 kyu Summing a number's digits

function sumDigits(number) {
  let digits = Math.abs(number).toString().split("");
  let x = digits.map((e) => Number(e));
  return x.reduce((acc, cur) => acc + cur, 0);
}

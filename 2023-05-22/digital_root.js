// 6 kyu Sum of Digits / Digital Root

function digitalRoot(n) {
  let temp = n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);

  console.log(temp, temp.toString().length);

  if (temp.toString().length <= 1) {
    return temp;
  } else {
    return digitalRoot(temp);
  }
}

// 8 kyu Powers of 2

function powersOfTwo(n) {
  var arr = [];

  for (var i = 0; i <= n; ++i) {
    arr.push(Math.pow(2, i));
  }

  return arr;
}

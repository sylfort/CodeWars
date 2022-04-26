// Count by X
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    y = x * i;
    console.log(y);
    z.push(y);
  }

  return z;
}

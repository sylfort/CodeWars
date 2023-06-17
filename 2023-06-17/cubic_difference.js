// 8 kyu Difference of Volumes of Cuboids

function findDifference(a, b) {
  let volA = a[0] * a[1] * a[2];
  let volB = b[0] * b[1] * b[2];
  return Math.abs(volA - volB);
}

// 7 kyu You're a square!

var isSquare = function (n: number): boolean {
  if (Number.isInteger(Math.sqrt(n))) return true;
  return false;
};

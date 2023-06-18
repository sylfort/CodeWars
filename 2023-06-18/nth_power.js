// 8 kyu N-th Power

function index(array, n) {
  if (array.length <= n) return -1;

  return array[n] ** n;
}

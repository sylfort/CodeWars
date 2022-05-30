// Small enough? - Beginner
function smallEnough(a, limit) {
  //   put array in order
  a.sort((a, b) => a - b);
  //   check if highest value is <= limit
  return a[a.length - 1] <= limit ? true : false;
}

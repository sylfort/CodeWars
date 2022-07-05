// Lost number in number sequence
function findDeletedNumber(arr, mixArr) {
  for (let i = 0; i < mixArr.length; i++) {
    let index = arr.indexOf(mixArr[i]);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
  if (arr.length == 0) return 0;
  return arr[0];
}

// Removing Elements
function removeEveryOther(arr) {
  const rem = [];
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 !== 0) {
      rem.push(arr[i]);
    }
  }
  return rem;
}

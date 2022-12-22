// 7 kyu Credit Card Mask

function maskify(cc) {
  let arr = cc.split("");

  for (let i = 0; i < arr.length; i++) {
    if (
      i !== arr.length - 1 &&
      i !== arr.length - 2 &&
      i !== arr.length - 3 &&
      i !== arr.length - 4
    ) {
      arr[i] = "#";
    }
  }

  return arr.join("");
}

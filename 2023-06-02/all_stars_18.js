// 8 kyu All Star Code Challenge #18

function strCount(str, letter) {
  let arr = str.split("").filter((el) => el.includes(letter));
  return arr.length;
}

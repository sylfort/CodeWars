// 8 kyu Double Char

function doubleChar(str) {
  return str
    .split("")
    .map((e) => `${e}${e}`)
    .join("");
}

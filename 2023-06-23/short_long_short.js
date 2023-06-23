// 8 kyu Short Long Short

function solution(a, b) {
  if (a.length < b.length) return `${a}${b}${a}`;

  return `${b}${a}${b}`;
}

//string, string -> string
//check which is shortest
// return new string in the form of short+long+short
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

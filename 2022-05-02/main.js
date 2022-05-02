// Convert a Boolean to a String
function booleanToString(b) {
  //your code here
  //   if (b === true) {
  //     return "true";
  //   } else if (b === false) {
  //     return "false";
  //   }
  return b === true ? "true" : "false";
}

//   Invert values
function invert(array) {
  return array.map((x) => (x === 0 ? x : -x));
}

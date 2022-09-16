// How many stairs will Suzuki climb in 20 years?
function stairsIn20(s) {
  let x = [].concat(...s);
  return x.reduce((acc, cur) => acc + cur) * 20;
}

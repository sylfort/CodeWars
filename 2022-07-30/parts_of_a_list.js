// Parts of a list
function partlist(arr) {
  let final = [];

  for (let i = 1; i < arr.length; i++) {
    final.push([arr.slice(0, i).join(" "), arr.slice(i, arr.length).join(" ")]);
  }

  return final;
}

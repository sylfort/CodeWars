// Remove First and Last Character Part Two
function array(arr) {
  const split = arr.split(",");
  split.pop();
  split.shift();
  if (split.length == 1) {
    return split[0];
  } else if (split.length < 1) {
    return null;
  } else {
    return split.join(" ");
  }
}

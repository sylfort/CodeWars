// Well of Ideas - Easy Version

function well(x) {
  let arr = x.filter((e) => e == "good");
  if (arr.length == 1 || arr.length == 2) {
    return "Publish!";
  } else if (arr.length > 2) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }
}

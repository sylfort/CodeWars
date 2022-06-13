// Is there a vowel in there?
function isVow(a) {
  return a.map((e) => {
    if (String.fromCharCode(e) == "a") {
      return "a";
    } else if (String.fromCharCode(e) == "e") {
      return "e";
    } else if (String.fromCharCode(e) == "i") {
      return "i";
    }
    if (String.fromCharCode(e) == "o") {
      return "o";
    } else if (String.fromCharCode(e) == "u") {
      return "u";
    } else {
      return e;
    }
  });
}

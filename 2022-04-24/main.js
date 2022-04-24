// Vowel Count

function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  var strSplit = str.split("");
  var splitLength = strSplit.length;

  for (let i = 0; i < splitLength; i++) {
    console.log(strSplit[i]);
    if (
      strSplit[i] == "i" ||
      strSplit[i] == "o" ||
      strSplit[i] == "a" ||
      strSplit[i] == "u" ||
      strSplit[i] == "e"
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

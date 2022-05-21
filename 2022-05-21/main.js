// Find the capitals
var capitals = function (word) {
  //check which letters are capital
  let wordArr = word.split("");
  let capitalLetters = wordArr.filter((e) => e.toUpperCase() === e);
  let capitalLettersIndex = [];
  //return their index
  capitalLetters.forEach((e) => {
    for (let i = 0; i < wordArr.length; i++) {
      if (e == wordArr[i]) {
        capitalLettersIndex.push(wordArr.indexOf(wordArr[i]));
      }
    }
  });
  return capitalLettersIndex;
};

// P: word with capitalized and uncap letters
// R: a list with the index of capital letters
// E: capitals('CodEWaRs'), [0,3,4,6]
// P

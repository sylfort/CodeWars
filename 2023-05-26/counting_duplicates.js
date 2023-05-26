// 6 kyu Counting Duplicates

function duplicateCount(text) {
  //make array of all chars
  let charArr = text.split("");
  //make all chars lowercase
  charArr = charArr.map((e) => e.toString().toLowerCase());
  //make a hash map counting the chars
  let CharMap = {};
  let counter = 0;

  for (let i = 0; i < charArr.length; i++) {
    if (!CharMap[charArr[i]]) {
      CharMap[charArr[i]] = 1;
    } else {
      CharMap[charArr[i]]++;
      if (CharMap[charArr[i]] == 2) {
        counter++;
      }
    }
  }
  // return how many chars counts > 1
  return counter;
}

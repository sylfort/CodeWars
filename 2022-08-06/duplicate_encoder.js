// Duplicate Encoder
function duplicateEncode(word) {
  let wordMap = {};
  let lower = word.toLowerCase();
  console.log(word);
  for (let i = 0; i < word.length; i++) {
    let curr = lower.charAt(i);
    if (wordMap[curr]) {
      wordMap[curr] = ")";
      console.log(wordMap);
      continue;
    }
    wordMap[curr] = "(";
    console.log(wordMap);
  }
  console.log(wordMap);

  let finalWord = [];

  for (let i = 0; i < word.length; i++) {
    let curr = lower.charAt(i);
    console.log(wordMap[curr]);
    finalWord.push(wordMap[curr]);
    console.log(finalWord);
  }

  console.log(finalWord);
  return finalWord.join("");
}

// hashmap for each letter
// if appears once = (
// if appears >2 = )

//   let wordMap = new Map();
// wordMap[0] = "a";
// console.log(wordMap.keys())

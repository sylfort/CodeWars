export function duplicateEncode(word: string) {
  let charMap = {};

  let lower = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (charMap[lower[i]]) {
      charMap[lower[i]] = ")";
    } else {
      charMap[lower[i]] = "(";
    }
  }

  let finalWord = [];

  for (let i = 0; i < word.length; i++) {
    finalWord.push(charMap[lower[i]]);
  }

  return finalWord.join("");
}

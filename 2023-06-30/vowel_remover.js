// 8 kyu Vowel remover

function shortcut(string) {
  let letters = string.split("");
  let noVowels = [];

  for (let i = 0; i < letters.length; i++) {
    if (
      letters[i] !== "a" &&
      letters[i] !== "e" &&
      letters[i] !== "i" &&
      letters[i] !== "o" &&
      letters[i] !== "u"
    ) {
      noVowels.push(letters[i]);
    }
  }

  return noVowels.join("");
}

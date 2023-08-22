// 6 kyu Stop gninnipS My sdroW!

function spinWords(string) {
  let words = string.split(" ");

  let arrReversedWords = words.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }
    return word;
  });

  return arrReversedWords.join(" ");
}

// 5 kyu Simple Pig Latin

function pigIt(str) {
  let words = str.split(" ");

  let lastWord = words[words.length - 1];

  let newWords = words.map((word) => {
    let letters = word.split("");
    let firstLetter = letters.shift();
    letters.push(firstLetter);
    letters.push("ay");
    return letters.join("");
  });

  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (format.test(lastWord)) {
    newWords[newWords.length - 1] = lastWord;
  }

  return newWords.join(" ");
}

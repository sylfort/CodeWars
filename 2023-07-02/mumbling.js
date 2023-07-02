// 7 kyu Mumbling

function accum(s) {
  let letters = s.split("");
  let finalLetters = [];
  //   for each letter, repeat it i times, where i is it index + 1
  for (let i = 0; i < letters.length; i++) {
    finalLetters.push(letters[i].toUpperCase());

    for (let j = 0; j < i; j++) {
      finalLetters.push(letters[i].toLowerCase());
    }
    finalLetters.push("-");
  }

  finalLetters.pop();

  return finalLetters.join("");
}

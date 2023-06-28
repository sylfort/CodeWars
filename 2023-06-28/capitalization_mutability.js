// 8 kyu Capitalization and Mutability

function capitalizeWord(word) {
  word = word.split("");
  word[0] = word[0].toUpperCase();
  return word.join("");
}

// function capitalizeWord(word) {
//  return word.charAt(0).toUpperCase() + word.slice(1);
// }

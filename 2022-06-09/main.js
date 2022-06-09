// Check the exam
function checkExam(array1, array2) {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4;
    } else if (array1[i] !== array2[i] && array2[i].length !== 0) {
      score -= 1;
    }
  }
  if (score < 0) {
    score = 0;
  }
  return score;
}

// 7 kyu Find the stray number

function stray(numbers) {
  console.log(numbers);
  if (numbers[0] !== numbers[numbers.length - 1]) {
    console.log(numbers[numbers.length - 1]);
    if (numbers[0] !== numbers[numbers.length - 2]) {
      console.log(numbers[0]);
      console.log(numbers[numbers.length - 2]);
      return numbers[0];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[0] !== numbers[i]) {
      console.log(numbers[i]);
      return numbers[i];
    }
  }
}

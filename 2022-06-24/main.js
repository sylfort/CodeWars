// Even numbers in an array
function evenNumbers(array, number) {
  let evenArr = array.filter((e) => e % 2 == 0);
  evenArr.reverse();
  const finalArr = [];
  for (let i = 0; i < number; i++) {
    finalArr.push(evenArr[i]);
  }
  return finalArr.reverse();
}

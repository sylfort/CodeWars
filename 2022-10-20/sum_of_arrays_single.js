function repeats(arr) {
  // check occurencies of each number
  //   occurenciesMap = {};
  // for(let i=0;i<arr.length;i++){
  //   console.log(arr[i]);
  //   if(occurenciesMap[arr[i]] == 1){
  //     occurenciesMap[arr[i]] = 2;
  //   } else {
  //     occurenciesMap[arr[i]] = 1;
  //     console.log(occurenciesMap[arr[i]])

  //   }
  // }

  const occurenciesMap = {};
  arr.forEach((item) => {
    if (occurenciesMap[item]) {
      occurenciesMap[item]++;
    } else {
      occurenciesMap[item] = 1;
    }
  });

  // return the sum of nums that occur twice

  let twiceNums = [];
  for (const num in occurenciesMap) {
    console.log(num);
    if (occurenciesMap[num] === 1) {
      twiceNums.push(num);
    }
  }
  return Number(twiceNums[0]) + Number(twiceNums[1]);
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);

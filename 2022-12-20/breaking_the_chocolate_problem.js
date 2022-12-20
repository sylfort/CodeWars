// 7 kyu Breaking chocolate problem

function breakChocolate(n, m) {
  if (n > 0 && m > 0 && Number.isInteger(n) && Number.isInteger(m)) {
    return n * m - 1;
  }

  return 0;
}

// console.log(breakChocolate(5, 5) , 24)
// console.log(breakChocolate(4, 3) , 11)
// console.log(breakChocolate(1, 1) , 0)

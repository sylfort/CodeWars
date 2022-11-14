export function divisors(n: number) {
  let divisorsArr: number[] = [];

  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      divisorsArr.push(i);
    }
  }

  return divisorsArr;
}

console.log(divisors(5));

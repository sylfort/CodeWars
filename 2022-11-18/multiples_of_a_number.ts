// Find Multiples of a Number

export function findMultiples(integer: number, limit: number): number[] {
  let arr: number[] = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer == 0) {
      arr.push(i);
    }
  }
  return arr;
}

// Even numbers in an array

export function evenNumbers(array: number[], n: number): number[] {
  return array.filter((e) => e % 2 == 0).slice(-n);
}

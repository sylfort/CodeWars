export function nthSmallest(arr: number[], pos: number) {
  arr.sort((a, b) => a - b);

  return arr[pos - 1];
}

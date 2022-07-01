// Maximum Gap (Array Series #4)

export function maxGap(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let diff: number[] = [];
  for (let i = 0; i < nums.length - 1; i++) {
    diff.push(nums[i] - nums[i + 1]);
  }

  let x = diff.map((e) => Math.abs(e)).sort((a, b) => a - b);
  return x[x.length - 1];
}

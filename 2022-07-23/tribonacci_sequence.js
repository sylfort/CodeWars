// Tribonacci Sequence
function tribonacci(signature, n) {
  if (signature === [0, 0, 0]) return [];

  let seq = [];
  seq[0] = signature[0];
  seq[1] = signature[1];
  seq[2] = signature[2];

  for (let i = 3; i < n; i++) {
    seq[i] = seq[i - 3] + seq[i - 2] + seq[i - 1];
  }

  if (n === 0) return [];
  if (n === 1) return [seq[0]];
  if (n === 2) return [seq[0], seq[1]];

  return seq;
}

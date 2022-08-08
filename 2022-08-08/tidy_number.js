// Tidy Number (Special Numbers Series #9)
function tidyNumber(n) {
  n = n.toString();
  // each digit from the second to last should be smaller than the next
  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] > n[i + 1]) {
      return false;
    }
  }
  return true;
}

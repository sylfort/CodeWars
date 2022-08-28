function divisibleByThree(str): boolean {
  return str.split("").reduce((a, b) => parseInt(a) + parseInt(b), 0) % 3 == 0;
}

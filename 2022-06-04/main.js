// Find the middle element

function gimme(triplet) {
  const inOrder = triplet.slice().sort((a, b) => a - b);
  const midNum = inOrder[1];
  return triplet.indexOf(midNum);
}

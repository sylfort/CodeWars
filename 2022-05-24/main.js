// A wolf in sheep's clothing
function warnTheSheep(queue) {
  // wolf last position
  let last = queue.length - 1;
  let sheepInDanger = 0;
  for (let i = queue.length; i > -1; i--) {
    if (queue[i] == "wolf") {
      sheepInDanger = queue.length - 1 - i;
    }
  }
  if (queue.indexOf("wolf") == last) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`;
  }
}

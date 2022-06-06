// Transportation on vacation

function rentalCarCost(d) {
  const cost = 40;
  if (d >= 7) {
    return d * cost - 50;
  } else if (d >= 3) {
    return d * cost - 20;
  } else {
    return d * cost;
  }
}

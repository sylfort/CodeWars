// Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages) {
  ages.sort((a, b) => a - b);
  let diff = ages[ages.length - 1] - ages[0];
  return [ages[0], ages[ages.length - 1], diff];
}

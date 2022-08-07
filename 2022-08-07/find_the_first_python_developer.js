// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
function getFirstPython(list) {
  let phytonList = list.filter((e) => {
    return e.language == "Python";
  });

  if (phytonList.length !== 0) {
    return `${phytonList[0].firstName}, ${phytonList[0].country}`;
  }

  return "There will be no Python developers";
}

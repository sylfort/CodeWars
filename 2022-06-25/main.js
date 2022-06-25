// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
  const rubyArr = list.filter((e) => e.language == "Ruby");
  return rubyArr.length < 1 ? false : true;
}

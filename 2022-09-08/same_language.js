// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
function isSameLanguage(list) {
  let languages = list.map((e) => e.language);
  return new Set(languages).size === 1 ? true : false;
}

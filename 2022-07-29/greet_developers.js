// Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
  for (const obj of list) {
    obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
  }

  return list;
}

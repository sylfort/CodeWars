//Do I get a bonus?
function bonusTime(salary, bonus) {
  const total = bonus ? salary * 10 : salary;
  return `£${total}`;
}

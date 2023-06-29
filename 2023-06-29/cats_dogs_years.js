// 8 kyu Cat years, Dog years

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears,
    dogYears = 0;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
    return [humanYears, catYears, dogYears];
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
    return [humanYears, catYears, dogYears];
  } else {
    catYears = 24;
    dogYears = 24;
    for (let i = 3; i <= humanYears; i++) {
      catYears += 4;
      dogYears += 5;
    }
    return [humanYears, catYears, dogYears];
  }
};

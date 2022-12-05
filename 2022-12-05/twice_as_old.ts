// 8 kyu Twice as old

function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  let dadAgeWhenBabyBorn = dadYearsOld - sonYearsOld;
  if (dadAgeWhenBabyBorn >= sonYearsOld) {
    return dadAgeWhenBabyBorn - sonYearsOld;
  }

  return sonYearsOld - dadAgeWhenBabyBorn;
}

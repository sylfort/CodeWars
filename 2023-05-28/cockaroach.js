// 8 kyu Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  //   1km/h = 100000 cm/h = 277.78 cm/sec
  return Math.floor((s * 100000) / 3600);
}

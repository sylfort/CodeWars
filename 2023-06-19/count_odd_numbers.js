//8 kyu Count Odd Numbers below n

/*var count = 0;
  for ( var c = 0; c < n; c++ ){
    if ( (c % 2) == 1 ) {
      count++;
    }
  }
  return count;*/

function oddCount(n) {
  return Math.floor(n / 2);
}

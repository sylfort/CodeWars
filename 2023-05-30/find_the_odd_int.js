// 6 kyu Find the odd int

function findOdd(A) {
    //   create frequency map
      let map = {};
      
      for (let element of A){
        if(!map[element]){
          map[element] = 1;
        } else {
          map[element]++;
        }
      }
    //   loop through frequency map checking if % 2 == 0
      for (let key in map){
        if (map[key] % 2 !== 0){
          return +key;
        }
      }
    }
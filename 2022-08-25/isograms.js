// Isograms
function isIsogram(str){
    let letters = str.toLowerCase().split("");
    
    let a = letters.map(e=> {
      for(let i=letters.indexOf(e);i<(letters.length - 1);i++){
        if(e == letters[i + 1]){
          return false;
        };
      }
      return true;
    })
    
    return a.includes(false)? false:true;
  }
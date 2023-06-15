// 5 kyu The Hashtag Generator

function generateHashtag (str) {
    if(str.trim().length == 0) return false;
    
    let words = str.split(" ");
    
    let newWords = words.map(word=> {
      return word.trim().charAt(0).toUpperCase() + word.slice(1);
    })
  
    console.log(newWords)
      
    newWords.unshift("#");
    
    let finalWord = newWords.join("");
    
    return finalWord.length <= 140 ? finalWord : false;
  
  }
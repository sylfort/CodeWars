// 6 kyu Bit Counting

var countBits = function(n) {
    //transform in binary string
    let convertToBinary = (number)=> {
      if (number >= 0) {
          return number.toString(2);
      }
      }
    
    //return count of 1 digits
    let bitsCounter = (str) => {
      let arr = str.split("");
      let oneBits = arr.filter(e=> e === "1").length;
      
      return oneBits
    }
    
    let bin = convertToBinary(n);
    
    return bitsCounter(bin);
  };
  
  //console.log(countBits(9837883107), "equal 16")
  
  
  //countBits(10) is 2, 1010
  //countBits(1234) is 5, 10011010010
// 8 kyuLario and Muigi Pipe Problem

function pipeFix(numbers){
    let firstNumber = numbers[0]
    let lastNumber = numbers[numbers.length - 1]
    
    let arr = [];
    arr[0] = firstNumber;
    
    for(let i = 1; arr[arr.length - 1] < lastNumber; i++){
      arr[i] = arr [i - 1] + 1;
    }
    
    return arr;
  }
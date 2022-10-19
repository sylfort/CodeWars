// Sum Mixed Array

export function sumMix(x: any[]): number {
    //   transform every value to number
      return x.map(e=> Number(e)).reduce((acc,cur)=>acc + cur);
    //   reduce
    }
    
    console.log(sumMix([9, 3, '7', '3']), 22)
    console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
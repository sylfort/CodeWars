// 5 kyu Product of consecutive Fib numbers

function productFib(prod){
    //   generate a fib seq arr until the multiplication of the last two itens in the arr is >= prod
    if(prod <= 1) return [0, 0, false];
      
    let fib = [0, 1];
      
    let multi = fib[fib.length - 1] * fib[fib.length - 2];
      
    let n = 2;
      
    while(multi < prod){
      fib[n] = fib[n - 1] + fib[n - 2];
      multi = (fib[n] * fib[n - 1]);
      n++;
    }
      
    if(multi == prod) return [fib[fib.length - 2], fib[fib.length - 1], true];
      
    return [fib[fib.length - 2], fib[fib.length - 1], false];
    }
    
    //productFib(714) # should return (21, 34, true), 
    //                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
    
    //productFib(800) # should return (34, 55, false), 
    //                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
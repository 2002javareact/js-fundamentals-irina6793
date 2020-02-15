/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
   let a = 1;
   let b = 0; 
   temp;

   while(num >= 0) {
      temp =a;
      a = a+b;
      b = temp;
      num--;
   }
   return b;
 }

 console.log((fib(10)))


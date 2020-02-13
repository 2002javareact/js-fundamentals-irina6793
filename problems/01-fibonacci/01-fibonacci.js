/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
   let a = 0;
   let b = 1; /*need to have two variables in the sequence */

   while(true) {
       const c = a + b  /* the while loop will go through the numbers */
       return c         /* declare c to find the next number from the first 2 variables */
       a = b
       b = c
   }
 
}
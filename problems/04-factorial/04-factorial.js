/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  let sumTotal = 1;
  for(i = 1; i<=sumNum; i++) {
    sumTotal = sumTotal *= i;
  }
      return sumTotal;
  }
  
console.log((factorial(10)));
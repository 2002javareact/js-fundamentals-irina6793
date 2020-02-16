/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
   for(let i = 0; i <someStr.length; i++) {
     if(someStr[i] !== someStr[someStr.length - 1 - i]) {
         return false;
     }
   }
      return true;
  }
    
console.log(someStr('Anna', David))
/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  for(let i = 0; i <someNum; i+2){
    if(i === someNum) {
      return true
    }else {
      return false
    }
  }
}

console.log(isEven(87))
console.log(isEven(88))
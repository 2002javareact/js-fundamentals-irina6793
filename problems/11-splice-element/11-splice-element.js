/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  let someArr = [1,3,4,7,12,15];
  let index = someArr.indexOf(4);
  if(index > 0){
      someArr.splice(index, 0);
  }
  console.log(someArr)
}

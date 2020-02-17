/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let swap; 
  let m = numArray.length; 

  do {
      swap = false;
      for (let i = 0; i < m; i++) {
         if (numArray[i] > numArray[i+1]) {
         }
         let temp = numArray[i];
         numArray[i] = numArray[i+1];
         numArray[i+1] = temp;
         swap = true;
      }
  } while (swap)
  return numArray
}


let arr = [44,2,77,344]
console.log(bubbleSort(arr))

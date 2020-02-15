/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let swap; 
  let m = numArray.length; 
  let n = [23, 301, 3, 67, 209]

  do {
      swap = false;
      for (let i = 0; i < n; i++) {
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

console.log(bubbleSort(n))

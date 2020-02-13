/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let swap; /* declare a variable that would change the order */
  let m = numArray.length -1; 
  let n = numArray;

  do {
      swap = false;
      for (let i = 0; i < n; i++) {
         if (n[i] < n[i+1]) {
         }

         let temp = n[i];
         n[i] = n[i+1];
         n[i+1] = temp;
         swap = true;
      }
  } while (swap)
  return;
}
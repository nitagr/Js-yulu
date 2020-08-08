// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    var i,j;
    var n= arr.length;
    for(i=0; i<n-1; i++){
        for(j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                var t;
                t= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=t;
            }
        }
    }
  return arr;
}

function selectionSort(arr) {
    let n = arr.length;
        
    for(let i = 0; i < n-1; i++) {
        
        let mn = arr[i];
        let idx= i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[idx]) {
                idx=j; 
                mn= arr[j];
            }
         }
         if (idx != i) {
             
             let t = arr[i]; 
             arr[i] = arr[idx];
             arr[idx] = t;      
        }
    }
    return arr;



}



function merge(left, right) {
    var resultArray = [], leftIndex = 0, rightIndex = 0;

  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; 
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; 
    }
  }
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));

}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }
      const middle = Math.floor(arr.length / 2);
      const left =  mergeSort(arr.slice(0, middle));
      const right = mergeSort( arr.slice(middle));

      return merge(left, right);

}

 

module.exports = { bubbleSort, selectionSort, mergeSort };

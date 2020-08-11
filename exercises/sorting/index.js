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
  let result = [];
  let i = 0; 
  let j = 0;


  while(i < left.length && j < right.length){
    if(left[i] > right[j]) {
      result.push(right[j]);
      j++;
    } else {
      result.push(left[i]);
      i++;
    }
  }

  while(i < left.length){
    result.push(left[i]);
    i++;
  }

  while(j < right.length){
    result.push(right[j]);
    j++;
  }

  return result;

}

function mergeSort(arr, l,r) {
  if(arr.length <= 1) return arr;
  let halfPoint = Math.ceil(arr.length / 2);

  let firstHalf = mergeSort(arr.splice(0, halfPoint));
  let secondHalf = mergeSort(arr.splice(-halfPoint));
  return merge(firstHalf, secondHalf);

}

 

module.exports = { bubbleSort, selectionSort, mergeSort };

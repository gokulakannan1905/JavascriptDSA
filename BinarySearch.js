// function binarySearch(arr,val){
//   if(arr.length === 0) return -1;
//   let middle = Math.floor(arr.length/2);
//   if(arr[middle] === val)
//   return middle;
//   else if(val < arr[middle]){
//       return binarySearch(arr.slice(0,middle),val);
//   }
//   else if(val > arr[middle]){
//       return binarySearch(arr.slice(middle+1),val);
//   }
// }
function binarySearch(arr,val){
  let start = 0, end = arr.length - 1;
  let middle = Math.floor((start+end)/2);
  while(arr[middle] !== val && start <= end){     
      if(val < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start+end)/2);
  }
  return arr[middle] === val ? middle : -1 ;
}

binarySearch([1,2,3,4,5,6,7,8,9,10],20)
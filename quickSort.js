function pivot(arr,start=0,end=arr.length-1){
    function swap(arr,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let currentValue = arr[start];
    let pivotIndex = start;
    for(let i = start+1;i<=end;i++){
        if(arr[i]<currentValue){
            pivotIndex++;
            swap(arr,i,pivotIndex);
        }
    }
    swap(arr,start,pivotIndex);
    return pivotIndex;
}
function quickSort(arr,start=0,end=arr.length-1){
    if(start<end){
    let pivotIndex = pivot(arr,start,end);
    quickSort(arr,start,pivotIndex-1);
    quickSort(arr,pivotIndex+1,end);
    }
    return arr;
}
quickSort([2,1,45,6,4,0,8,10,5,11,-1])
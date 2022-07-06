function merge(arr1,arr2){
    let arr = [];
    let i = 0;
    let j = 0;
    while(arr1.length>i && arr2.length>j){
        if(arr1[i]<=arr2[j]){
            arr.push(arr1[i]);
            i++;
        }
        else if(arr2[j]<arr1[i]){
            arr.push(arr2[j]);
            j++;
        }
    }
    while(arr1.length>i){
        arr.push(arr1[i]);
        i++;
    }
    while(arr2.length>j){
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}
function mergeSort(arr){
    if(arr.length<=1) return arr;
    let middleIndex = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middleIndex));
    let right = mergeSort(arr.slice(middleIndex));
    return merge(left,right);
}

mergeSort([2,1,45,6,4,0,8,10,5,11,-1])
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let currentvalue = arr[i];
        for(var j=i-1;j>=0;j--){
            if(arr[j] > currentvalue)
                arr[j+1] = arr[j];
            else break;
        }
        arr[j+1] = currentvalue;        
    }
    console.log(arr);
}

insertionSort([5,4,3,2,1,6])
function getDigit(num,position){
    return Math.floor(Math.abs(num)/Math.pow(10,position))%10;
}

function getNumberOfDigits(num){
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function getLongestLength(arr){
    let longestLength = 0;
    for(let i=0;i<arr.length;i++){
        let length = getNumberOfDigits(arr[i]);
        if(length > longestLength)
            longestLength = length;        
    }
    return longestLength;
}

function radixSort(arr){
    let MaxDigits = getLongestLength(arr);
    for(let i=0;i<MaxDigits;i++){
        let bucket = Array.from({length:10},()=>[]);
        for(let j=0;j<arr.length;j++)
            bucket[getDigit(arr[j],i)].push(arr[j]);
        arr = [].concat(...bucket);
    }
    return arr;
}
radixSort([2,1,45,6,4,0,8,10,5,11])


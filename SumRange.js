function sumRange(num){
    if(num === 0) return 0;
    return num + sumRange(num - 1);
}

sumRange(9);
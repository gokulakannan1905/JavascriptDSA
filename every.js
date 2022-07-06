function sameFrequency(n1,n2){
  const arr = [0,0,0,0,0,0,0,0,0,0];
  while(n1!==0){
      arr[n1%10]++;
      n1 = Math.floor(n1/10);
  }
     console.log(arr)
  while(n2!==0){
      arr[n2%10]--;
      n2 = Math.floor(n2/10);
  }
     console.log(arr)
  return arr.every(x=>x===0);
}
// sameFrequency(182,281);
// sameFrequency(34,14);
sameFrequency(3589578,5879385);
// sameFrequency(22,222);
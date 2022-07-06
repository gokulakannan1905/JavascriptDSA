


// function fib(n){
//   let a = 0, b = 1;
//   let sum = 0;
//   while(n > 1){
//     sum = a + b;
//     a = b;
//     b = sum;
//     console.log(sum+" ");
//     n--;
//   }
// }


// function fib(n){
//   function sum(a,b){
//       if(n <= 2) return a+b;
//       n--;
//       return sum(b,a+b);
//   }
//   return sum(0,1);
// }

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
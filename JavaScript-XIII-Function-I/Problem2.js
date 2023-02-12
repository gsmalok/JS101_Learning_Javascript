// Problem-2
// Write code to find the absolute difference of two numbers

// Sample Input-1 
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value


function abs(a,b){
  let ans = a-b;
  if(ans<0){
    ans = ans * -1;
  }
  return ans;
}

console.log(abs(4,18))
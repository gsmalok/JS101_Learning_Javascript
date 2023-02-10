// Problem 1: Create a function to check if a number is Prime or Not


function prime_check(num){
  let flag = false;
  for(let i=2; i<num; i++){
    if(num%i==0){
      flag = true;
      break;
    }
  }
  if(!flag){
    console.log("Prime Number");
  }else{
    console.log("Not Prime Number");
  }
}

 
prime_check(5);
prime_check(19);
prime_check(21);
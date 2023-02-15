// Problem 4
// Write a custom function that has the same behavior of inbuilt String Substring Function


function sub_string(num1,num2){

  let str = "alokKumarmaurya";
   let bag  = "";
  if(num1>str.length-1){
    num1 = str.length-1;
  }
  else if(num2>str.length-1){
    num2 = str.length-1;
  }
   
   if(num1>num2){
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
  }
  
  
  for(let i=num1 ; i<num2; i++){
      bag += str[i];
  }
  console.log(bag);
}

sub_string(3,7);
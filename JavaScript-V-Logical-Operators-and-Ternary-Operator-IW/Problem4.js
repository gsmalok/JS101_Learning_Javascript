// Problem 4: Given 3 numbers (all different values), print which is greatest


let number1 = 2;
let number2 = 33;
let number3 = 5;
if((number1 > number2) && (number1 > number3)){
  console.log("number1 is greater");
}else if((number2 > number1) && (number2 > number3)){
  console.log("number2 is greater");
}else{
  console.log("number3 is greater");
}
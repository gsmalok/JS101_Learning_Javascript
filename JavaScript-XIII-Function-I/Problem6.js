
// Problem-6

// Given a string swap the case and print the output

// Sample Input - Test

// Sample Output - tEST

// NOTE: Use multiple functions to achieve the result, NOT one single code block




//1. This function convert charecter lower to upper and upper to lower

function charCaseConverter(ch) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < lower.length; i++) {
    if (ch == upper[i]) {
      return lower[i];
     }  
    else if(ch==lower[i]){
      return upper[i];
    }
  }
  }

// console.log(charCaseConverter("H"))


//2. This function is use to print given ans 
function Print(str) {
  let bag = "";
  for (let i = 0; i < str.length; i++) {
    bag = bag + charCaseConverter(str[i]);
  }
  return bag;
}
console.log(Print("Test"));


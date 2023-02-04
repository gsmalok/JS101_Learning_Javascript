// Problem 2 : Given an array of string count the overall total number of characters

let str = ["Masai", "School", "and", "College"];
let number_character = 0;
for(let i=0; i<str.length; i++){
  number_character += str[i].length;
}
console.log(number_character);
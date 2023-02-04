            // PROBLEM 2
// Problem 2 : Given a character in lower case print the upper case character

let name_input= "m";
let first = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let second = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(let i=0; i<first.length; i++){
  if(name_input===first[i]){
    name_input = second[i];
  }
}
console.log(name_input);
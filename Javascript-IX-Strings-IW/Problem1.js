// Problem 1 : Given a string count the number of words in that string

let str = "My name is Alok Kumar Maurya";
let spaces = " ";
let count = 0;
for(let i=0; i<str.length; i++){
  if(str[i]==spaces){
    count++;
  }
}
console.log("Total word is",count+1);
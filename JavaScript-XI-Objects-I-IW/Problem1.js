Problem 1 :
// Given an array find the unique items in the array
let arr = ["alok", "vivek", "akash", "vivek", "alok", "vishal"];

let obj = {};

for(let i=0; i<arr.length; i++){

  obj[arr[i]] = 1;

}
  console.log(obj);
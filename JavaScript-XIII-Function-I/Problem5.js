// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]



// 1.  This is the function covert charectr upper to lower
function lowercase(ch){
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i=0 ; i<lower.length ; i++){
      if(ch==upper[i]){
        return lower[i];
      }
  }
  return ch;
}


// 2. This is upper word to lower word 
function convertWord(str){
  let bag = "";
  for(let i=0; i<str.length; i++){
    bag = bag + lowercase(str[i]);
  }
     return bag ;
}



// 3.  This function use upper case arr convert into lower case arr
function  convertArray(arr){
   let box = [];
  for(let i=0; i<arr.length; i++){
     box.push(convertWord(arr[i]));
  }
  return box;
}

let finalAns = convertArray(["MA", "SA", "I", "SCH", "OOL"]);


   console.log(finalAns);


 




 






 
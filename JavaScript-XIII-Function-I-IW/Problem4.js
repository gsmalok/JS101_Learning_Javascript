// Problem 4: Write a function to check if the char is a small case or not.

function tocheck_small_case(char){
  let str = "abcdefghijklmnopqrstuvwxyz";
  let flag = false;
  for(let i=0 ; i<26; i++){
    if(str[i]==char){
         flag  =true;
    }
  }
  if(flag){
    console.log("It is small case");
  }else{
    console.log("It is not small case");
  }
}

tocheck_small_case("Z")

tocheck_small_case("a")


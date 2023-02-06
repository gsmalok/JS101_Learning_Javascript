// Problem 3: Print a box patterns using *


// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

for(let i=1; i<=10; i++){
  let s = "";
  for(let j=1; j<=10 ;j++){
    if(i==1 || i==10){
      s = s+"*";
    }
    else if(j==1 || j==10){
      s = s + "*";
    }else {
      s = s + " ";
    }
  }
  console.log(s);
  console.log("");
}
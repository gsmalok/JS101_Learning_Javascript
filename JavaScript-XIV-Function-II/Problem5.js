// Problem 5
// Write a custom function that has the same behavior of inbuilt Array Includes Function

function include_are(value){
  
  let flag = false;
  let arr = [1,2,3,4,"alok","vivek","pradeep"];
for(let i=0; i<arr.length; i++){
  if(arr[i]===value){
    flag = true;
  }
}
  if(flag){
    console.log("true");
  }else{
    console.log("false");
  }

}

include_are("alok");
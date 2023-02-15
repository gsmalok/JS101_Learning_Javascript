// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function


function index_value(value){

  arr = ["alok", 8, "maurya", 5, 6,8,3];
  let ans = -1;
  flag = false;
  for(let i=arr.length-1 ; i>=0; i--){
    if(value == arr[i]){
        ans  = i;
      flag = true;
      break;    
    }
  }
    if(flag){
      console.log(ans);
    }else{
      console.log(ans);
    }
}

index_value("alokk");
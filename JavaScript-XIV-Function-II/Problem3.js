


function slice_fun(num1,num2){

  let arr = [1,2,3,4,5,6];
  
  let arr1 = [];
   if(num1>num2){
    arr1 = [];
  }else if(num2>arr.length-1){
     num2 = arr.length
  }
  
  for(let i=num1 ; i<num2; i++){
      arr1.push(arr[i]);
  }

  console.log(arr1);
}

slice_fun(2,79);
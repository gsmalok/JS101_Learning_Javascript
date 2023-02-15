// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


   function joinis(char){
 let arr = ["alok","kumar","maurya"];
     let bag = "";
   if(char == null){
     for(let i=0 ; i<arr.length; i++){
       if(i==arr.length-1){
       bag = bag +arr[i];
     }
     else{
         bag = bag +arr[i]+ ",";
     }
   }
     console.log(bag);
}
     else if (char != null){
for(let i=0 ; i<arr.length; i++){
       if(i==arr.length-1){
       bag = bag +arr[i];
     }
     else{
         bag = bag +arr[i]+ char;
     }
   }
     console.log(bag);
     
     }
       
   }

joinis(" ");
// Problem 5: Write a function to replace spaces in a given string with - .

function repace_space(str){
    str1 = "Mynameis "
  let bag = "";
  for(let i=0 ; i<str1.length ; i++){
    if(str1[i] == " "){
       bag = bag + str;// in space i added--> a 
    }else{
      bag = bag + str1[i];
    }
   
  }
    console.log(bag);
}

repace_space("alok");


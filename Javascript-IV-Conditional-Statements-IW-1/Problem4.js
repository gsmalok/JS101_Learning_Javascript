// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


let credencial_username = "alok";
let credencial_password = "abc";

let username = "alok";
let password = "abc";

if(credencial_username==username){
  if(credencial_password==password){
    console.log("login");
  }else{
    console.log("password not match");
  }
}else{
  console.log("username not match");
}
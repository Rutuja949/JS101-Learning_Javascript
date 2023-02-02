//number is multiple of 3 or not

let num = 36;

if(num % 3==0){
  console.log("multiple of 3");
}
else{
  console.log("not a multiple of 3");
}

//Applicable for liscense or not

let age = 16;

if(age >= 18){
  console.log("Apply for license");
}
else{
  console.log("NA")
}

//Greater among three numbers

let a = 23;
let b = 43;

if(a==b){
  console.log("Both are equal");
}
  
else if(a > b){
  console.log("a is greater")
}
else{
  console.log("b is greater")
}

//ID and Password are matching or not

let credential_username = "taehyung19";
let credential_password = "twowords";

let username = "taehyung19";
let password = "twoowords";

if(credential_username == username){
  
  if(credential_password == password){
    console.log("Login Successfull");
  }
  else{
    console.log("Password is not matching");
  }
}
else{
  console.log("Username is not matching");
}
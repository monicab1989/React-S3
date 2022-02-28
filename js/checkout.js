// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

var errorLastName = document.getElementById('errorLastName');
var errorAddress = document.getElementById('errorAddress');

// Exercise 6
//Variables del DOM
let address=document.getElementById("address");
let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let email=document.getElementById("email");

let validityEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//Variables expression
let expressionLetter=/^[A-Z]+$/i;
let expressionNumber=/^\d{9}$/;
let numberLetter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[0-9]){4,8}[^'\s]/;
let result=true;

function validate() {
    
    // Validate fields entered by the user: name, phone, password, and email
    if(firstName.value=="" ||  firstName.value.length<3 || expressionLetter.test(firstName.value)!=true){
        firstName.style.borderColor="red";
        errorName.style.display="block";
        result=false;
    }else{
        firstName.style.borderColor="black";
        errorName.style.display="none";
    }
    if(lastName.value=="" || lastName.value.length<3 || expressionLetter.test(lastName.value) !=true){
        lastName.style.borderColor="red";
        errorLastName.style.display="block";
        result=false;
    }else{
        lastName.style.borderColor="black";
        errorLastName.style.display="none";
    }
    if(email.value=="" || email.value.length<3 || validityEmail===true){
        email.style.borderColor="red";
        result=false;
    }else{
        email.style.borderColor="black";
    }
    if(password.value=="" || password.value.length<3 || numberLetter.test(password.value)!=true){
        password.style.borderColor="red";
        errorPassword.style.display="block";
        result=false;
    }else{
        password.style.borderColor="black";
        errorPassword.style.display="none";
    }
    if(address.value==="" || address.value.length<3 ){
        address.style.borderColor="red";
        errorAddress.style.display="block";
        result=false;
    }else{
        address.style.borderColor="black";
        errorPassword.style.display="none";
    }
    if(phone.value==="" || phone.value.length<3 || expressionNumber.test(phone.value)!=true){
        phone.style.borderColor="red";
        errorPhone.style.display="block";
        result=false;
    }else{
        phone.style.borderColor="black";
        errorPhone.style.display="none";
    }
    return result;  
}

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
let expressionNumber=/^[0-9]+$/;

function validate() {
    
    // Validate fields entered by the user: name, phone, password, and email
    if(firstName.value=="" ||  firstName.value.length<3 || firstName.value!=expressionLetter){
        firstName.style.borderColor="red";
        errorName.style.display="block";
    }
    if(lastName.value=="" || lastName.value.length<3 || lastName.value!=expressionLetter){
        lastName.style.borderColor="red";
        errorLastName.style.display="block";
    }
    if(email.value=="" || email.value.length<3 || validityEmail===true){
        email.style.borderColor="red";
    }
    if(password.value=="" || password.value.length<3 || (password.value!=expressionLetter && password.value!=expressionNumber) ){
        password.style.borderColor="red";
        errorPassword.style.display="block";
    }
    if(address.value==="" || address.value.length<3 ){
        address.style.borderColor="red";
        errorAddress.style.display="block";
    }
    if(phone.value==="" || phone.value.length<3 || phone.value!=expressionNumber){
        phone.style.borderColor="red";
        errorPhone.style.display="block";
    }
    
}

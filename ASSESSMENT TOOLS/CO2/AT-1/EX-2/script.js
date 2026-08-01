function validateEmail(){

    let email=document.getElementById("email").value;

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email==""){
        document.getElementById("emailError").innerHTML="Email is required";
        return false;
    }

    if(emailPattern.test(email)){
        document.getElementById("emailError").innerHTML="";
        return true;
    }

    else{
        document.getElementById("emailError").innerHTML="Invalid Email Address";
        return false;
    }

}

function validatePhone(){

    let phone=document.getElementById("phone").value;

    let phonePattern=/^[0-9]{10}$/;

    if(phone==""){
        document.getElementById("phoneError").innerHTML="Phone Number is required";
        return false;
    }

    if(phonePattern.test(phone)){
        document.getElementById("phoneError").innerHTML="";
        return true;
    }

    else{
        document.getElementById("phoneError").innerHTML="Enter a valid 10-digit phone number";
        return false;
    }

}

function validateForm(){

    let emailValid=validateEmail();
    let phoneValid=validatePhone();

    if(emailValid && phoneValid){

        alert("Registration Successful!");

        document.getElementById("myForm").reset();

    }

    else{

        alert("Please correct the errors before submitting.");

    }

}
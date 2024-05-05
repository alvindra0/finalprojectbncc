function validateForm(event){
    var form = document.getElementById("myForm")
    var Name = document.getElementById("validationDefault1").value;
    var email = document.getElementById("validationDefault2").value;
    var phoneNumber = document.getElementById("validationDefault3").value;

    var errorName = document.getElementById("error-Name");
    var errorEmail = document.getElementById("error-email");
    var errorPhone = document.getElementById("error-phone");

    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPhone.innerHTML = "";
    
    if(form.checkValidity()){
        form.classList.add('was-validated');
        alert("Registration Succesfull");

    } else{
        event.preventDefault(); 
        event.stopPropagation;
        form.classList.add('was-validated');
    }
    
    if(Name.length < 3){
        errorName.innerHTML = "Name must have atleast 3 characters";
        event.preventDefault(); 
    }

    if(!email.includes("@")){
        errorEmail.innerHTML = "Email must contain '@' symbol";
        event.preventDefault();
    }

    if(phoneNumber.length > 14){
        errorPhone.innerHTML = "Phone number must be less than 14 digits";
        event.preventDefault(); 
    }

    if(!phoneNumber.startsWith("08")){
        errorPhone.innerHTML = "Phone number must start with '08'";
        event.preventDefault(); 
    }

    return true;
}
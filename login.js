

function validateEmail(){
    let email = document.getElementById('email');
    let emailError = document.getElementById('email-error');

    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(email.value.trim() ==''){
        emailError.innerHTML = 'Email cannot be blank!!';
        return false;
    }else if( !email.value.match(regEx)){
        emailError.innerHTML = 'Enter a valid Email';
        return false;
    }else{
        emailError.innerHTML = '';
        return true;
    }
}

function validatePassword(){
    let password = document.getElementById('password');
    let passwordError = document.getElementById('password-error');
    
    if(password.value.trim()==''){
        passwordError.innerHTML = 'Password cannot be blank!!';
        return false;
    }else if(password.value.length < 6 || password.value.length > 10){
        passwordError.innerHTML = 'Password length 6-10 characters'
        return false;
    }else{
        passwordError.innerHTML = '';
        return true;
    }
}



function validateForm(){
    if(!validateEmail() || !validatePassword()){
        return false;
    }
    else{
        return true;
    }
}
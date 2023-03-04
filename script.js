//Checking if the passwords match
function checkPassword(){
    const form = document.querySelector(`form[name="signupForm"]`);
    const passwordInput = form.elements[`password`].value;
    const passwordInputConfirm = form.elements[`confirm_password`].value;
    const confirmPassword = document.getElementById('confirm_password');

    if(passwordInput != passwordInputConfirm){
        //If passwords do not match, scroll and focus the confirm password text area
        confirmPassword.scroll();
        confirmPassword.focus();
        confirmPassword.style.borderColor = "red";
        confirmPassword.setCustomValidity("Passwords do not match");
    }
    else{
        confirmPassword.style.borderColor = "black";
        confirmPassword.setCustomValidity("");
    }
}
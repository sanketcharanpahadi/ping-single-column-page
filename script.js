const inputEle = document.querySelector('.email');
const submitBtn = document.querySelector('.submit');
const errorMsg = document.querySelector('.error-msg');
const form = document.querySelector('.subscribe');
const regexExp = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i


function checkEmail(val) {
    return regexExp.test(val);
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const inputValue = inputEle.value;
    
    
    if(inputValue === "" || inputValue === null) {
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email"
    }
    else if(!checkEmail(inputValue)) {
        errorMsg.textContent = "Please provide a valid email address";
    }
    else {
        form.submit();
    }
})
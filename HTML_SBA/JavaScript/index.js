const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");
const button = document.getElementById("button");
const arr = new Array(fname, lname, email, password);

button.addEventListener("click", () => {
    let message = "Incorrect fields: ";
    let show = false;
    if (!fname.value) {
        message += "first name";
        fname.style.borderColor = 'red';
        fname.style.borderRadius = '25px';
        show = true;
    }else{
        removeChange(fname);
    }
    if (!lname.value) {
        message += ", last name";
        lname.style.borderColor = 'red';
        lname.style.borderRadius = '25px';
        show = true;
    }else{
        removeChange(lname);
    }
    if (!email.value.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        message += ", email";
        email.style.borderColor = 'red';
        email.style.borderRadius = '25px';
        show = true;
    }else{
        removeChange(email);
    }
    if (!password.value) {
        message += ", password";
        password.style.borderColor = 'red';
        password.style.borderRadius = '25px';
        show = true;
    }else{
        removeChange(password);
    }
    if (show) {
        console.log(message);
        error.innerHTML = message;
        error.style.color = 'red';
    }else{
        error.innerHTML = "Submited";
        error.style.color = 'green';
        removeChangeAll();
    }
});

function removeChangeAll(){
    for(i in arr){
        arr[i].style.borderColor = "black";
        arr[i].style.borderRadius = "0px";
        arr[i].value = "";
    }
}

function removeChange(element){
    element.style.borderColor = "black";
    element.style.borderRadius = "0px";
}
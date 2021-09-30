let Firstname = document.getElementById("firstname");
let Lastname = document.getElementById("lastname");
let USN = document.getElementById("usn");
let Password = document.getElementById("password");
let Password2 = document.getElementById("password2");
let form = document.querySelector("form");

function validateInput() {
    //check username is empty 
    if (Firstname.value.trim() === "") {
        onError(Firstname, " firstname cannot be empty");
    } else {
        onSuccess(Firstname);
    }
    if (Lastname.value.trim() === "") {
        onError(Lastname, "Lastname cannot be empty");
    } else {
        onSuccess(Lastname);
    }

    if (USN.value.trim() === "") {
        onError(USN, "usn  cannot be empty");
    } else {
        onSuccess(USN);
    }
    if (Password.value.trim() === "") {
        onError(Password, "Password cannot be empty");
    } else if (Password.value.length <= 6) {
        onError(Password, "password is weak");
    } else {
        onSuccess(Password);
    }
    if (Password2.value.trim() === "") {
        onError(Password2, "Password  cannot be empty");
    } else {
        if (Password.value.trim() !== Password2.value.trim()) {
            onError(Password2, "Password & Re-type password not matching");
        } else
            onSuccess(Password2);
    }
}

document.querySelector("button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();
    });



function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}

function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");

}
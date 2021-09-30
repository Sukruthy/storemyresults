let USN = document.getElementById("usn");
let Password = document.getElementById("password");

function validateinput() {
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
}
document.querySelector("button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateinput();
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
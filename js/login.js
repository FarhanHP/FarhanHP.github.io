//sticky
let navbar = document.getElementsByTagName("nav")[0];
let offsetTopNavbar = navbar.offsetTop;

window.onscroll = function(){
    if(this.pageYOffset >= offsetTopNavbar){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
};
//sticky end

//event handler toggle-menu-btn
document.getElementsByClassName("toggle-menu")[0].addEventListener("click", function(){
    let target = document.getElementsByTagName("ul")[0];
    if(target.classList.contains("hide-on-small-only")){
        target.classList.remove("hide-on-small-only");
    }
    else {
        target.classList.add("hide-on-small-only");
    }
});
//event handler toggle-menu-btn end

//even handler when window resize
window.onresize = function(){
    let target = document.getElementsByTagName("ul")[0];

    if(this.innerWidth > 600){
        target.classList.add("hide-on-small-only");
    }
};
//event hendler when window resize end

//login
let errorLogin = document.getElementsByName("error-login")[0];
let loginBtn = document.getElementsByName("submit-login")[0];
let usernameLogin = document.getElementsByName("username-login")[0];
let passwordLogin = document.getElementsByName("password-login")[0];

usernameLogin.value = "";
passwordLogin.value = "";

document.getElementsByName("visibility-password-login")[0].onclick = function(){
    if(this.innerHTML === "visibility"){
        passwordLogin.type = "text";
        this.innerHTML = "visibility_off";
    }
    else{
        passwordLogin.type = "password";
        this.innerHTML = "visibility";
    }
}

let checkLogin = function(){
    loginBtn.disabled = false;
    if(usernameLogin.value.length < 8 || passwordLogin.value.length < 8){
        loginBtn.disabled = true;
    }
}

loginBtn.disabled = true;

loginBtn.onclick = function(){
    let result = validateLogin(usernameLogin.value, passwordLogin.value);
    if(!result.response){
        errorLogin.innerHTML = "*Username or Password Invalid";
    }
    else{
        alert(users.length);
        alert(result.id);
        alert(document.cookie);
        setLoginCookie(users[result.id]);
        window.location.href ="../pages/home.html";
    }
}

usernameLogin.oninput = checkLogin;
passwordLogin.oninput = checkLogin;
//login end

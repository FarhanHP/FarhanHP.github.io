if(window.location.href.toString().includes("index.html")){
    window.location.href = window.location.href.toString().replace("index.html", "");
}

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

//fill guild list
let guildLst = document.getElementById("guild-list");
let i;
for(i of guilds){
    guildLst.innerHTML += `
        <div class="white guild-card">
            <img src="${i.logo.replace("../", "")}">
            <h1>${i.name}</h1>
            <b>${i.motto}</b>
        </div>
    `;
}
//fill guild list end

//platform-logo
let platformLogos = document.getElementsByClassName("platform-logo");

for(i of platformLogos){
    i.onmouseover = function() {
        this.src = this.src.replace("grey", "color");
    }
    i.onmouseout = function() {
        this.src = this.src.replace("color", "grey");
    }
    i.addEventListener("click", function(){
        document.getElementById("register").style.display = "flex";
    });
}
//platform-logo end

//close-modal
let closeModals = document.getElementsByClassName("close-modal");
for(i of closeModals){
    i.addEventListener("click", function(){
        let modalContainers = document.getElementsByClassName("modal-container");
        let j;
        for(j of modalContainers){
            j.style.display = "none";
        }
    })
}
//close-modal end

//open login window
let loginBtns = document.getElementsByClassName("login-btn");
for(i of loginBtns){
    i.addEventListener("click", function(){
        document.getElementById("login").style.display = "flex";
        
    })
}
//open login window end

//select a role
let selectRole = document.getElementsByName("role-register");
for(i of selectRole){
    let role;
    for(role of roles){
        i.innerHTML += `<option value=${role}>${role}</option>`;
    }
}
//select a role end

//select a join period
let selectJoinPeriod = document.getElementsByName("joinperiod-register");
for(i of selectJoinPeriod){
    let joinperiod;
    for(joinperiod of joinPeriods){
        i.innerHTML += `<option value=${joinperiod}>${joinperiod}</option>`;
    }
}
//select a join period end

//login
let usernameLogin = document.getElementsByName("username-login")[0];
let passwordLogin = document.getElementsByName("password-login")[0];
let submitLogin = document.getElementsByName("submit-login")[0];
let loginError = document.getElementsByName("error-login")[0];

submitLogin.disabled = true;

usernameLogin.oninput = function(){
    if(this.value.length >= 8 && passwordLogin.value.length >= 8){
        submitLogin.disabled = false;
    }
    else{
        submitLogin.disabled = true;
    }
}

passwordLogin.oninput = function(){
    if(this.value.length >= 8 && usernameLogin.value.length >= 8){
        submitLogin.disabled = false;
    }
    else{
        submitLogin.disabled = true;
    }
}

submitLogin.onclick = function(){
    let output = validateLogin(usernameLogin.value, passwordLogin.value, users);
    if(output.response){
        loginError.innerHTML = "";
        //set cookie
        deleteCookie();
        let user = users[output.nik];
        setCookieFromJSON(user);

        //redirect
        let target = window.location.toString() + "pages/home.html";
        window.location.replace(target);
    }
    else{
        loginError.innerHTML = "Username or Password Invalid";
    }
}
//login end

//register
let usernameRegister = document.getElementsByName("username-register")[0];
let errorUsernameRegister = document.getElementsByName("error-username-register")[0];
let passwordRegister = document.getElementsByName("password-register")[0];
let errorPasswordRegister = document.getElementsByName("error-password-register")[0];
let submitRegister = document.getElementsByName("submit-register")[0];

submitRegister.disabled = true;

usernameRegister.oninput = function(){
    errorUsernameRegister.innerHTML = "";
    if(userExists(this.value, users)){
        errorUsernameRegister.innerHTML = "*Username Already Exists";
    }

    if(illegalUsername(this.value)){
        errorUsernameRegister.innerHTML = "*Can't Contain Illegal Characters";
    }

    if(this.value.length >= 8 && passwordRegister.value.length >= 8){
        submitRegister.disabled = false;
        return;
    }
    else if(this.value.length < 8){
        errorUsernameRegister.innerHTML = "*Username Must More Than 8 Characters";
    }
    submitRegister.disabled = true;
}

passwordRegister.oninput = function(){
    if(this.value.length >= 8 && usernameRegister.value.length >= 8){
        submitRegister.disabled = false;
        errorPasswordRegister.innerHTML = "";
    }
    else{
        submitRegister.disabled = true;
        errorPasswordRegister.innerHTML = "*Password Must More Than 8 Characters"
    }
}

submitRegister.onclick = function(){
    //add new user data to data.js
    if(userExists(usernameRegister.value, users)){
        errorUsernameRegister.innerHTML = "*Username Already Exists";
        submitRegister.disabled = true;
        return;
    }

    users.push({
        nik : users.length,
        username : usernameRegister.value,
        password: passwordRegister.value,
        fullname: document.getElementsByName("fullname-register")[0].value,
        pp: "../img/profile/default.png",
        birthdate: document.getElementsByName("birthdate-register")[0].value,
        role: document.getElementsByName("role-register")[0].value,
        point: 0,
        gold: 1000,
        rank: null,
        rankNumber: null,
        guild: null,
        skillset: null,
        takenJob : null
    });

    //close register window
    document.getElementById("register").style.display = "none";

    //open login window
    usernameLogin.value = usernameRegister.value;

    document.getElementById("login").style.display = "flex";
}
//register end

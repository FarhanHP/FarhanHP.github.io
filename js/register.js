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

//select a country code
let selectCountryCode = document.getElementsByName("countrycode-register");
for(i of selectCountryCode){
    let j;
    for(j of countryCode){
        if (j === "62"){
            i.innerHTML += `<option value=${j} selected>+${j}</option>`;
        }
        else{
            i.innerHTML += `<option value=${j}>+${j}</option>`;
        }
    }
}
//select a country code end

//register
let usernameRegister = document.getElementsByName("username-register")[0];
let errorUsernameRegister = document.getElementsByName("error-username-register")[0];

let passwordRegister = document.getElementsByName("password-register")[0];
let confirmPasswordRegister = document.getElementsByName("confirm-password-register")[0];
let errorPasswordRegister = document.getElementsByName("error-password-register")[0];
let strengthPasswordRegister = document.getElementsByName("strength-password-register")[0];

let nikRegister = document.getElementsByName("nik-register")[0];
let errorNikRegister = document.getElementsByName("error-nik-register")[0];

let ktpRegister = document.getElementsByName("ktp-register")[0];
let errorKtpRegister = document.getElementsByName("error-ktp-register")[0];

let fullnameRegister = document.getElementsByName("fullname-register")[0];
let errorFullnameRegister = document.getElementsByName("error-fullname-register")[0];

let birthdateRegister = document.getElementsByName("birthdate-register")[0];
let errorBirthdateRegister = document.getElementsByName("error-birthdate-register")[0];

let telephoneRegister = document.getElementsByName("telephone-register")[0];
let errorTelephoneRegister = document.getElementsByName("error-telephone-register")[0];

let handphoneRegister = document.getElementsByName("handphone-register")[0];
let errorHandphoneRegister = document.getElementsByName("error-handphone-register")[0];

let addressRegister = document.getElementsByName("address-register")[0];
let errorAddressRegister = document.getElementsByName("error-address-register")[0];

let countrycodeRegister = document.getElementsByName("countrycode-register")[0];

let submitRegister = document.getElementsByName("submit-register")[0];

submitRegister.disabled = true;

let checkRegister = function(){
    submitRegister.disabled = false;
    errorUsernameRegister.innerHTML = "";
    errorPasswordRegister.innerHTML = "";
    strengthPasswordRegister.innerHTML = "";
    strengthPasswordRegister.classList.remove(...strengthPasswordRegister.classList);
    errorNikRegister.innerHTML = "";
    errorKtpRegister.innerHTML = "";
    errorFullnameRegister.innerHTML = "";
    errorBirthdateRegister.innerHTML = "";
    errorTelephoneRegister.innerHTML = "";
    errorHandphoneRegister.innerHTML = "";
    errorAddressRegister.innerHTML = "";

    //check username
    if(usernameExists(usernameRegister.value)){
        errorUsernameRegister.innerHTML = "*Username Already Exists";
        submitRegister.disabled = true;
    }
    else if(illegalUsername(usernameRegister.value)){
        errorUsernameRegister.innerHTML = "*Invalid Username";
        submitRegister.disabled = true;
    }
    else if(usernameRegister.value.length < 8 || usernameRegister.value.length > 15){
        errorUsernameRegister.innerHTML = "*Only 8-15 Characters Allowed";
        submitRegister.disabled = true;
    }
    //check username end

    //check password
    if(passwordRegister.value.length < 8){
        errorPasswordRegister.innerHTML = "*Less Than 8 Characters";
        submitRegister.disabled = true;
    }
    else if(passwordRegister.value !== confirmPasswordRegister.value){
        errorPasswordRegister.innerHTML = "*Not Match";
        submitRegister.disabled = true;
    }
    else{
        let strength = 0;
        if(passwordRegister.value.match(/[a-z]+/)){
            strength++;
        }
        if(passwordRegister.value.match(/[A-Z]+/)){
            strength++;
        }
        if(passwordRegister.value.match(/[0-9]+/)){
            strength++;
        }
        if(passwordRegister.value.match(/[$@#&!]+/)){
            strength++;
        }

        if(strength === 1){
            errorPasswordRegister.innerHTML = "*Password Is Too Weak";
            submitRegister.disabled = true;
        }
        else if(strength === 2){
            strengthPasswordRegister.classList.add("yellow-text");
            strengthPasswordRegister.innerHTML = " *Medium";
        }
        else if(strength >= 3){
            strengthPasswordRegister.classList.add("green-text");
            strengthPasswordRegister.innerHTML = " *Strong";
        }
    }
    //check password end

    //check NIK
    if(!(nikRegister.value.match(/[0-9]{16}/) && nikRegister.value.length === 16)){
        errorNikRegister.innerHTML = "*Invalid NIK";
        submitRegister.disabled = true;
    }
    else if(nikExists(nikRegister.value)){
        errorNikRegister.innerHTML = "*NIK Already Exists";
        submitRegister.disabled = true;
    }
    //check NIK end

    //check KTP
    if(ktpRegister.files.length < 1){
        errorKtpRegister.innerHTML = "*Cannot Empty";
        submitRegister.disabled = true;
    }
    //check KTP end

    //check fullname
    if(fullnameRegister.value.length <= 0){
        errorFullnameRegister.innerHTML = "*Cannot Empty";
        submitRegister.disabled = true;
    }
    //check fullname end

    //check birthdate
    if(birthdateRegister.value.length <= 0){
        errorBirthdateRegister.innerHTML = "*Cannot Empty";
        submitRegister.disabled = true;
    }
    //check birthdate end

    //check telephone
    if(telephoneRegister.value.length > 15 || Number.isNaN(Number(telephoneRegister.value))){
        errorTelephoneRegister.innerHTML = "*Invalid";
        submitRegister.disabled = true;
    }
    //check telephone end

    //check handphone
    if(handphoneRegister.value.length > 15 || Number.isNaN(Number(handphoneRegister.value))){
        errorHandphoneRegister.innerHTML = "*Invalid";
        submitRegister.disabled = true;
    }
    else if(handphoneRegister.value.length <= 0){
        errorHandphoneRegister.innerHTML = "*Cannot Empty";
        submitRegister.disabled = true;
    }
    //check handphone end

    //check addres
    if(addressRegister.value.length <= 0){
        errorAddressRegister.innerHTML = "*Cannot Empty";
        submitRegister.disabled = true;
    }
    //check address end
}

document.getElementsByName("visibility-password-register")[0].onclick = function(){
    if(this.innerHTML === "visibility"){
        passwordRegister.type = "text";
        this.innerHTML = "visibility_off";
    }
    else{
        passwordRegister.type = "password";
        this.innerHTML = "visibility";
    }
}

//generate random strong password
passwordRegister.value = generatePassword(10);

document.getElementsByName("visibility-confirm-password-register")[0].onclick = function(){
    if(this.innerHTML === "visibility"){
        confirmPasswordRegister.type = "text";
        this.innerHTML = "visibility_off";
    }
    else{
        confirmPasswordRegister.type = "password";
        this.innerHTML = "visibility";
    }
}

usernameRegister.oninput = checkRegister;
passwordRegister.oninput = checkRegister;
confirmPasswordRegister.oninput = checkRegister;
nikRegister.oninput = checkRegister;
ktpRegister.oninput = checkRegister;
fullnameRegister.oninput = checkRegister;
birthdateRegister.oninput = checkRegister;
telephoneRegister.oninput = checkRegister;
handphoneRegister.oninput = checkRegister;
addressRegister.oninput = checkRegister;


submitRegister.onclick = function(){
    let tp = telephoneRegister.value;
    if(tp !== null && tp.substring(0, countrycodeRegister.value.length) !== countrycodeRegister.value){
        if(tp.charAt(0) === "0"){
            tp = countrycodeRegister.value + tp.substring(1, tp.length);
        }
    }

    let hp = handphoneRegister.value;
    if(hp.substring(0, countrycodeRegister.value.length) !== countrycodeRegister.value){
        if(hp.charAt(0) === "0"){
            hp = countrycodeRegister.value + hp.substring(1, hp.length);
        }
    }

    //add new user data to data.js
    users.push({
        id : users.length,
        nik : nikRegister.value,
        username : usernameRegister.value,
        password: passwordRegister.value,
        fullname: fullnameRegister.value,
        pp: "../img/profile/default.png",
        birthdate: birthdateRegister.value,
        telephone: tp,
        handphone: hp,
        address: addressRegister.value,
        role: document.getElementsByName("role-register")[0].value,
        isManager: false,
        point: 0,
        gold: 1000,
        rank: null,
        rankNumber: null,
        guild: null,
        skillset: null,
        takenJob : null
    });
    updateData();
    setRegisterCookie(users[users.length-1]);
    window.location.href = "../pages/login.html";
}
//register end

//sticky
let navbar = document.getElementsByTagName("nav")[0];
let offsetTopNavbar = navbar.offsetTop;

let information;
let offsetInformation;

try{
    information = document.getElementsByClassName("information")[0];
    offsetInformation = information.offsetTop;
}
catch(error){
    information = null;
    offsetInformation = null
}


window.onscroll = function(){
    if(this.pageYOffset >= offsetTopNavbar){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }

    if(information !== null){
        if(this.pageYOffset >= offsetInformation+20 && this.innerWidth >= 993 ){
            information.classList.add("sticky");
            information.style.top = `${(navbar.offsetHeight + 5).toString()}px`;
        }
        else{
            information.classList.remove("sticky");
        }
    }
};
//sticky end

//even handler when window resize
window.onresize = function(){
    let target = document.getElementsByTagName("ul")[0];

    if(information !== null){
        if(this.innerWidth < 993){
            information.classList.remove("sticky");
        }
    }

    if(this.innerWidth > 600){
        target.classList.remove("hide");
    }
    else{
        target.classList.add("hide");
    }
};
//even handler when window resize end

//event handler toggle-menu-btn
document.getElementsByClassName("toggle-menu")[0].addEventListener("click", function(){
    let target = document.getElementsByTagName("ul")[0];
    if(target.classList.contains("hide")){
        target.classList.remove("hide");
    }
    else {
        target.classList.add("hide");
    }
});
//event handler toggle-menu-btn end

//always add cookie to users list
let cookie = getCookieAsJSON();

//if cookie is empty then redirected to home
if(typeof cookie.username === "undefined"){
    window.location.href = "http://farhanhp.github.io";
}


if(users.length <= cookie.nik){
    //untuk mencegah perbedaan antara nik dan index di array karena pendaftaran lebih dari sekali
    cookie.nik = users.length;
    users.push(cookie); 
}
else{
    //update data di list sesuai cookie
    let i;
    for(i in cookie){
        users[cookie.nik][i] = cookie[i];
    }
}

updateData(guilds, users);  

//filling information
let loggedUser = users[Number(cookie.nik)];

let username = document.getElementsByName("username");
for(i of username){
    i.innerHTML = loggedUser.username;
}

let pp = document.getElementsByName("pp");
for(i of pp){
    i.src = loggedUser.pp;
}

let role = document.getElementsByName("role");
for(i of role){
    i.innerHTML = loggedUser.role;
}

let gold = document.getElementsByName("gold");
for(i of gold){
    i.innerHTML = numberBeautify(loggedUser.gold);
}

let guild = document.getElementsByName("guild");
for(i of guild){
    if(loggedUser.guild !== null && loggedUser.guild !== "null"){
        i.innerHTML = loggedUser.guild.name;
    }
    else{
        i.classList.remove("blue-text");
        i.innerHTML = "N/A";
    }
}

let rank = document.getElementsByName("rank");
for(i of rank){
    i.innerHTML = loggedUser.rank;
    if(loggedUser.rank === "IRON"){
        i.classList.add("grey-text");
    }
    else if(loggedUser.rank === "BRONZE"){
        i.classList.add("brown-text");
    }
    else if(loggedUser.rank === "SILVER"){
        i.classList.add("grey-text");
        i.classList.add("text-lighten-3");
    }
    else if(loggedUser.rank === "GOLD"){
        i.classList.add("yellow-text");
        i.classList.add("text-accent-4");
    }
    else if(loggedUser.rank === "PLATINUM"){
        i.classList.add("grey-text");
        i.classList.add("text-lighten-5");
    }
}

let point = document.getElementsByName("point");
for(i of point){
    i.innerHTML = numberBeautify(loggedUser.point);
}
//filling information end

//event handler for logout
document.getElementById("logout").addEventListener("click", function(){
    deleteCookie();
    window.location.href = "http://farhanhp.github.io"
})
//event handler for logout end

setCookieFromJSON(loggedUser);

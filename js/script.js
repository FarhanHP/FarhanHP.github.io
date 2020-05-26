//redirect if not login
if(getCookie("login_id") === ""){
    window.location.href = "../index.html"
}


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

//filling information
let loggedUser = getLoginCookie();


//remove non admin content
if(loggedUser.isManager){
    let nonAdminContents = document.getElementsByClassName("non-admin");
    for(i of nonAdminContents){
        i.style.display = "none";
    }
}
else{
    let adminContents = document.getElementsByClassName("admin");
    for(i of adminContents){
        i.style.display = "none";
    }
}

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
}

let point = document.getElementsByName("point");
for(i of point){
    i.innerHTML = numberBeautify(loggedUser.point);
}

let handphone = document.getElementsByName("handphone");
for(i of handphone){
    i.innerHTML = loggedUser.handphone
}

let fullname = document.getElementsByName("fullname");
for(i of fullname){
    i.innerHTML = loggedUser.fullname;
}
//filling information end

//event handler for logout
document.getElementById("logout").addEventListener("click", function(){
    deleteLoginCookie();
    deleteRegisterCookie();
    window.location.href = "../index.html";
})
//event handler for logout end

//event handler for rankUp arrow
let rankUps = document.getElementsByClassName("rank-up");
let rankUpBars = document.getElementsByClassName("rank-up-bar");

for(i=0; i<rankUps.length; i++){
    let j = i;
    rankUps[i].onclick = function(){
        if(this.innerHTML === "keyboard_arrow_up"){
            this.innerHTML = "keyboard_arrow_down";
            rankUpBars[j].classList.add("hide");
        }
        else{
            this.innerHTML = "keyboard_arrow_up";
            rankUpBars[j].classList.remove("hide");
        }
    }
}
//event handler for rankUp arrow end

//rank progress
let progresses = document.getElementsByName("progress");
let progressSentences = document.getElementsByName("progress-sentence");
for(i=0; i<progresses.length; i++){
    if(loggedUser.rank === "IRON"){
        progresses[i].style.width = `${loggedUser.point/5000*100}%`;
        progressSentences[i].innerHTML = `${Math.round(loggedUser.point/5000*100)}% to reach BRONZE`;
    }
    else if(loggedUser.rank === "BRONZE"){
        progresses[i].style.width = `${(loggedUser.point-5000)/10000*100}%`;
        progressSentences[i].innerHTML = `${Math.round((loggedUser.point-5000)/10000*100)}% to reach SILVER`;
    }
    else if(loggedUser.rank === "SILVER"){
        progresses[i].style.width = `${(loggedUser.point-15000)/35000*100}%`;
        progressSentences[i].innerHTML = `${Math.round((loggedUser.point-15000)/35000*100)}% to reach GOLD`;
    }
    else{
        progresses[i].style.width = `${(loggedUser.point-50000)/100000*100}%`;
        progressSentences[i].innerHTML = `${Math.round((loggedUser.point-50000)/100000*100)}% to reach PLATINUM`;
    }
}
//rank progress end
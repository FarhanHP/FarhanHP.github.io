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

try{
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
}
catch(error){}


//platform-logo
let platformLogos = document.getElementsByClassName("platform-logo");

for(i of platformLogos){
    i.onmouseover = function() {
        this.src = this.src.replace("grey", "color");
    }
    i.onmouseout = function() {
        this.src = this.src.replace("color", "grey");
    }
}
//platform-logo end


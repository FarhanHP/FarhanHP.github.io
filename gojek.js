//sticky
let navbar = document.getElementsByTagName("nav")[0];
let offsetTopNavbar = navbar.offsetTop;

window.onscroll = function(){
    if(this.pageYOffset >= offsetTopNavbar+50){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
};
//sticky end
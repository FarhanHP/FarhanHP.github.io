if(getCookie("userdetail") === ""){
    window.location.href = "../pages/home.html";
}
else{
    let userDetail = users[Number(getCookie("userdetail"))];
    document.getElementsByName("userdetail-username")[0].innerHTML = userDetail.username;
    document.getElementsByName("userdetail-fullname")[0].innerHTML = userDetail.fullname;
    document.getElementsByName("userdetail-role")[0].innerHTML = userDetail.role;
    document.getElementsByName("userdetail-point")[0].innerHTML = userDetail.point;
    document.getElementsByName("userdetail-gold")[0].innerHTML = userDetail.gold;
    document.getElementsByName("userdetail-rank")[0].innerHTML = userDetail.rank;
    document.getElementsByName("userdetail-rank-number")[0].innerHTML = "#"+userDetail.rankNumber;
    try{
        document.getElementsByName("userdetail-guild")[0].innerHTML = userDetail.guild.name;
    }
    catch{
        document.getElementsByName("userdetail-guild")[0].innerHTML = "N/A";
    }
    document.getElementsByName("userdetail-skillset")[0].innerHTML = userDetail.skillset.join(", ");
    document.getElementsByName("userdetail-nik")[0].innerHTML = userDetail.nik;
    document.getElementsByName("userdetail-birthdate")[0].innerHTML = userDetail.birthdate;

    if(userDetail.telephone === ""){
        document.getElementsByName("userdetail-telephone")[0].innerHTML = "N/A";
    }
    else{
        document.getElementsByName("userdetail-telephone")[0].innerHTML = userDetail.telephone;
    }

    document.getElementsByName("userdetail-handphone")[0].innerHTML = userDetail.handphone;
    document.getElementsByName("userdetail-address")[0].innerHTML = userDetail.address;
}

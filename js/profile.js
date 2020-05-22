document.getElementsByName("fullname")[0].innerHTML = loggedUser.fullname;
document.getElementsByName("birthdate")[0].innerHTML = loggedUser.birthdate;
document.getElementsByName("rank-number")[0].innerHTML = "#"+loggedUser.rankNumber;

if(loggedUser.skillset === null){
    document.getElementsByName("skillset")[0].innerHTML = "N/A";
}
else{
    document.getElementsByName("skillset")[0].innerHTML = `
    ${loggedUser.skillset[0]}, ${loggedUser.skillset[1]}, ${loggedUser.skillset[2]}, ${loggedUser.skillset[3]}, ${loggedUser.skillset[4]}
    `;
}

document.getElementsByName("nik")[0].innerHTML = loggedUser.nik;

if(loggedUser.telephone === ""){
    document.getElementsByName("telephone")[0].innerHTML = "N/A";
}
else{
    document.getElementsByName("telephone")[0].innerHTML = loggedUser.telephone;
}

document.getElementsByName("handphone")[0].innerHTML = loggedUser.handphone;
document.getElementsByName("address")[0].innerHTML = loggedUser.address;
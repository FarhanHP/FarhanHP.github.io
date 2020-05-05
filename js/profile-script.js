document.getElementsByName("fullname")[0].innerHTML = loggedUser.fullname;
document.getElementsByName("birthdate")[0].innerHTML = loggedUser.birthdate;
document.getElementsByName("rank-number")[0].innerHTML = "#"+loggedUser.rankNumber;
document.getElementsByName("skillset")[0].innerHTML = `
    ${loggedUser.skillset[0]}, ${loggedUser.skillset[1]}, ${loggedUser.skillset[2]}, ${loggedUser.skillset[3]}, ${loggedUser.skillset[4]}
`;
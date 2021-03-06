//job taken
if(loggedUser.takenJob === null){
    document.getElementById("job-taken").innerHTML = `
        <h1 style="padding: 50px">You Haven't Taken Any Job.</h1>
    `;
}
else {
    let jobTaken = jobs[loggedUser.takenJob];
    let reward = "";
    let j;
    for(j of jobTaken.rewards){
        reward += j+", "
    }
    reward = reward.substring(0, reward.length-2);

    document.getElementById("job-taken").innerHTML = `
        <div class="job-card yellow accent-4">
            <div class="job-img">
                <img src="${jobTaken.img}">
            </div>
            <div class="job-info white">
                <h1>${jobTaken.task}</h1>
                <p>Min-Rank : ${jobTaken.minRank[0]}</p>
                <p>Reward : ${reward}</p>
                <p>Issuer : <a>${jobTaken.issuer.username}</a></p>
                <b style="color:red">*${jobTaken.deadline}</b>
                <div class="job-btn">
                    <div class="btn cancel red accent-4" id="cancel-job"><b>Cancel</b></div>
                </div>
            </div>
        </div>
    `;
}
//job taken end

//cancel job
try{
    document.getElementById("cancel-job").addEventListener("click", function(){
        loggedUser.takenJob = null;
        setLoginCookie(loggedUser);
        updateData();
        window.location.reload();
    })
}
catch(error){}

//cancel job end

//guild content nav event handler
let usersWindow = document.getElementById("users-window");
let usersWindowBtn = document.getElementById("users-window-btn");
let guildsWindow = document.getElementById("guilds-window");
let guildsWindowBtn = document.getElementById("guilds-window-btn");
let jobsWindow = document.getElementById("jobs-window");
let jobsWindowBtn = document.getElementById("jobs-window-btn");

usersWindowBtn.addEventListener("click", function(){
    usersWindow.style.display = "block";
    guildsWindow.style.display = "none";
    jobsWindow.style.display = "none";

    this.classList.add("visiting");
    guildsWindowBtn.classList.remove("visiting");
    jobsWindowBtn.classList.remove("visiting");
});

guildsWindowBtn.addEventListener("click", function(){
    usersWindow.style.display = "none";
    guildsWindow.style.display = "block";
    jobsWindow.style.display = "none";

    this.classList.add("visiting");
    usersWindowBtn.classList.remove("visiting");
    jobsWindowBtn.classList.remove("visiting");
});

jobsWindowBtn.addEventListener("click", function(){
    usersWindow.style.display = "none";
    guildsWindow.style.display = "none";
    jobsWindow.style.display = "block";

    this.classList.add("visiting");
    usersWindowBtn.classList.remove("visiting");
    guildsWindowBtn.classList.remove("visiting");
});

//guild content nav event handler end

//users
function showUsers(keyword=""){
    let usersElement = document.getElementById("users");
    usersElement.innerHTML = "";

    let selectedUsers = getGuildMembers(null, keyword);
    let i;
    for(i of selectedUsers){
        let btn = "";
        if(loggedUser.isManager){
            btn = `
                <div class="btn-container">
                    <div class="btn user-detail" id="user-${i.id}"><b>Detail</b></div>
                </div>
            `;
        }

        let guild;
        if(i.guild === null){
            guild = "";
        }
        else{
            guild = `(${i.guild.name})`;
        }

        usersElement.innerHTML += `
            <div class="user-card yellow accent-4">
                <div class="user-img white">
                    <img src="${i.pp}" alt="">
                </div>
                <div class="user-info white">
                    <h1 class="blue-text center-align">${i.username}</h1>
                    <h1 class="blue-text center-align">${guild}</h1>
                    <hr>
                    <div class="center-align">
                        <p><b>Role</b> : ${i.role}</p>
                        <p><b>Rank</b> : ${i.rank}</p>
                        <p><b>Point</b> : ${numberBeautify(i.point)}</p>
                    </div>
                    ${btn}
                </div>
            </div>
        `;
    }
}

showUsers();

//event handler for filter users
let usersFilter = document.getElementsByName("users-filter");
let i;
for(i of usersFilter){
    i.oninput = function(){
        showUsers(this.value);
    };
}
//event handler for filter users end

//event handler for user detail (admin only)
if(loggedUser.isManager){
    let userDetailBtns = document.getElementsByClassName("user-detail");
    let i;
    for(i of userDetailBtns){
        i.onclick = function(){
            window.location.href = "../pages/userdetail.html";
            setCookie("userdetail", this.id.replace("user-", ""));
        }
    }
}
//event handler for user detail (admin only) end
//users end

//guilds
function showGuilds(keyword=""){
    let guildsElement = document.getElementById("guilds");
    guildsElement.innerHTML = "";

    let selectedGuilds = getGuilds(keyword);
    let i;
    for(i of selectedGuilds){
        let btn;
        let id = `guild-${i.no}`;
        if(loggedUser.isManager){
            btn = `<div id="${id}" class="btn"><b>Detail<b></btn>`;;
        }
        else if(loggedUser.guild === null){
            btn = `<div id="${id}" class="btn"><b>Join<b></btn>`;
        }
        else if(loggedUser.guild.no === i.no){
            btn = `<div id="${id}" class="btn red"><b>Leave<b></btn>`;
        }
        else{
            btn = `<div class="btn disabled"><b>Join<b></btn>`;
        }

        guildsElement.innerHTML += `
            <div class="user-card yellow accent-4">
                <div class="user-img white">
                    <img src="${i.logo}" alt="">
                </div>
                <div class="user-info white">
                    <h1 class="blue-text center-align">${i.name}</h1>
                    <b class="center-align">${i.motto}</b>
                    <hr>
                    <div class="center-align">
                        <p><b>Rank</b> : ${i.rank}</p>
                        <p><b>Point</b> : ${numberBeautify(i.point)}</p>
                    </div>
                </div>
                <div class="btn-container white">
                    ${btn}
                </div>
            </div>
        `;
    }
}

showGuilds();

//event handler for filter guilds
let guildsFilter = document.getElementsByName("guilds-filter");
for(i of guildsFilter){
    i.oninput = function(){
        showGuilds(this.value);
    }
}
//event handler for filter guilds end


//event handler for join guild button
for(i=0; i<guilds.length; i++){
    try{
        document.getElementById(`guild-${i}`).addEventListener("click", function(){
            if(loggedUser.guild === null || loggedUser.isManager){
                loggedUser.guild = guilds[Number(this.id.replace("guild-", ""))];
                setLoginCookie(loggedUser);
                updateData();
                window.location.href = "myguild.html";
            }
            else{
                loggedUser.guild = null;
                loggedUser.takenJob = null;
                setLoginCookie(loggedUser);
                updateData();
                window.location.reload();
            }
        })
    }
    catch(error){}
}
//event handler for join guild button end
//guilds end

//jobs
function showJobs(keyword, unfinished, finished){
    let jobsElement = document.getElementById("jobs");
    jobsElement.innerHTML = "";

    let i;
    if(unfinished){
        for(i of jobs){
            if(i.task.toLowerCase().includes(keyword.toLowerCase())){
                let reward = "";
                let j;
                for(j of i.rewards){
                    reward += j+", "
                }
                reward = reward.substring(0, reward.length-2);
    
                jobsElement.innerHTML += `
                    <div class="job-card yellow accent-4">
                        <div class="job-img">
                            <img src="${i.img}" alt="">
                        </div>
                        <div class="job-info white">
                            <h1>${i.task}</h1>
                            <p>Min-Rank : ${i.minRank[0]}</p>
                            <p>Reward : ${reward}</p>
                            <p>Issuer : <a>${i.issuer.username}</a></p>
                            <b class="red-text">*${i.deadline}</b>
                        </div>
                    </div>
                `;
            }
        }
    }

    if(finished){
        for(i of finishedJobs){
            if(i.task.toLowerCase().includes(keyword.toLowerCase())){
                let reward = "";
                let j;
                for(j of i.rewards){
                    reward += j+", "
                }
                reward = reward.substring(0, reward.length-2);
    
                jobsElement.innerHTML += `
                    <div class="job-card yellow accent-4">
                        <div class="job-img">
                            <img src="${i.img}" alt="">
                        </div>
                        <div class="job-info white">
                            <h1>${i.task}</h1>
                            <p>Min-Rank : ${i.minRank[0]}</p>
                            <p>Reward : ${reward}</p>
                            <p>Issuer : <a>${i.issuer.username}</a></p>
                            <p>Finisher : <a>${i.finisher.username}</a></p>
                            <b class="blue-text">*Finished ${i.finished}</b>
                        </div>
                    </div>
                `;
            }
        }
    }
}

showJobs("", true, true);

//event handler for filter jobs
let jobsFilter = document.getElementsByName("jobs-filter")[0];
let unfinishedJobsCheckbox = document.getElementsByName("jobs-unfinished-check")[0];
let finishedJobsCheckbox = document.getElementsByName("jobs-finished-check")[0];

let checkBoxClicked = function(){
    showJobs(jobsFilter.value, unfinishedJobsCheckbox.checked, finishedJobsCheckbox.checked);
}

unfinishedJobsCheckbox.checked = true;
finishedJobsCheckbox.checked = true;

unfinishedJobsCheckbox.onclick = checkBoxClicked;
finishedJobsCheckbox.onclick = checkBoxClicked;
jobsFilter.oninput = checkBoxClicked;
//event handler for filter jobs end
//jobs end

//choose skillset window appear when the user has null skillset
if(loggedUser.skillset === null && !loggedUser.isManager){
    document.getElementsByClassName("guild-profile")[0].classList.add("hide");
    document.getElementsByClassName("guild-content")[0].classList.add("hide");

    loggedUser.skillset = [];
    
    function showAvailableSkillset(keyword=""){
        let availableSkillset = getSkillset(loggedUser.skillset, keyword);
        let i;
        document.getElementById("skillset").innerHTML = "";
        for(i of availableSkillset){
            let id = "choose-skillset-"+i.replace(/ /g, "-"); //it is strange that js only replace first occurence, so i use regex
            document.getElementById("skillset").innerHTML += `
                <div id=${id} class="skillset-card teal lighten-2 white-text">
                    <p>${i}</p>
                </div>
            `;
        }

        if(5-loggedUser.skillset.length > 0){
            //event handler to choose skillset
            for(i of skillset){
                if(document.getElementById("choose-skillset-"+i.replace(/ /g, "-")) !== null){
                    document.getElementById("choose-skillset-"+i.replace(/ /g, "-")).addEventListener("click", function(){
                        loggedUser.skillset.push(this.id.toString().replace("choose-skillset-", "").replace(/-/g, " "));
                        updateSkillsetWindow();
                    });
                }
            }
            //event handler to choose skillset
        }
    }

    function updateSkillsetWindow(){
        document.getElementsByName("skillset-left")[0].innerHTML = 5-loggedUser.skillset.length;
        document.getElementById("skillset").innerHTML = "";

        showAvailableSkillset();

        document.getElementById("choosen-skillset").innerHTML = "";
        let i;
        for(i of loggedUser.skillset){
            let id = "unchoose-skillset-"+i.replace(/ /g, "-");
            document.getElementById("choosen-skillset").innerHTML += `
                <div class="skillset-card grey white-text">
                    <div id=${id}>&times;</div><p>${i}</p>
                </div>
            `;
        }

        //event handler for removing skillset
        for(i of skillset){
            if(document.getElementById("unchoose-skillset-"+i.replace(/ /g, "-")) !== null){
                document.getElementById("unchoose-skillset-"+i.replace(/ /g, "-")).addEventListener("click", function(){
                    removeUserSkillset(loggedUser, this.id.toString().replace("unchoose-skillset-", "").replace(/-/g, " "));
                    updateSkillsetWindow();
                })
            }
        }
        //event handler for adding or removing skillset end

        if(5-loggedUser.skillset.length === 0){
            document.getElementById("skillset-save").classList.remove("disabled");
            document.getElementById("skillset-save").addEventListener("click", function(){
                setLoginCookie(loggedUser);
                updateData();
                window.location.reload();
            });
        }
    }

    updateSkillsetWindow();

    //skillset filter event handler
    document.getElementsByName("skillset-filter")[0].oninput = function(){
        showAvailableSkillset(this.value);
    }
    //skillset filter event handler end
}
else{
    document.getElementsByClassName("skillset-window")[0].classList.add("hide");
}
//choose skillset window appear when the user has null skillset end
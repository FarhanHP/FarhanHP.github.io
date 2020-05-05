let loggedGuild = loggedUser.guild;

if(loggedGuild === null){
    document.getElementById("guild").style.display="none";
}
else{
    document.getElementById("guildless").style.display = "none";
    //guild information
    let guildLogo = document.getElementsByName("guild-logo");
    let i;
    for(i of guildLogo){
        i.src = loggedGuild.logo;
    }

    let guildName = document.getElementsByName("guild-name");
    for(i of guildName){
        i.innerHTML = loggedGuild.name;
    }

    let guildMotto = document.getElementsByName("guild-motto");
    for(i of guildMotto){
        i.innerHTML = loggedGuild.motto;
    }

    let guildRank = document.getElementsByName("guild-rank");
    for(i of guildRank){
        i.innerHTML = "#"+loggedGuild.rank;
    }

    let guildPoint = document.getElementsByName("guild-point");
    for(i of guildPoint){
        i.innerHTML = numberBeautify(loggedGuild.point);
    }

    let guildAddress = document.getElementsByName("guild-address");
    for(i of guildAddress){
        i.innerHTML = loggedGuild.address;
    }
    //guild information end

    //guild content nav event handler
    let guildJobsWindowBtn = document.getElementById("guild-jobs-window-btn");
    let guildJobsWindow = document.getElementById("guild-jobs-window");
    let guildMembersWindowBtn = document.getElementById("guild-members-window-btn");
    let guildMembersWindow = document.getElementById("guild-members-window");
    let guildForumWindowBtn = document.getElementById("guild-forum-window-btn");
    let guildForumWindow = document.getElementById("guild-forum-window");

    guildJobsWindowBtn.addEventListener("click", function(){
        guildJobsWindow.style.display = "block";
        guildMembersWindow.style.display = "none";
        guildForumWindow.style.display = "none";

        this.classList.add("visiting");
        guildMembersWindowBtn.classList.remove("visiting");
        guildForumWindowBtn.classList.remove("visiting")
    })

    guildMembersWindowBtn.addEventListener("click", function(){
        guildJobsWindow.style.display = "none";
        guildMembersWindow.style.display = "block";
        guildForumWindow.style.display = "none";

        guildJobsWindowBtn.classList.remove("visiting");
        this.classList.add("visiting");
        guildForumWindowBtn.classList.remove("visiting")
    })

    guildForumWindowBtn.addEventListener("click", function(){
        guildJobsWindow.style.display = "none";
        guildMembersWindow.style.display = "none";
        guildForumWindow.style.display = "block";

        guildJobsWindowBtn.classList.remove("visiting");
        guildMembersWindowBtn.classList.remove("visiting");
        this.classList.add("visiting")
    })

    //guild content nav event handler end

    //guild jobs
    function showGuildJobs(keyword=""){
        let guildJobsElement = document.getElementById("guild-jobs");
        guildJobsElement.innerHTML = "";
        let guildJobs = getJobsBelongToGuild(loggedGuild.no, keyword);
        let i;
        for(i of guildJobs){
            let rank;
            let idBtn = `guild-job-no-${i.no}`;
            if(i.minRank[0] === "IRON"){
                rank = `<span class="grey-text">${i.minRank[0]}</span>`;
            }
            else if(i.minRank[0] === "BRONZE"){
                rank = `<span class="brown-text">${i.minRank[0]}</span>`;
            }
            else if(i.minRank[0] === "SILVER"){
                rank = `<span class="grey-text text-lighten-3">${i.minRank[0]}</span>`;
            }
            else if(i.minRank[0] === "GOLD"){
                rank = `<span class="yellow-text text-accent-4">${i.minRank[0]}</span>`;
            }
            else if(i.minRank[0] === "PLATINUM"){
                rank = `<span class="grey-text text-lighten-5">${i.minRank[0]}</span>`;
            }

            let reward = "";
            let j;
            for(j of i.rewards){
                reward += j+", "
            }
            reward = reward.substring(0, reward.length-2);

            let jobBtn;
            if(loggedUser.takenJob !== null && loggedUser.takenJob === i.no){
                jobBtn = `<div id="${idBtn}" class="btn cancel red accent-4"><b>Cancel</b></div>`;
            }
            else if(loggedUser.point < i.minRank[1] || loggedUser.nik === i.issuer.nik || loggedUser.takenJob !== null){
                jobBtn = `<div class="btn disabled"><b>Take</b></div>`
            }
            else{
                jobBtn = `<div id="${idBtn}" class="btn"><b>Take</b></div>`
            }

            guildJobsElement.innerHTML += `
                <div class="job-card yellow accent-4">
                    <div class="job-img">
                        <img src="${i.img}" alt="">
                    </div>
                    <div class="job-info white">
                        <h1>${i.task}</h1>
                        <p>Min-Rank : ${rank}</p>
                        <p>Reward : ${reward}</p>
                        <p>Issuer : <a>${i.issuer.username}</a></p>
                        <b style="color:red">*${i.deadline}</b>
                        <div class="job-btn">
                            ${jobBtn}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    showGuildJobs();

    //guild jobs filter event handler
    let guildJobsFilter = document.getElementsByName("guild-jobs-filter");
    for(i of guildJobsFilter){
        i.oninput = function(){
            showGuildJobs(this.value);
        }
    }
    //guild jobs filter event handler end

    //guild jobs create event handler
    let guildJobsCreate = document.getElementsByName("guild-jobs-create");
    let guildJobsCreateWindow = document.getElementById("guild-jobs-create-window");
    for(i of guildJobsCreate){
        i.addEventListener("click", function(){
            guildJobsCreateWindow.style.display = "flex";
        })
    }
    //guild jobs create event handler end
    //guild jobs end

    //guild members
    function showGuildMembers(keyword=""){
        let guildMembersElement = document.getElementById("guild-members");
        guildMembersElement.innerHTML = "";

        let guildMembers = getGuildMembers(loggedGuild.no, keyword)
        let i;
        for(i of guildMembers){
            let rank;
            if(i.rank === "IRON"){
                rank = `<span class="grey-text">${i.rank}</span>`;
            }
            else if(i.rank === "BRONZE"){
                rank = `<span class="brown-text">${i.rank}</span>`;
            }
            else if(i.rank === "SILVER"){
                rank = `<span class="grey-text text-lighten-3">${i.rank}</span>`;
            }
            else if(i.rank === "GOLD"){
                rank = `<span class="yellow-text text-accent-4">${i.rank}</span>`;
            }
            else if(i.rank === "PLATINUM"){
                rank = `<span class="grey-text text-lighten-5">${i.rank}</span>`;
            }

            guildMembersElement.innerHTML += `
                <div class="user-card yellow accent-4">
                    <div class="user-img white">
                        <img src="${i.pp}" alt="">
                    </div>
                    <div class="user-info white">
                        <h1 class="blue-text center-align">${i.username}</h1>
                        <hr>
                        <div class="center-align">
                            <p><b>Role</b>&nbsp; : ${i.role}</p>
                            <p><b>Rank</b>&nbsp; : ${rank}</p>
                            <p><b>Point</b> : ${numberBeautify(i.point)}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    showGuildMembers();

    //guild jobs filter event handler
    let guildMembersFilter = document.getElementsByName("guild-members-filter");
    for(i of guildMembersFilter){
        i.oninput = function(){
            showGuildMembers(this.value);
        }
    }
    //guild jobs filter event handler end
    //guild members end

    //add event listener for job btn
    for(i=0; i<jobs.length; i++){
        try{
            document.getElementById("guild-job-no-"+i.toString()).addEventListener("click", function(){
                if(loggedUser.takenJob !== null){
                    loggedUser.takenJob = null;
                }
                else{
                    loggedUser.takenJob = Number(this.id.replace("guild-job-no-", ""));
                }
                updateData(guilds, users);
                setCookieFromJSON(loggedUser);
                window.location.reload();
            })
        }
        catch(error){
        }
    }
    //add event listener for job btn end

    //event handler for leave guild btn
    let leaveGuildBtn = document.getElementsByName("guild-leave-btn");
    for(i of leaveGuildBtn){
        i.addEventListener("click", function(){
            loggedUser.guild = null;
            loggedUser.takenJob = null;
            updateData(guilds, users);
            setCookieFromJSON(loggedUser);
            window.location.href = window.location.href.toString().replace("myguild", "home");
        })
    }
    //event handler for leave guild btn end
}

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
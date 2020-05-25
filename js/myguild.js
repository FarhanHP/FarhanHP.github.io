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
            let idBtn = `guild-job-no-${i.no}`;
            let reward = "";
            let j;
            for(j of i.rewards){
                reward += j+", "
            }
            reward = reward.substring(0, reward.length-2);

            let jobBtn;
            if(loggedUser.isManager){
                jobBtn = "";
            }
            else if(loggedUser.takenJob !== null && loggedUser.takenJob === i.no){
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
                        <p>Min-Rank : ${i.minRank[0]}</p>
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
    let guildJobsCreateWindow = document.getElementsByClassName("create-job-window")[0];
    document.getElementsByName("guild-jobs-create")[0].onclick = function(){
        this.classList.add("hide")
        guildJobsCreateWindow.classList.remove("hide");
    }

    document.getElementsByName("cancel-create-job")[0].onclick = function(){
        document.getElementsByName("guild-jobs-create")[0].classList.remove("hide")
        guildJobsCreateWindow.classList.add("hide");
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
                            <p><b>Rank</b>&nbsp; : ${i.rank}</p>
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
                setLoginCookie(loggedUser);
                updateData();
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
            setLoginCookie(loggedUser);
            updateData();
            window.location.href = "home.html";
        })
    }
    //event handler for leave guild btn end


    //event handler for post job
    let task = document.getElementsByName("task")[0];
    let errorTask = document.getElementsByName("error-task")[0];
    let minrank = document.getElementsByName("min-rank")[0];
    let reward = document.getElementsByName("reward")[0];
    let deadline = document.getElementsByName("deadline")[0];
    let errorDeadline = document.getElementsByName("error-deadline")[0];
    let jobSubmit = document.getElementsByName("job-submit")[0];

    jobSubmit.disabled = true;

    let checkPostJobForm = function(){
        jobSubmit.disabled = false;

        errorTask.innerHTML = "";
        errorDeadline.innerHTML = "";

        if(task.value.length <= 0 ){
            errorTask.innerHTML = "Can't Empty";
            jobSubmit.disabled = true;
        }

        if(deadline.value.length <= 0){
            errorDeadline.innerHTML = "Can't Empty";
            jobSubmit.disabled = true;
        }
        else{
            let today = new Date();
            let d = today.getDate();
            let m = today.getMonth() + 1;
            let y = today.getFullYear();

            let inputDeadline = deadline.value.split("-");
            
            if(Number(inputDeadline[0]) < y){
                errorDeadline.innerHTML = "Invalid Year";
                jobSubmit.disabled = true;
            }
            else if(Number(inputDeadline[1]) < m){
                errorDeadline.innerHTML = "Invalid Month";
                jobSubmit.disabled = true;
            }
            else if(Number(inputDeadline[2]) <= d){
                errorDeadline.innerHTML = "Invalid Day";
                jobSubmit.disabled = true;
            }
        }
    }

    task.oninput = checkPostJobForm;
    reward.oninput = checkPostJobForm;
    deadline.oninput = checkPostJobForm;
    minrank.oninput = checkPostJobForm;

    //event handler for reward element
    let rewardWindowContainer = document.getElementsByClassName("reward-window-container")[0];
    let rewardWindow = document.getElementsByClassName("reward-window")[0];
    let saveReward = document.getElementsByName("save-reward")[0];
    let closeRewardElement = document.getElementsByName("close-reward-element")[0];
    let itemsElement = document.getElementsByClassName("items")[0];
    let rewardFilter = document.getElementsByName("reward-filter")[0];
    let rewardQty = document.getElementsByName("reward-quantity")[0];
    let oldSelectedQty;
    let oldSelectedReward;
    let selectedQty = [];
    let selectedReward = [];

    function showReward(){
        let i;
        reward.value = "";
        for(i=0; i<selectedReward.length; i++){
            if(reward.value !== ""){
                reward.value += ", ";
            }

            if(selectedReward[i] === "Gold"){
                reward.value += selectedQty[i]+" Gold";
            }
            else{
                reward.value += selectedQty[i]+"x "+selectedReward[i];
            }
        }
    }

    function showItems(keyword){
        let i;
        itemsElement.innerHTML = "";
        for(i of items){
            if(i.toLowerCase().includes(keyword)){
                if(!selectedReward.includes(i)){
                    let id = "add-"+i.replace(/ /g, "-");
                    itemsElement.innerHTML += `
                        <div class="skillset-card yellow accent-4 white-text" id=${id}>
                            <p>${i}</p>
                        </div>
                    `;
                }
                else{
                    let id = "remove-"+i.replace(/ /g, "-");
                    itemsElement.innerHTML += `
                        <div class="skillset-card grey white-text">
                            <div id=${id}>&times;</div><p>${i}</p>
                        </div>
                    `;
                }
            }
        }

        for(i of items){
            let item = i;
            try{
                document.getElementById("add-"+i.replace(/ /g, "-")).onclick = function(){
                    if(reward.value !== ""){
                        reward.value += ", "
                    }

                    let qty = rewardQty.value;
                    if(qty === "" || qty < 1){
                        qty = 1;
                    }

                    selectedReward.push(item);
                    selectedQty.push(qty);

                    showReward();
                    showItems(rewardFilter.value);
                }
            }
            catch{
                document.getElementById("remove-"+i.replace(/ /g, "-")).onclick = function(){
                    let removedIndex = selectedReward.indexOf(item);
                    selectedReward.splice(removedIndex, 1);
                    selectedQty.splice(removedIndex, 1);
                    showReward();
                    showItems(rewardFilter.value);
                }
            }
        }
    }

    reward.value = "";

    rewardFilter.oninput = function(){
        showItems(this.value);
    }

    reward.onclick = function(){
        showReward();
        showItems(rewardFilter.value);
        oldSelectedReward = [...selectedReward];
        oldSelectedQty = [...selectedQty];
        this.disabled = true;
        rewardWindow.classList.remove("hide");
        rewardWindowContainer.classList.add("flying");
    }

    reward.oninput = function(){
        this.value = "";
    }

    closeRewardElement.onclick = function(){
        reward.disabled = false;
        selectedQty = oldSelectedQty;
        selectedReward = oldSelectedReward;
        showReward();
        showItems(rewardFilter.value);
        rewardWindow.classList.add("hide");
        rewardWindowContainer.classList.remove("flying");
    }

    saveReward.onclick = function(){
        reward.disabled = false;
        rewardWindow.classList.add("hide");
        rewardWindowContainer.classList.remove("flying");
    }
    //event handler for reward element end

    jobSubmit.onclick = function(){
        let rewards = [];
        let i;
        for(i=0; i<selectedReward.length; i++){
            if(selectedReward[i] === "Gold"){
                rewards.push(`${selectedQty[i]} Gold`);
            }
            else{
                rewards.push(`${selectedQty[i]}x ${selectedReward[i]}`);
            }
        }

        let minRank = [minrank.value];
        if(minRank[0] === "IRON"){
            minRank.push(0);
        }
        else if(minrank[0] === "BRONZE"){
            minRank.push(5000);
        }
        else if(minrank[0] === "SILVER"){
            minRank.push(15000);
        }
        else if(minrank[0] === "GOLD"){
            minRank.push(50000);
        }
        else{
            minRank.push(100000);
        }

        let today = new Date();
        let d = today.getDate();
        let m = today.getMonth() + 1;
        let y = today.getFullYear();

        let inputDeadline = deadline.value.split("-");

        let deadlineTemp = `${Number(inputDeadline[2]) - d} Days Remaining`;
        if(Number(inputDeadline[1]) - m !== 0){
            deadlineTemp = `${Number(inputDeadline[1]) - m} Months `+deadlineTemp;
        }
        if(Number(inputDeadline[0]) - y !== 0){
            deadlineTemp = `${Number(inputDeadline[0]) - y} Years `+deadlineTemp;
        }

        jobs.push({
            no: jobs.length,
            task: task.value,
            img: "../img/default-picture.jpg",
            issuer: loggedUser,
            minRank: minRank,
            rewards: rewards,
            deadline: deadlineTemp
        });

        showGuildJobs();
        document.getElementsByName("guild-jobs-create")[0].classList.remove("hide")
        guildJobsCreateWindow.classList.add("hide");
    }
    //event handler for post job end
}
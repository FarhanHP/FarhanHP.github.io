var roles = ["Assasin", "Mage", "Ranger", "Thieve", "Warrior"];

var skillset = ["Acrobatics", "Alchemy", "Anatomy", "Ancient History", "Ancient Languange", "Animal Call", "Animal Handling", "Animal Training", "Animal Lore", "Anthropology", "Appraising", "Arcane Lore", "Astrology", "Armorer", "Artistry", "Balancing", "Barter", "Blackmail", "Berserk", "Blacksmith", "Blind Fighting", "Bluff", "Bloating", "Body Language", "Boxing", "Breath Control", "Brewing", "Bribe", "Bullfighting", "Calligraphy", "Camping", "Camouflage", "Carpentry", "Cartography", "Cobbling", "Climbing", "Concealment", "Contortion", "Cooking", "Counterfeiting", "Cryptography", "Dancing", "Dead Language", "Deceit", "Demolition", "Detect Lie", "Diagnosis", "Disarm Traps", "Detect Traps", "Detect Vice", "Detect Lie", "Diplomacy", "Disarm Opponent", "Disguise", "Double Handed Combat", "Driving", "Electronics", "Emphaty", "Enchanting", "Engineering", "Escape", "Ettiequette", "Falconry", "Farming", "Fencing", "Fire Breathing", "Fire Making", "First Aid", "Fishing", "Fletcher", "Flirting", "Folklore", "Fortune Telling", "Gambling", "General Knowledge", "Gesture", "Gibberish", "Gymnastics", "Haggling", "Healing", "Heraldry", "Herbalism", "Herding", "Hibernate", "Hide In Shadows", "Hunting", "Hypnotism", "Impersonation", "Interrogation", "Intimidation", "Investigation", "Jargon", "Juggling", "Jumping", "Language", "Lasso", "Leather Working", "Lifting", "Literacy", "Marksman", "Mechanics", "Mediaton", "Merchant", "Mining", "Mountaneering", "Mythology", "Native Language", "Navigation", "Occultism", "Pickpocket", "Predict Weather", "Psychology", "Public Speaking", "Quick Draw", "Read Lips", "Rescue", "Research", "Reverse Engineering", "Rope Use", "Riding", "Rigging", "Scribe", "Scrounging", "Sculpting", "Seamanship", "Sewing", "Signaling", "Stonemasonry", "Tailor", "Teaching", "Throw Voice", "Tightrope Walking", "Troture", "Toxicology", "Tracking", "Trapping", "Unarmed Combat", "Ventriloquism", "Weapons Master", "Weapon Smithing", "Weaving", "Woodworking", "Wrestling", "Zero Gravity"];

var joinPeriods = ["1-Month", "3-Months", "6-Months", "12-Months"]

var guilds = [{
    no : 0,
    name : "Beginner Union",
    motto : "From each according to their ability to each according to their needs",
    address : "Jl Nanas no.3, Jakarta Timur",
    logo : "../img/guild-logo/beginner-union.png",
    rank : null,
    point : 0
}, {
    no : 1,
    name : "The Thieves",
    motto : "Everything belong to us !",
    address : "Jl Griya Wartawan no.10, Jakarta Timur",
    logo : "../img/guild-logo/the-thieves.png",
    rank : null,
    point : 0
}, {
    no : 2,
    name : "Royal Guild",
    motto : "Honor, Homeland, Sincerity",
    address : "Jl. Medan Merdeka Utara No.3, Jakarta Pusat",
    logo : "../img/guild-logo/royal-guild.png",
    rank : null,
    point : 0
}];

var users = [{
    nik: 0,
    username : "MrFarhan",
    password : "12345678",
    fullname : "Farhan Herdian Pradana",
    pp : "../img/profile/default.png",
    birthdate: "2000-01-28",
    role : roles[1],
    point : 80000,
    gold : 19500,
    rank : null,
    rankNumber: null,
    guild : guilds[0],
    skillset : [skillset[1], skillset[5], skillset[9], skillset[14], skillset[18]],
    takenJob: 9
}, {
    nik: 1,
    username : "gambutUdin",
    password : "12345678",
    fullname : "Udin Gambut",
    pp : "../img/profile/default.png",
    birthdate: "2000-07-07",
    role : roles[2],
    point : 90000,
    gold : 20000,
    rank: null,
    rankNumber: null,
    guild : guilds[2],
    skillset : [skillset[0], skillset[4], skillset[8], skillset[12], skillset[16]],
    takenJob : null
}, {
    nik: 2,
    username : "Deceitful",
    password : "12345678",
    fullname : "Muhammad Izzaturahman",
    pp : "../img/profile/default.png",
    birthdate: "2000-04-06",
    role : roles[0],
    point : 38700,
    rank : null,
    rankNumber: null,
    guild : guilds[2],
    skillset : [skillset[2], skillset[6], skillset[10], skillset[15], skillset[19]],
    takenJob: null
}, {
    nik: 3,
    username : "jinxProAmanda",
    password : "12345678",
    fullname : "Amanda Putra",
    pp : "../img/profile/default.png",
    birthdate: "1996-03-17",
    role : roles[4],
    point : 34500,
    gold : 50000,
    rank : null,
    rankNumber: null,
    guild : guilds[0],
    skillset : [skillset[4], skillset[7], skillset[11], skillset[16], skillset[20]],
    takenJob: null
}, {
    nik: 4,
    username : "SetyaNovanto",
    password : "12345678",
    fullname : "Setya Novanto",
    pp : "../img/profile/default.png",
    birthdate: "1945-08-17",
    role : roles[3],
    point : 30000,
    gold: 100000,
    rank: null,
    rankNumber: null,
    guild : guilds[1],
    skillset : [skillset[10], skillset[20], skillset[19], skillset[21], skillset[22]],
    takenJob: null
}];

var jobs = [{
    no: 0,
    task : "Kill 4 Goblins",
    img : "../img/job/wow-goblin.png",
    issuer : users[0],
    minRank : ["BRONZE", 5000],
    rewards : ["400 Gold", "2x Health Potion"],
    deadline : "4 Days Remaining"
}, {
    no: 1,
    task : "Protect a Merchant Caravan",
    img : "../img/job/cv-caravan.png",
    issuer : users[0],
    minRank : ["SILVER", 15000],
    rewards : ["1000 Gold"],
    deadline : "4 Days Remaining"
}, {
    no: 2,
    task : "Kill a Dragon",
    img : "../img/job/wow-dragon.png",
    issuer : users[0],
    minRank : ["GOLD", 50000],
    rewards : ["9000 Gold", "Dragon Boot"],
    deadline : "5 Days Remaining"
}, {
    no: 3,
    task : "Skeleton Dungeon Raid : Reach 4th Floor",
    img : "../img/job/ac-skeleton-dungeon.png",
    issuer : users[0],
    minRank : ["IRON", 0],
    rewards : ["300 Gold"],
    deadline : "6 Days Remaining"
}, {
    no: 4,
    task : "Kill 8 Goblins",
    img : "../img/job/wow-goblin.png",
    issuer : users[1],
    minRank : ["BRONZE", 5000],
    rewards : ["1200 Gold", "2x Health Potion"],
    deadline : "6 Days Remaining"
}, {
    no:5,
    task : "Protect 2 Merchant Caravans",
    img : "../img/job/cv-caravan.png",
    issuer : users[1],
    minRank : ["SILVER", 15000],
    rewards : ["1000 Gold"],
    deadline : "1 Days Remaining"
}, {
    no:6,
    task : "Capture a Dragon",
    img : "../img/job/wow-dragon.png",
    issuer : users[1],
    minRank : ["GOLD", 50000],
    rewards : ["12000 Gold", "Dragon Boot"],
    deadline : "12 Days Remaining"
}, {
    no:7,
    task : "Skeleton Dungeon Raid : Reach 12th Floor",
    img : "../img/job/ac-skeleton-dungeon.png",
    issuer : users[1],
    minRank : ["BRONZE", 5000],
    rewards : ["1000 Gold"],
    deadline : "6 Days Remaining"
}, {
    no:8,
    task : "Kill 20 Goblins",
    img : "../img/job/wow-goblin.png",
    issuer : users[2],
    minRank : ["BRONZE", 5000],
    rewards : ["2500 Gold", "4x Health Potion"],
    deadline : "4 Days Remaining"
}, {
    no:9,
    task : "Protect a Merchant Caravan",
    img : "../img/job/cv-caravan.png",
    issuer : users[3],
    minRank : ["SILVER", 15000],
    rewards : ["1000 Gold"],
    deadline : "4 Days Remaining"
}, {
    no:10,
    task : "Kill 2 Dragons",
    img : "../img/job/wow-dragon.png",
    issuer : users[3],
    minRank : ["GOLD", 50000],
    rewards : ["18000 Gold", "2x Dragon Boot", "1x Double Points Coupon"],
    deadline : "15 Days Remaining"
}, {
    no:11,
    task : "Skeleton Dungeon Raid : Reach 10th Floor",
    img : "../img/job/ac-skeleton-dungeon.png",
    issuer : users[3],
    minRank : ["IRON", 0],
    rewards : ["1000 Gold"],
    deadline : "6 Days Remaining"
}, {
    no:12,
    task : "Raid 12 Merchant Caravan",
    img : "../img/job/cv-caravan.png",
    issuer : users[4],
    minRank : ["IRON", 0],
    rewards : ["20000 Gold", "1x Gold Dagger"],
    deadline : "6 Days Remaining"
}];

function getSkillsetIndex(skill){
    let i;
    for(i=0; i<skillset.length; i++){
        if(skillset[i] === skill){
            return i;
        }
    }   
    return -1;
}

//encode
function setCookieFromJSON(user){
    let rank;
    let rankNumber;
    let guild;
    let encodedSkillset;
    let takenJob;

    if(user.rank === null){
        rank = "null";
    }
    
    if(user.rankNumber === null){
        rankNumber = "null";
    }

    if(user.guild === null){
        guild = "null";
    }
    else if(typeof user.guild == "object"){
        guild = user.guild.no;
    }

    if(user.skillset === null){
        encodedSkillset = "null";
    }
    else if(user.skillset instanceof Array){
        encodedSkillset = "";
        let i;
        for(i of user.skillset){
            encodedSkillset += getSkillsetIndex(i)+".";
        }
        encodedSkillset = encodedSkillset.substring(0, encodedSkillset.length-1);
    }

    if(user.takenJob === null){
        takenJob = "null"
    }
    else{
        takenJob = user.takenJob
    }

    document.cookie = `data=${user.nik},${user.username},${user.password},${user.fullname},${user.pp},${user.birthdate},${user.role},${user.point},${user.gold},${rank},${rankNumber},${guild},${encodedSkillset},${takenJob};path=/;`;
}

function deleteCookie(){
    document.cookie = "data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//decode
function getCookieAsJSON(){
    let temp = decodeURIComponent(document.cookie).split(";")[0].split(",");
    if(temp[9] === "null" || temp[9] === null){
        temp[9] = null;
    }
    else{
        temp[9] = Number(temp[9]);
    }

    if(temp[10] === "null"){
        temp[10] = null;
    }
    else{
        temp[10] = Number(temp[10]);
    }

    if(temp[11] === "null"){
        temp[11] = null;
    }
    else{
        temp[11] = guilds[Number(temp[11])];
    }

    let skillsetTemp = [];
    if(temp[12] === "null"){
        skillsetTemp = null;
    }
    else if(typeof temp[12] == "string"){
        let numberStr = temp[12].split(".");
        let i;
        for(i of numberStr){
            skillsetTemp.push(skillset[Number(i)]);
        }
    }

    if(temp[13] === "null"){
        temp[13] = null;
    }
    else{
        temp[13] = Number(temp[13]);
    }

    return {
        nik: Number(temp[0].replace("data=","")),
        username : temp[1],
        password : temp[2],
        fullname : temp[3],
        pp : temp[4],
        birthdate: temp[5],
        role : temp[6],
        point : Number(temp[7]),
        gold : Number(temp[8]),
        rank : temp[9],
        rankNumber: temp[10],
        guild : temp[11],
        skillset : skillsetTemp,
        takenJob : temp[13]
    };
}

function numberBeautify(number){
    let strNumber = number.toString();
    let output = "";
    let i;
    for(i=strNumber.length-1; i>=0; i--){
        output = strNumber.charAt(i) + output;
        if((strNumber.length - i)%3 == 0 && i !== 0){
            output = ","+output;
        }
    }
    return output;
}

function illegalUsername(username){
    let accChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    let i;
    for(i=0; i<username.length; i++){
        if(!accChar.includes(username.charAt(i))){
            return true;
        }
    }
    return false;
}

function userExists(username, users){
    let i;
    for(i of users){
        if(i.username.toLowerCase() === username.toLowerCase()){
            return true;
        }
    }
    return false;
}

function updateData(guilds, users){
    /*
    determine players rank base on their point
    PLATINUM : 100000
    GOLD : 50000
    SILVER : 15000
    BRONZE : 5000
    */

    let i;
    for(i of users){
        if(i.point >= 100000){
            i.rank = "PLATINUM";
        }
        else if(i.point >= 50000){
            i.rank = "GOLD";
        }
        else if(i.point >= 15000){
            i.rank = "SILVER";
        }
        else if(i.point >= 5000){
            i.rank = "BRONZE";
        }
        else{
            i.rank = "IRON";
        }
    }

    //calculate users rankNumber
    let userRank = [...users] // copy array

    //sort descending base on user's point
    for(i=userRank.length; i>0; i--){
        let j;
        let isSorted = true;
        for(j=1; j<i; j++){
            if(userRank[j-1].point < userRank[j].point){
                let temp = userRank[j-1];
                userRank[j-1] = userRank[j];
                userRank[j] = temp;
                isSorted = false;
            }
        }
        if(isSorted){
            break;
        }
    }

    for(i=0; i<userRank.length; i++){
        userRank[i].rankNumber = i+1;
    }
    //calculate users rankNumber end

    //calculate guilds' point base on total members' points
    for(i of guilds){
        i.point = 0;
    }

    for(i of users){
        if(i.guild !== null){
            i.guild.point += i.point;
        }
    }

    //calculate guild's rank
    let guildRank = [...guilds];
    
    for(i=guildRank.length; i>0; i--){
        let j;
        let isSorted = true;
        for(j=1; j<i; j++){
            if(guildRank[j-1].point < guildRank[j].point){
                let temp = guildRank[j-1];
                guildRank[j-1] = guildRank[j];
                guildRank[j] = temp;
                isSorted = false;
            }
        }
        if(isSorted){
            break;
        }
    }

    for(i=0; i<guildRank.length; i++){
        guildRank[i].rank = i+1;
    }

}

function validateLogin(username, password, users){
    let user;
    for(user of users){
        if(user.username === username && user.password === password){
            return {response : true, nik : user.nik};
        }
    }
    return {response: false};
}

function getJobsBelongToGuild(guildNo, keyword=""){
    let output = [];
    let i;
    for(i of jobs){
        if(i.issuer.guild.no === guildNo && i.task.toLowerCase().includes(keyword.toLowerCase())){
            output.push(i);
        }
    }
    return output;
}

function getGuildMembers(guildNo, keyword=""){
    let output = [];
    let i;
    for(i of users){
        if((i.username.toLowerCase().includes(keyword.toLowerCase()) || i.fullname.toLowerCase().includes(keyword.toLowerCase()))){
            if(guildNo === null || i.guild.no === guildNo){
                output.push(i);
            }
        }
    }
    return output;
}

function getGuilds(keyword=""){
    let output = [];
    let i;
    for(i of guilds){
        if(i.name.toLowerCase().includes(keyword.toLowerCase())){
            output.push(i);
        }
    }
    return output;
}

function getSkillset(excludedSkillset=[], keyword){
    let output = [];
    let i;
    for(i of skillset){
        if(!excludedSkillset.includes(i) && i.toLowerCase().includes(keyword.toLowerCase())){
            output.push(i);
        }
    }
    return output;
}

function removeUserSkillset(user, skillsetName){
    user.skillset.splice(user.skillset.indexOf(skillsetName), 1);
}

updateData(guilds, users);

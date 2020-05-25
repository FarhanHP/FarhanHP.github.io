let roles = ["Assasin", "Mage", "Ranger", "Thieve", "Warrior"];

let skillset = ["Acrobatics", "Alchemy", "Anatomy", "Ancient History", "Ancient Languange", "Animal Call", "Animal Handling", "Animal Training", "Animal Lore", "Anthropology", "Appraising", "Arcane Lore", "Astrology", "Armorer", "Artistry", "Balancing", "Barter", "Blackmail", "Berserk", "Blacksmith", "Blind Fighting", "Bluff", "Bloating", "Body Language", "Boxing", "Breath Control", "Brewing", "Bribe", "Bullfighting", "Calligraphy", "Camping", "Camouflage", "Carpentry", "Cartography", "Cobbling", "Climbing", "Concealment", "Contortion", "Cooking", "Counterfeiting", "Cryptography", "Dancing", "Dead Language", "Deceit", "Demolition", "Detect Lie", "Diagnosis", "Disarm Traps", "Detect Traps", "Detect Vice", "Diplomacy", "Disarm Opponent", "Disguise", "Double Handed Combat", "Driving", "Electronics", "Emphaty", "Enchanting", "Engineering", "Escape", "Ettiequette", "Falconry", "Farming", "Fencing", "Fire Breathing", "Fire Making", "First Aid", "Fishing", "Fletcher", "Flirting", "Folklore", "Fortune Telling", "Gambling", "General Knowledge", "Gesture", "Gibberish", "Gymnastics", "Haggling", "Healing", "Heraldry", "Herbalism", "Herding", "Hibernate", "Hide In Shadows", "Hunting", "Hypnotism", "Impersonation", "Interrogation", "Intimidation", "Investigation", "Jargon", "Juggling", "Jumping", "Language", "Lasso", "Leather Working", "Lifting", "Literacy", "Marksman", "Mechanics", "Mediaton", "Merchant", "Mining", "Mountaneering", "Mythology", "Native Language", "Navigation", "Occultism", "Pickpocket", "Predict Weather", "Psychology", "Public Speaking", "Quick Draw", "Read Lips", "Rescue", "Research", "Reverse Engineering", "Rope Use", "Riding", "Rigging", "Scribe", "Scrounging", "Sculpting", "Seamanship", "Sewing", "Signaling", "Stonemasonry", "Tailor", "Teaching", "Throw Voice", "Tightrope Walking", "Troture", "Toxicology", "Tracking", "Trapping", "Unarmed Combat", "Ventriloquism", "Weapons Master", "Weapon Smithing", "Weaving", "Woodworking", "Wrestling", "Zero Gravity"];

let joinPeriods = ["1-Month", "3-Months", "6-Months", "12-Months"];

let countryCode = ["1", "1242", "1246", "1264", "1268", "1284", "1340", "1345", "1441", "1473", "1649", "1664", "1670", "1671", "1684", "1721", "1758", "1767", "1784", "1787", "1809", "1829", "1849", "1868", "1869", "1876", "1939", "20", "211", "212", "213", "216", "218", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "246", "248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "258", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "27", "290", "291", "297", "298", "299", "30", "31", "32", "33", "34", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "36", "370", "371", "372", "373", "374", "375", "376", "377", "378", "379", "380", "381", "382", "383", "385", "386", "387", "389", "39", "40", "41", "420", "421", "423", "43", "44", "441481", "441534", "441624", "45", "46", "47", "48", "49", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "51", "52", "53", "54", "55", "56", "57", "58", "590", "591", "592", "593", "595", "597", "598", "599", "60", "61", "62", "63", "64", "65", "66", "670", "672", "673", "674", "675", "676", "677", "678", "679", "680", "681", "682", "683", "685", "686", "687", "688", "689", "690", "691", "692", "7", "81", "82", "84", "850", "852", "853", "855", "856", "86", "880", "886", "90", "91", "92", "93", "94", "95", "960", "961", "962", "963", "964", "965", "966", "967", "968", "970", "971", "972", "973", "974", "975", "976", "977", "98", "992", "993", "994", "995", "996", "998"];

let guilds = [{
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

let users = [{
    id : 0,
    nik: "0000000000000000",
    username : "FarhanHP",
    password : "12345678",
    fullname : "Farhan Herdian Pradana",
    pp : "../img/profile/default.png",
    birthdate: "2000-01-28",
    telephone: "",
    handphone: "6285715957229",
    address : "Jl. Nanas no.3, DKI Jakarta, Indonesia",
    role : null,
    isManager : true,
    point : -1,
    gold : null,
    rank : null,
    rankNumber: null,
    guild : null,
    skillset : null,
    takenJob: null
},{
    id : 1,
    nik: "1111111111111111",
    username : "MrFarhan",
    password : "12345678",
    fullname : "Farhan Herdian Pradana",
    pp : "../img/profile/default.png",
    birthdate: "2000-01-28",
    telephone: "",
    handphone: "6285715957229",
    address : "Jl. Nanas no.3, DKI Jakarta, Indonesia",
    role : roles[1],
    isManager : false,
    point : 80000,
    gold : 19500,
    rank : null,
    rankNumber: null,
    guild : guilds[0],
    skillset : [skillset[1], skillset[5], skillset[9], skillset[14], skillset[18]],
    takenJob: 9
}, {
    id : 2,
    nik: "2222222222222222",
    username : "gambutUdin",
    password : "12345678",
    fullname : "Udin Gambut",
    pp : "../img/profile/default.png",
    birthdate: "2000-07-07",
    telephone: "",
    handphone: "6285715957200",
    address : "Jl. Nanas no.1, DKI Jakarta, Indonesia",
    role : roles[2],
    isManager : false,
    point : 90000,
    gold : 20000,
    rank: null,
    rankNumber: null,
    guild : guilds[2],
    skillset : [skillset[0], skillset[4], skillset[8], skillset[12], skillset[16]],
    takenJob : null
}, {
    id : 3,
    nik: "3333333333333333",
    username : "Deceitful",
    password : "12345678",
    fullname : "Muhammad Izzaturahman",
    pp : "../img/profile/default.png",
    birthdate: "2000-04-06",
    telephone: "",
    handphone: "6285715955225",
    address : "Jl. Nanas no.2, DKI Jakarta, Indonesia",
    role : roles[0],
    isManager : false,
    point : 38700,
    rank : null,
    rankNumber: null,
    guild : guilds[2],
    skillset : [skillset[2], skillset[6], skillset[10], skillset[15], skillset[19]],
    takenJob: null
}, {
    id : 4,
    nik: "4444444444444444",
    username : "jinxProAmanda",
    password : "12345678",
    fullname : "Amanda Putra",
    pp : "../img/profile/default.png",
    birthdate: "1996-03-17",
    telephone: "",
    handphone: "6285715957676",
    address : "Jl. Nanas no.4, DKI Jakarta, Indonesia",
    role : roles[4],
    isManager : false,
    point : 34500,
    gold : 50000,
    rank : null,
    rankNumber: null,
    guild : guilds[0],
    skillset : [skillset[4], skillset[7], skillset[11], skillset[16], skillset[20]],
    takenJob: null
}, {
    id: 5,
    nik: "5555555555555555",
    username : "SetyaNovanto",
    password : "12345678",
    fullname : "Setya Novanto",
    pp : "../img/profile/default.png",
    birthdate: "1945-08-17",
    telephone: "",
    handphone: "6285715912345",
    address : "Jl. Nanas no.5, DKI Jakarta, Indonesia",
    role : roles[3],
    isManager : false,
    point : 30000,
    gold: 100000,
    rank: null,
    rankNumber: null,
    guild : guilds[1],
    skillset : [skillset[10], skillset[20], skillset[19], skillset[21], skillset[22]],
    takenJob: null
}];

let jobs = [{
    no: 0,
    task : "Kill 4 Goblins",
    img : "../img/job/wow-goblin.png",
    issuer: users[1],
    minRank : ["BRONZE", 5000],
    rewards : ["400 Gold", "2x Health Potion"],
    deadline : "4 Days Remaining"
}, {
    no: 1,
    task : "Protect a Merchant Caravan",
    img : "../img/job/cv-caravan.png",
    issuer: users[1],
    minRank : ["SILVER", 15000],
    rewards : ["1000 Gold"],
    deadline : "4 Days Remaining"
}, {
    no: 2,
    task : "Kill a Dragon",
    img : "../img/job/wow-dragon.png",
    issuer: users[1],
    minRank : ["GOLD", 50000],
    rewards : ["9000 Gold", "Dragon Boot"],
    deadline : "5 Days Remaining"
}, {
    no: 3,
    task : "Skeleton Dungeon Raid : Reach 4th Floor",
    img : "../img/job/ac-skeleton-dungeon.png",
    issuer: users[1],
    minRank : ["IRON", 0],
    rewards : ["300 Gold"],
    deadline : "6 Days Remaining"
}, {
    no: 4,
    task : "Kill 8 Goblins",
    img : "../img/job/wow-goblin.png",
    issuer: users[2],
    minRank : ["BRONZE", 5000],
    rewards : ["1200 Gold", "2x Health Potion"],
    deadline : "6 Days Remaining"
}, {
    no:5,
    task : "Protect 2 Merchant Caravans",
    img : "../img/job/cv-caravan.png",
    issuer: users[2],
    minRank : ["SILVER", 15000],
    rewards : ["1000 Gold"],
    deadline : "1 Days Remaining"
}, {
    no:6,
    task : "Capture a Dragon",
    img : "../img/job/wow-dragon.png",
    issuer: users[2],
    minRank : ["GOLD", 50000],
    rewards : ["12000 Gold", "Dragon Boot"],
    deadline : "12 Days Remaining"
}, {
    no:7,
    task : "Skeleton Dungeon Raid : Reach 12th Floor",
    img : "../img/job/ac-skeleton-dungeon.png",
    issuer: users[2],
    minRank : ["BRONZE", 5000],
    rewards : ["1000 Gold"],
    deadline : "6 Days Remaining"
}, {
    no:8,
    task : "Kill 20 Goblins",
    img : "../img/job/wow-goblin.png",
    issuer: users[3],
    minRank : ["BRONZE", 5000],
    rewards : ["2500 Gold", "4x Health Potion"],
    deadline : "4 Days Remaining"
}, {
    no:9,
    task : "Protect a Merchant Caravan",
    img : "../img/job/cv-caravan.png",
    issuer: users[4],
    minRank : ["SILVER", 15000],
    rewards : ["1000 Gold"],
    deadline : "4 Days Remaining"
}, {
    no:10,
    task : "Kill 2 Dragons",
    img : "../img/job/wow-dragon.png",
    issuer: users[4],
    minRank : ["GOLD", 50000],
    rewards : ["18000 Gold", "2x Dragon Boot", "1x Double Points Coupon"],
    deadline : "15 Days Remaining"
}, {
    no:11,
    task : "Skeleton Dungeon Raid : Reach 10th Floor",
    img : "../img/job/ac-skeleton-dungeon.png",
    issuer: users[4],
    minRank : ["IRON", 0],
    rewards : ["1000 Gold"],
    deadline : "6 Days Remaining"
}, {
    no:12,
    task : "Raid 12 Merchant Caravan",
    img : "../img/job/cv-caravan.png",
    issuer: users[5],
    minRank : ["IRON", 0],
    rewards : ["20000 Gold", "1x Gold Dagger"],
    deadline : "6 Days Remaining"
}];

let finishedJobs = [{
    no: 0,
    task : "Kill 20 Goblins",
    img : "../img/job/wow-goblin.png",
    issuer: users[1],
    minRank : ["BRONZE", 5000],
    rewards : ["400 Gold", "2x Health Potion"],
    finished : "2019-01-28",
    finisher : users[4]
}, {
    no: 1,
    task : "Protect a Merchant Caravan",
    img : "../img/job/cv-caravan.png",
    issuer: users[1],
    minRank : ["SILVER", 15000],
    rewards : ["1000 Gold"],
    finished : "2019-01-31",
    finisher : users[4]
}, {
    no: 2,
    task : "Kill a Dragon",
    img : "../img/job/wow-dragon.png",
    issuer: users[1],
    minRank : ["GOLD", 50000],
    rewards : ["9000 Gold", "Dragon Boot"],
    finished : "2019-02-04",
    finisher : users[2]
}, {
    no: 3,
    task : "Skeleton Dungeon Raid : Reach 4th Floor",
    img : "../img/job/ac-skeleton-dungeon.png",
    issuer: users[1],
    minRank : ["IRON", 0],
    rewards : ["300 Gold"],
    deadline : "6 Days Remaining",
    finished : "2019-02-05",
    finisher : users[5]
}, {
    no: 4,
    task : "Kill 10 Goblins",
    img : "../img/job/wow-goblin.png",
    issuer: users[2],
    minRank : ["BRONZE", 5000],
    rewards : ["1400 Gold", "2x Health Potion"],
    finished : "2019-02-19",
    finisher : users[1]
}, {
    no:5,
    task : "Protect 2 Merchant Caravans",
    img : "../img/job/cv-caravan.png",
    issuer: users[2],
    minRank : ["SILVER", 15000],
    rewards : ["1000 Gold"],
    finished : "2019-02-20",
    finisher : users[1]
}, {
    no:6,
    task : "Capture a Dragon",
    img : "../img/job/wow-dragon.png",
    issuer: users[2],
    minRank : ["GOLD", 50000],
    rewards : ["12000 Gold", "Dragon Boot"],
    finished : "2019-04-16",
    finisher : users[1]
}, {
    no:7,
    task : "Skeleton Dungeon Raid : Reach 12th Floor",
    img : "../img/job/ac-skeleton-dungeon.png",
    issuer: users[2],
    minRank : ["BRONZE", 5000],
    rewards : ["1000 Gold"],
    finished : "2019-05-09",
    finisher : users[3]
}, {
    no:8,
    task : "Kill 20 Goblins",
    img : "../img/job/wow-goblin.png",
    issuer: users[3],
    minRank : ["BRONZE", 5000],
    rewards : ["2500 Gold", "4x Health Potion"],
    finished : "2019-07-21",
    finisher : users[4]
}, {
    no:9,
    task : "Protect a Merchant Caravan",
    img : "../img/job/cv-caravan.png",
    issuer: users[4],
    minRank : ["SILVER", 15000],
    rewards : ["1000 Gold"],
    finished : "2019-07-22",
    finisher : users[3]
}, {
    no:10,
    task : "Kill 2 Dragons",
    img : "../img/job/wow-dragon.png",
    issuer: users[4],
    minRank : ["GOLD", 50000],
    rewards : ["18000 Gold", "2x Dragon Boot", "1x Double Points Coupon"],
    finished : "2019-09-01",
    finisher : users[1]
}, {
    no:11,
    task : "Skeleton Dungeon Raid : Reach 10th Floor",
    img : "../img/job/ac-skeleton-dungeon.png",
    issuer: users[4],
    minRank : ["IRON", 0],
    rewards : ["1000 Gold"],
    deadline : "6 Days Remaining",
    finished : "2019-09-24",
    finisher : users[2]
}, {
    no:12,
    task : "Raid 12 Merchant Caravan",
    img : "../img/job/cv-caravan.png",
    issuer: users[5],
    minRank : ["IRON", 0],
    rewards : ["20000 Gold", "1x Gold Dagger"],
    finished : "2019-12-24",
    finisher : users[2]
}];

let items = ["Dagger", "Dragon Boot", "Gold", "Double Point", "Double Gold", "Golden Dagger", "Health Potion", "Mana Potion", "Undead Broadsword"]

function generatePassword(length){
    let char = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "$@#&!"];
    let output = "";
    while (output.length < length){
        let i;
        for(i of char){
            output += i.charAt(Math.floor(Math.random() * i.length));
        }
    }
    return output;
}

//cookie
function setCookie(cname, content){
    document.cookie = `${cname}=${content}; path=/; sameSite=lax`;
}

function deleteCookie(cname){
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function getCookie(cname){
    let cookie = document.cookie.split(";");
    let i;
    for(i of cookie){
        if(i.includes(cname+"=")){
            return i.split("=")[1];
        }
    }
    return "";
}

function setRegisterCookie(user){
    setCookie("register_id", user.id);
    setCookie("register_nik", user.nik);
    setCookie("register_username", user.username);
    setCookie("register_password", user.password);
    setCookie("register_fullname", user.fullname);
    setCookie("register_pp", user.pp);
    setCookie("register_birthdate", user.birthdate);
    setCookie("register_telephone", user.telephone);
    setCookie("register_handphone", user.handphone);
    setCookie("register_address", user.address);
    setCookie("register_role", user.role);
    setCookie("register_isManager", user.isManager);
    setCookie("register_point", user.point);
    setCookie("register_gold", user.gold);
    setCookie("register_rank", user.rank);
    setCookie("register_rankNumber", user.rankNumber);

    if(user.guild === null){
        setCookie("register_guild", "null");
    }
    else{
        setCookie("register_guild", user.guild.no);
    }

    setCookie("register_skillset", user.skillset);
    setCookie("register_takenJob", user.takenJob);
}

function setLoginCookie(user){
    setCookie("login_id", user.id);
    setCookie("login_nik", user.nik);
    setCookie("login_username", user.username);
    setCookie("login_password", user.password);
    setCookie("login_fullname", user.fullname);
    setCookie("login_pp", user.pp);
    setCookie("login_birthdate", user.birthdate);
    setCookie("login_telephone", user.telephone);
    setCookie("login_handphone", user.handphone);
    setCookie("login_address", user.address);
    setCookie("login_role", user.role);
    setCookie("login_isManager", user.isManager);
    setCookie("login_point", user.point);
    setCookie("login_gold", user.gold);
    setCookie("login_rank", user.rank);
    setCookie("login_rankNumber", user.rankNumber);

    if(user.guild === null){
        setCookie("login_guild", "null");
    }
    else{
        setCookie("login_guild", user.guild.no);
    }

    setCookie("login_skillset", user.skillset);
    setCookie("login_takenJob", user.takenJob);
}

function getRegisterCookie(){
    let user = {};

    user.id = Number(getCookie("register_id"));
    user.nik = getCookie("register_nik");
    user.username = getCookie("register_username");
    user.password = getCookie("register_password");
    user.fullname = getCookie("register_fullname");
    user.pp = getCookie("register_pp");
    user.birthdate = getCookie("register_birthdate");
    user.telephone = getCookie("register_telephone");
    user.handphone = getCookie("register_handphone");
    user.address = getCookie("register_address");
    user.role = getCookie("register_role");
    user.isManager = getCookie("register_isManager") === "true";
    user.point = Number(getCookie("register_point"));
    user.gold = Number(getCookie("register_gold"));
    user.rank = getCookie("register_rank");
    user.rankNumber = Number(getCookie("register_rankNumber"));

    let guild = getCookie("register_guild");
    if(guild == "null"){
        user.guild = null;
    }
    else{
        user.guild = guilds[Number(guild)];
    }

    let skillset = getCookie("register_skillset");
    if(skillset == "null"){
        user.skillset = null;
    }
    else{
        user.skillset = skillset.split(",");
    }

    let takenJob = getCookie("register_takenJob");
    if(takenJob == "null"){
        user.takenJob = null;
    }
    else{
        user.takenJob = Number(takenJob);
    }

    return user;
}

function getLoginCookie(){
    let user = {};

    user.id = Number(getCookie("login_id"));
    user.nik = getCookie("login_nik");
    user.username = getCookie("login_username");
    user.password = getCookie("login_password");
    user.fullname = getCookie("login_fullname");
    user.pp = getCookie("login_pp");
    user.birthdate = getCookie("login_birthdate");
    user.telephone = getCookie("login_telephone");
    user.handphone = getCookie("login_handphone");
    user.address = getCookie("login_address");
    user.role = getCookie("login_role");
    user.isManager = getCookie("login_isManager") === "true";
    user.point = Number(getCookie("login_point"));
    user.gold = Number(getCookie("login_gold"));
    user.rank = getCookie("login_rank");
    user.rankNumber = Number(getCookie("login_rankNumber"));

    let guild = getCookie("login_guild");
    if(guild == "null"){
        user.guild = null;
    }
    else{
        user.guild = guilds[Number(guild)];
    }

    let skillset = getCookie("login_skillset");
    if(skillset == "null"){
        user.skillset = null;
    }
    else{
        user.skillset = skillset.split(",");
    }

    let takenJob = getCookie("login_takenJob");
    if(takenJob == "null"){
        user.takenJob = null;
    }
    else{
        user.takenJob = Number(takenJob);
    }

    return user;
}

function deleteLoginCookie(){
    let cookie = document.cookie.split(";");
    let i;
    for(i of cookie){
        if(i.match(/login/)){
            deleteCookie(i.split("=")[0]);
        }
    }
}

function deleteRegisterCookie(){
    let cookie = document.cookie.split(";");
    let i;
    for(i of cookie){
        if(i.match(/register/)){
            deleteCookie(i.split("=")[0]);
        }
    }
}

function deleteAllCookie(){
    let cookie = document.cookie.split(";");
    let i;
    for(i of cookie){
        deleteCookie(i.split("=")[0]);
    }
}
//cookie end

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
    let accChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789._";
    let i;
    for(i=0; i<username.length; i++){
        if(!accChar.includes(username.charAt(i))){
            return true;
        }
    }
    return false;
}

function usernameExists(username){
    let i;
    for(i of users){
        if(i.username.toLowerCase() === username.toLowerCase()){
            return true;
        }
    }
    return false;
}

function nikExists(nik){
    let i;
    for(i of users){
        if(i.nik === nik){
            return true;
        }
    }
    return false;
}

function updateData(){
    //update users base on login cookie
    if(getCookie("login_id") !== ""){
        let loginUser = getLoginCookie();
        if(loginUser.id < users.length){
            let i;
            for(i in loginUser){
                users[loginUser.id][i] = loginUser[i];
            }
        }
        else{
            users.push(loginUser);
        }
    }

    //adding register cookie to users
    if(getCookie("register_id") !== ""){
        let registerUser = getRegisterCookie();
        if(registerUser.id >= users.length){
            users.push(registerUser);
        }
    }

    /*
    determine players rank base on their point
    PLATINUM : 100000
    GOLD : 50000
    SILVER : 15000
    BRONZE : 5000
    */

    let i;
    for(i of users){
        if(!i.isManager){
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

    //update login cookie
    if(getCookie("login_id") !== ""){
        setLoginCookie(users[Number(getCookie("login_id"))]);
    }
}

function validateLogin(username, password){
    let user;
    for(user of users){
        if(user.username === username && user.password === password){
            return {response : true, id : user.id};
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
            if(!i.isManager && (guildNo === null || (i.guild !== null && i.guild.no === guildNo))){
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

updateData();

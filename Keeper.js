let activeLord;
let lordHealth;
// let catacombsLayout = [0,1,5,1,1,5,2,5,6];
let catacombsLayout = [0, 1, 3, 1, 1, 3, 2, 3, 4];


// Populate Lord selection dropdown
var select = document.getElementById("selectLord")

for (let i = 0; i < lords.length; i++) {
    let el = document.createElement("option");
    el.textContent = lords[i].name;
    el.value = lords[i].id;
    select.appendChild(el);
}



// Display information of the selected Lord
function displayLord() {
    value = document.getElementById("selectLord").value;
    var lordInfo = document.getElementById("lordInfo")
    document.getElementById("lordInfo").innerHTML = "";
    if (value == -1) {

    } else {
        var selectedLord = lords[value]
        var info = document.createElement("div");
        var name = document.createTextNode("Name: " + selectedLord.name)
        var health = document.createTextNode("Health: " + selectedLord.health)
        var merc = document.createTextNode("Mercenary: " + selectedLord.mercenaries.map(merc => " " + merc.name))
        var minion = document.createTextNode("Minions: " + selectedLord.minions.map(minion => " " + minion.name))
        info.appendChild(name);
        info.appendChild(document.createElement("br"));
        info.appendChild(health);
        info.appendChild(document.createElement("br"));
        info.appendChild(merc);
        info.appendChild(document.createElement("br"));
        info.appendChild(minion);
        lordInfo.appendChild(info);
    }
}


// Go button pressed.
function chooseLord() {

    var selectedLordID = $("#selectLord").val();
    if (selectedLordID != -1) {
        activeLord = lords[selectedLordID]
        lordHealth = activeLord.health;
        $("#welcomeScreen").hide();
        generateCatacomb();
    }
}

// Generate rooms.
function generateCatacomb() {
    let roomNumber = 0;
    $("#rooms").show();
    for (let roomlvl of catacombsLayout) {

        roomNumber += 1;
        generateRoom(roomlvl, roomNumber)

    }
}

function generateRoom(roomLevel) {
    let specialRoom = false;
    let selectedRoom;
    switch (roomLevel) {
        case 0: {
            let randomIndex = Math.floor(Math.random() * Math.floor(lvlZeroRooms.length));
            selectedRoom = lvlZeroRooms.splice(randomIndex, 1);
            break;
        }
        case 1: {
            let randomIndex = Math.floor(Math.random() * Math.floor(lvlOneRooms.length));
            selectedRoom = lvlOneRooms.splice(randomIndex, 1);
            break;
        }
        case 2: {
            let randomIndex = Math.floor(Math.random() * Math.floor(lvlTwoRooms.length));
            selectedRoom = lvlTwoRooms.splice(randomIndex, 1);
            break;
        }
        case 3: {
            let randomIndex = Math.floor(Math.random() * Math.floor(specialRooms.length));
            selectedRoom = specialRooms.splice(randomIndex, 1);
            specialRoom = true;
            break;
        }
        case 4: {
            let randomIndex = Math.floor(Math.random() * Math.floor(specialRooms.length));
            selectedRoom = specialRooms.splice(randomIndex, 1);
            specialRoom = true;
        }

    }


    if (roomLevel == 0 || roomLevel == 1 || roomLevel == 2) {

        let title = "<h1>" + selectedRoom[0].name + "<h1>"

        let suppresses = ''

        if (selectedRoom[0].suppresses.length > 0) {

            suppresses += "<h3> This room suppresses: </h3>"

            for ( let suppression of selectedRoom[0].suppresses) {
                suppresses += (suppression.modifier == null ? "" : suppression.modifier) + " " + suppression.type + "</br>"
            }
        }


        let monsterString = '<h3>Level 1 monsters: </h3>';
        if (selectedRoom[0].monsters.LevelOne.length > 0) {
            let monsterInfo
            for (let monster of selectedRoom[0].monsters.LevelOne) {



                if (monster.id == 100) {


                    monsterInfo = monsterIDCheck(activeLord.mercenaries[0].id);
                    monsterString += "<div class='" + monsterBorderColor(monsterInfo[0].family) + "'>" + activeLord.mercenaries[0].name + "(M)" + "</div>" + "<div class='amount'> X " + monster.amount + "</div></br>"


                } else if (monster.id == 201) {

                    monsterString += "<div class='monsterGroup'>" + monster.name + "</div>" + "<div class='amount'> X " + monster.amount + "</div></br>"
                }
                else {

                    monsterInfo = monsterIDCheck(monster.id);
                    monsterString += "<div class='" + monsterBorderColor(monsterInfo[0].family) + "'>" + monster.name + "</div>" + "<div class='amount'> X " + monster.amount + "</div></br>"
                }
            }

        } else {

        }

        monsterString += '<h3>Level 2 monsters: </h3>'
        if (selectedRoom[0].monsters.LevelTwo.length > 0) {
            let monsterInfo
            for (let monster of selectedRoom[0].monsters.LevelTwo) {
                if (monster.id == 202) {

                    monsterString += "<div class='monsterGroup'>" + monster.name + "</div><div class='amount'> X " + monster.amount + "</div></br>"
                }
                else {
                    monsterInfo = monsterIDCheck(monster.id);
                    monsterString += "<div class='" + monsterBorderColor(monsterInfo[0].family) + "'>" + monster.name + "</div><div class='amount'> X " + monster.amount + "</div></br>"
                }


            }

        } else {

        }
        monsterString += '<h3>Level 3 monsters: </h3>'
        if (selectedRoom[0].monsters.LevelThree.length > 0) {
            let monsterInfo
            for (let monster of selectedRoom[0].monsters.LevelThree) {
                if (monster.id == 203) {
                    monsterString += "<div class='monsterGroup'>" + monster.name + "</div><div class='amount'> X " + monster.amount + "</div></br>"
                }
                else {
                    monsterInfo = monsterIDCheck(monster.id);
                    monsterString += "<div class='" + monsterBorderColor(monsterInfo[0].family) + "'>" + monster.name + "</div><div class='amount'> X " + monster.amount + "</div></br>"
                }
            }

        } else {

        }

        monsterString += '<h3>Level 4 monsters: </h3>'
        if (selectedRoom[0].monsters.LevelFour.length > 0) {
            let monsterInfo
            for (let monster of selectedRoom[0].monsters.LevelFour) {

                if (monster.id == 204) {
                    monsterString += "<div class='monsterGroup'>" + monster.name + "</div><div class='amount'> X " + monster.amount + "</div></br>"
                }
                else {
                    monsterInfo = monsterIDCheck(monster.id);
                    monsterString += "<div class='" + monsterBorderColor(monsterInfo[0].family) + "'>" + monster.name + "</div><div class='amount'> X " + monster.amount + "</div></br>"
                }
            }

        } else {

        }
        monsterString += "</br>"
        let roomString = "<div class=room>" + title + suppresses + monsterString + "</div>"
        $("#rooms").append(roomString);
    } else if (roomLevel == 3) {
        specialRoomString = "<div class='specialRoom'>" + "<h1>" + selectedRoom[0].name + "</h1>" + "<p>" + selectedRoom[0].description + "</p>" + "</div>"

        $("#rooms").append(specialRoomString);
    } else if (roomLevel == 4) {
        let lordRoomString = `<h1>Catacomb Lord's Lair</h1>` + '<h3>' + activeLord.name + '</h3>' + "<h3> Health: " + lordHealth + "</h3>" + "<h3>Minions: </h3>";
        for (let minion of activeLord.minions) {
            lordRoomString += minion.name + " X " + minion.amount + "</br>";
        }
        lordRoomString += "<h3>Attacks:</h3>"

        for (let sequence of activeLord.shotSequences) {
            lordRoomString += "<div class='attack'>"

            for (let attack of sequence.sequence) {

                if (attack.type == "Summon") {
                    lordRoomString += (attack.type == "Then" ? " > " : attack.type) + " " + attack.modifier
                } else {
                    lordRoomString += (attack.modifier == null ? "" : attack.modifier) + " " + (attack.type == "Then" ? " > " : attack.type)
                }
            }
            lordRoomString += "</div>"

        }


        $("#rooms").append("<div class='lordsRoom'>" + lordRoomString + "</div>")
    } else {
        $("#rooms").append("Error");
    }


}


function monsterIDCheck(monsterId) {

    return monsters.filter(x => x.id === monsterId);

};

function monsterBorderColor(family) {
    switch(family) {
        case 'Dungeon': return "dungeonMonster"
        case 'Mythological': return "mythMonster"
        case 'Undead': return "undeadMonster"
        case 'Vermin': return "verminMonster"
        case 'Infernal': return "infernalMonster"
    }



}
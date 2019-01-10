let activeLord;
let lordHealth;
// let catacombsLayout = [0,1,5,1,1,5,2,5,6];
let catacombsLayout = [0,1,3,1,1,3,2,3,4];

let monsterid = 3;
let monstaar = monsters.filter(x => x.id === monsterid);

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
        generateRoom(roomlvl)

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
            
            for (supression of selectedRoom[0].suppresses) {
                    suppresses += (supression.modifier == null ? "" : supression.modifier) + " " + supression.type + "</br>"
                }
        } 
            
        

        let monsterString = '<h3>Level 1 monsters: </h3>';
        if (selectedRoom[0].monsters.LevelOne.length > 0) {
            for (let monster of selectedRoom[0].monsters.LevelOne) {



                if (monster.id != 100) {
                monsterString += "Name: " + monster.name + " X " + monster.amount  + "</br>"
                } else {
                monsterString += "Name: " + activeLord.mercenaries[0].name + "(M)" +" X " + monster.amount  + "</br>"
                }
            }

        } else {
        }

        monsterString += '<h3>Level 2 monsters: </h3>'
        if (selectedRoom[0].monsters.LevelTwo.length > 0) {
            for (let monster of selectedRoom[0].monsters.LevelTwo) {

                monsterString += "Name: " + monster.name + " X " + monster.amount  + "</br>"
            }

        } else {
            
        }
        monsterString += '<h3>Level 3 monsters: </h3>'
        if (selectedRoom[0].monsters.LevelThree.length > 0) {
            for (let monster of selectedRoom[0].monsters.LevelThree) {

                monsterString += "Name: " + monster.name + " X " + monster.amount  + "</br>"
            }

        } else {
 
        }

        monsterString += '<h3>Level 4 monsters: </h3>'
        if (selectedRoom[0].monsters.LevelFour.length > 0) {
            for (let monster of selectedRoom[0].monsters.LevelFour) {

                monsterString += "Name: " + monster.name + " X " + monster.amount  + "</br>"
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
            console.log(sequence.sequence)
            for (let attack of sequence.sequence) {
                console.log(attack)
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

    monsters.filter(x => x.id === monsterid);


};
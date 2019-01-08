let activeLord;
// let catacombsLayout = [0,1,5,1,1,5,2,5,6];
let catacombsLayout = [0,1,3,1,1,3,2,3,4];

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
            specialRoom = true;
            break;
        }

    }
    if (!(specialRoom)) {

        let title = "<h1>" + selectedRoom[0].name + "<h1>"
        let suppresses = "<h4>" + "This room suppresses: " + selectedRoom[0].suppresses + "</h4>>"
        let monsterString = 'Level 1 monsters: ';
        if (selectedRoom[0].monsters.LevelOne != null) {
            for (let monster of selectedRoom[0].monsters.LevelOne) {

                monsterString += "Name: " + monster.name + " Amount: " + monster.amount  + "</br>"
            }

        } else {
            monsterString = " </br>";
        }

        monsterString += 'Level 2 monsters: '
        if (selectedRoom[0].monsters.LevelTwo != null) {
            for (let monster of selectedRoom[0].monsters.LevelTwo) {

                monsterString += "Name: " + monster.name + " Amount: " + monster.amount  + "</br>"
            }

        } else {
            monsterString = " </br>";
        }
        monsterString += 'Level 3 monsters: '
        if (selectedRoom[0].monsters.LevelThree != null) {
            for (let monster of selectedRoom[0].monsters.LevelThree) {

                monsterString += "Name: " + monster.name + " Amount: " + monster.amount  + "</br>"
            }

        } else {
            monsterString = " </br>";
        }

        monsterString += 'Level 4 monsters: '
        if (selectedRoom[0].monsters.LevelFour != null) {
            for (let monster of selectedRoom[0].monsters.LevelFour) {

                monsterString += "Name: " + monster.name + " Amount: " + monster.amount  + "</br>"
            }

        } else {
            monsterString = " </br>";
        }
        $("#rooms").append(title, suppresses, monsterString);
    } else {

        $("#rooms").append(selectedRoom[0].name, selectedRoom[0].description);
    }


}

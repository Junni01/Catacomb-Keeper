let activeLord;
// let catacombsLayout = [0,1,5,1,1,5,2,5,6];
let catacombsLayout = [0,1,3,1,1,3,2,3,4];
console.log(lvlZeroRooms);


var select = document.getElementById("selectLord")
for (let i = 0; i < lords.length; i++) {
    let el = document.createElement("option");
    el.textContent = lords[i].name;
    el.value = lords[i].id;
    select.appendChild(el);
}





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

function chooseLord() {

    var selectedLordID = $("#selectLord").val();
    if (selectedLordID != -1) {
        activeLord = lords[selectedLordID]
        $("#welcomeScreen").hide();
        generateRooms();
    }
}

function generateRooms() {
    $("#rooms").show();
    for (let roomlvl of catacombsLayout) {

        switch (roomlvl) {
            case 0: {
                let currentRoom = lvlZeroRooms.pop();
                let title = "<h1>" + currentRoom.name + "<h1>"
                let supresses = "<h4>" + "This room suppresses: " + currentRoom.suppresses + "</h4>>"
                let lvlOneString = '';
                console.log(currentRoom.monsters["Level 1"]);
                if (currentRoom.monsters["Level 1"] != null) {
                    for (let monster of currentRoom.monsters["Level 1"]) {
                        console.log(monster);
                        lvlOneString += "Name: " + monster.name + " Amount: " + monster.amount  + "</br>"
                    }

                } else {
                    lvlOneString = "No Monsters";
                }

                $("#rooms").append(title, supresses, "<h5>Level 1 monsters: </h5>", lvlOneString);
                break;
            }
            case 1: {
                let text = "Level 1 Room (TODO)"
                $("#rooms").append(text);
                break;

            }
            case 2: {
                let text = "Level 2 Room (TODO)"
                $("#rooms").append(text);
                break;
            }
            case 3: {
                specialRoomString = "Special Room (TODO)"
                $("#rooms").append(specialRoomString);
                break;
            }
            case 4: {
                lordsLairString = "Catacomb Lord's Lair"
                $("#rooms").append(lordsLairString);
                break;
            }

        }



    }




}
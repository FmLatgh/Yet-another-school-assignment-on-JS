function makeListItem() {
    let toDoValue = document.getElementById("todo").value;
    let listitem = document.createElement("li");
    listitem.appendChild(document.createTextNode(toDoValue));
    document.getElementById("todoContainer").appendChild(listitem);
    
    //Color change
    function checkToDoItem() {
        listitem.classList.toggle("checkedItem");
    }
    listitem.addEventListener("click", toggleToDo);
    
    document.getElementById("todo").value = "";
    
    //Buttons!!!
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    listitem.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteListItem);

    //Delete items
    function deleteListItem() {
        listitem.remove();
    }
}

//Returns input length
function inputLength() {
    return document.getElementById("todo").value.length;
}


function addListItemAfterClick() {
    if (inputLength() > 0) {
        makeListItem();
    }
}

const list = document.getElementById("todoContainer")

function removeAll() {
    var childs = document.querySelector("ul"); //Selects the UL variable
    var killChild = childs.lastChild; //Checks children of this parent
    while (killChild) { 
     childs.removeChild(killChild); //removes child
     killChild = childs.lastChild; //Takes the new last one
     }
}

function removeLatest() {
    var childlist = document.querySelector("ul");
    var victim = childlist.lastChild;
    childlist.removeChild(victim);
    victim = childlist.lastChild;
}

function compliment() {
    let caseselect = Math.floor(Math.random() * 10)
    if (caseselect = 0) {
        caseselect = 1;
    } else if (caseselect > 5) {
        caseselect = 5;
    }
    switch(caseselect) {
        case 1:
            document.getElementById("complimentID").innerText = "You're awesome!";
            break;
            case 2:
                document.getElementById("complimentID").innerText = "You're amazing!";
                break;
                case 3:
                    document.getElementById("complimentID").innerText = "You're super!";
                    break;
                    case 4:
                        document.getElementById("complimentID").innerText = "You're incredible!";
                        break;
                        case 5:
                            document.getElementById("complimentID").innerText = "You're simply the best!";
                            break;
                            default:
                                document.getElementById("complimentID").innerText = "You're awesome!";
                                break;
    }

}
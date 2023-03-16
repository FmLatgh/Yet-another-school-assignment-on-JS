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


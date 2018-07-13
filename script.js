var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = "";
    var testButton = document.createElement("BUTTON");
    testButton.setAttribute("class", "dummyButtons");
    li.appendChild(testButton);
    testButton.textContent = "Delete";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function lineThrough() {
    document.querySelector("li").className = "lineThrough"
}



document.getElementById("parent-list").addEventListener("click", function (e) {

    var li = document.createElement("li");

    if (e.target && e.target.nodeName == "LI") {
        var element = e.target;
        element.classList.toggle("lineWord");
    }

    if (e.target && e.target.nodeName == "BUTTON"){ 
        console.log("Button Working");
        var node = e.target;
        e.target.closest('li').remove()
        // node.parentNode.parentNode.removeChild(node.parentNode)
    }
});



button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
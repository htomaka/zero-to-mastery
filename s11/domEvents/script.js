var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = ul.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(createButton('Delete'));
    ul.appendChild(li);
    input.value = "";
}

function createButton(text){
    var btn = document.createElement('button');
    var textNode = document.createTextNode(text);
    btn.appendChild(textNode);
    return btn;
}

function onSelect(e){
    var target = e.target;
    target.classList.toggle('done');
}

function onDelete(e){
    var el = e.target;
    var parent = el.parentNode;
    this.removeChild(parent);
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', onSelect);
ul.addEventListener('click', onDelete);

listItems.forEach(function(i){
    i.appendChild(createButton('delete'));
});



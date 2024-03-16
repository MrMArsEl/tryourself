var addcollection = document.getElementById("addcoll");

let b = 0;

var arri = [];
var arrt = [];

var arrayAsString = JSON.stringify(arri);
var arrayAsString = JSON.stringify(arrt);

window.onload = deleteLocalStorage;

function deleteLocalStorage() {
    localStorage.setItem("itemsi", "");
    localStorage.setItem("itemst", "");
}

function appendDiv(event) {
    var x = document.createElement("input");
    var y = document.createElement("input");
    var l = document.createElement("br");

    x.setAttribute('id', "inp" + event.toString());
    y.setAttribute('id', "trans" + event.toString());
    l.setAttribute('id', "b" + event.toString());

    addcollection.appendChild(l);
    addcollection.appendChild(x);
    addcollection.appendChild(y);
}

function addLocalStorage(inp, trans) {
    arri.push(inp);
    arrt.push(trans);

    arrayAsString = JSON.stringify(arri);
    localStorage.setItem("itemsi", arrayAsString);

    arrayAsString = JSON.stringify(arrt);
    localStorage.setItem("itemst", arrayAsString);
}

function add() {
    if (b == 0) { 
        appendDiv(b);
        ++b;
    }
    else {
        let inpElement = document.getElementById("inp" + (b-1));
        let transElement = document.getElementById("trans" + (b-1));

        if (inpElement.value != "" && transElement.value != "") {
            appendDiv(b);
            ++b;
        }
    }
}

function deleted() {
    for (let i = 0; i < b; i++) {
        let elementin = document.getElementById("inp" + i);
        let elementtr = document.getElementById("trans" + i);
        let elementb = document.getElementById("b" + i);
        if (elementin && elementtr && elementb) {
            if (elementin.value == "" && elementtr.value == "") {
                elementin.remove();
                elementtr.remove();
                elementb.remove();
                arri.splice(i, 1);
                arrt.splice(i, 1);
            }
            else {
                addLocalStorage(elementin.value,elementtr.value);
            }
        }
    }
    location.replace("test.html");
}

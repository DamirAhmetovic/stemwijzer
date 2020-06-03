var test = 0;
var Precentage = 0;
var o = 0;
var Choices = [];
var PartyChoices;
var Party;
var checkedValue;
var checkedName;


for (let u = 0; u < parties.length; u++) {
    var input = document.createElement("INPUT");
    var p = document.createElement("P");
    p.innerHTML = parties[u].name;
    input.setAttribute("type", "checkbox");
    document.getElementById("Party" + u).innerHTML = parties[u].name;
    console.log(input + u + " " + parties[u].name);
}

function EditText() {
    document.getElementById("Title").innerHTML = o + 1 + ". " + subjects[o].title;
    document.getElementById("Statement").innerHTML = subjects[o].statement;
}

function GetChosenParty() {
    var inputElements = document.getElementsByClassName('partyCheckbox');
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValue = inputElements[i].value;
            checkedName = inputElements[i].name;
            for (let a = 0; a < 30; a++) {
                console.log(a);
                for (let b = 0; b < subjects[a].parties.length; b++) {
                    if (subjects[a].parties[b].name == checkedValue) {
                        if (Choices[a] == subjects[a].parties[b].position) {
                            console.log(Choices[a] + ":" + subjects[a].parties[b].position)
                            test++
                        }
                    }
                }
            }
            Precentage = 100 / subjects.length * test;
            alert(Precentage + "% is het eens met " + checkedValue);
            Precentage = 0;
            test = 0;
        }
    }
}

function SaveChosenParty() {
    Party = [];
    var inputElements = document.getElementsByClassName('partyCheckbox');
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValue = inputElements[i].value;
            Party.push(checkedValue);
        }
    }
    console.log(Party);
    alert("test")
}

function NextStatement(choice) {
    if (o < 29) {
        o++
        Choices.push(choice);
        console.log(choice)
        EditText();
    }
    else {
        Choices.push(choice);
        name();
    }
}

function PreviousStatement() {
    o--
    Choices.pop();
    if (o >= 0) {
        EditText();
    }
    else {
        window.location.href = "index.html";
    }
}

function name() {
    console.log(Choices)
    Precentage = 100 / subjects.length * test;
    document.getElementById("testDiv").innerHTML = '';
    document.getElementById("PartyDiv").style.display = "block";
}
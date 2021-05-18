// Nickname Generator
"use strict";

// Variables for HTML elements
let outcontainerEl = document.getElementById("container");
let firstinputEl = document.getElementById("firstname");
let lastinputEl = document.getElementById("lastname");
let randomBtn = document.getElementById("randnickname");
let allBtn = document.getElementById("allnickname");

// Nickname Array
let nicknames = ["Wicked", "The Wizard", "The Guru", "The GOAT", "Beast", "Dangerous", "The Master", "The Genius", "Big Diesel", "The Freak", "The Mailman", "The Unstoppable", "The Captain"];

//Event Listeners
randomBtn.addEventListener("click", randnicknameHandler);
allBtn.addEventListener("click", allnicknameHandler);

//Display a Random Nickname
function randnicknameHandler() {
    let randNickname = randomElement(nicknames);
    console.log(randNickname);
    outcontainerEl.innerHTML = `<div>${firstinputEl.value}  "${randNickname}"  ${lastinputEl.value}</div>`;
}

//Display All Nicknames
function allnicknameHandler() {
    let outputStr = "";
    for (let i = 0; i < nicknames.length; i++) {
        console.log(nicknames[i]);
        outputStr += `<div>${firstinputEl.value}  "${nicknames[i]}"  ${lastinputEl.value}</div>`;
    }
    outcontainerEl.innerHTML = outputStr;
}
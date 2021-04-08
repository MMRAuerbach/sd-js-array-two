console.log("main.js file loaded");
/* Create a new empty array for ages */
let agesArray = new Array();

/* Create a new empty array for numbers */
let numbersArray = [];

/* Create a new filled array with names */
let namesArray = ["Springer", "Thong", "Van der Linden", "Auerbach"];

/* Get the elements you need */
const addNameButton = document.querySelector('.add_name_button');
const nameInput = document.querySelector('.name_input');
const addAgeButton = document.querySelector('.add_age_button');
const ageInput = document.querySelector('.age_input');
const addNumberButton = document.querySelector('.add_number_button');
const numberInput = document.querySelector('.number_input');


/* Always check if first needed element exists */
if (addNameButton) {
    addNameButton.addEventListener('click', addName);
}

/* function used in the eventlistner for the add name button */
function addName() {
    addName = nameInput.value;
    if (!addName) {
        alert('Please enter a name');
        return;
    }

    namesArray.push(addName);
    showArrayInformation(namesArray);
}




/* General function for showing information in a given array */
function showArrayInformation(theArray) {
    for (let i = 0; i < theArray.length; i++) {
        console.log(theArray[i]);
    }
}


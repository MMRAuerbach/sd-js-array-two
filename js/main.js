console.log("main.js file loaded");
/* Create a new empty array for ages */
const agesArray = new Array();

/* Create a new empty array for numbers */
const numbersArray = [];

/* Create a new filled array with names */
const namesArray = ["Springer", "Thong", "Van der Linden", "Auerbach"];

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
    const toAddName = nameInput.value;
    if (!toAddName) {
        alert('Please enter a name');
        return;
    }

    namesArray.push(toAddName);
    showArrayInformation(namesArray);
}

/* General function for showing information in a given array */
function showArrayInformation(theArray) {
    for (let i = 0; i < theArray.length; i++) {
        console.log(theArray[i]);
    }
}


/* Create a general function for calculating the average of numbers from a given Array */

/* Create a general function for calculating the total of numbers from a given Array */



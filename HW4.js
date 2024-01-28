// JavaScript source code
// define a Constructor function
var Food = function (fName, fCalories) {
    this.fName = fName;
    this.fCalories = parseInt(fCalories);
};

foodArray = []; // define an array to hold Food objects

// pr-load array with 2 objects
let newFood1 = new Food("Banana", 165);
foodArray.push(newFood1);

let newFood2 = new Food("Apple", 200);
foodArray.push(newFood2);

document.addEventListener("DOMContentLoaded", function (event) {
    updateTotalCalories(); //when button is pressed, these pre-loaded objects will be updated into the array
});

// Function to update total calories
function updateTotalCalories() {
    const totalCaloriesElement = document.getElementById('totalCalories');
    let totalCalories = 0;

    foodArray.forEach(food => {
        totalCalories += food.fCalories;
    });

    totalCaloriesElement.textContent = totalCalories;
}

// define what should happen when the form is submitted
function formSubmitEvent() {
    let foodName = document.getElementById("foodName").value;
    let calories = document.getElementById("calories").value;

    if (foodName.trim() !== '' && !isNaN(calories) && parseInt(calories) > 0) {
        foodArray.push(new Food(foodName, calories));
        console.log(foodArray); // write array into console
        updateTotalCalories();
        // clear text boxes
        document.getElementById("foodName").value = "";
        document.getElementById("calories").value = "";
    } else {
        alert('Please enter a food name and calorie amount.'); //displays message to enter food name and calorie amt
    }
}

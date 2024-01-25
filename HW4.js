// code the runs immediately when page is first loaded

// define a Constructor function
var Food = function(fName, fCalories) {
    this.name = fName;
    this.city = fCalories;
};

FoodArray = []; // define an array to hold Food objects

// pr-load array with 2 objects
let newFood1 = new Food("Banana",  165);
FoodArray.push(newFood1);

let newFood2 = new Food("Apple",  200);
FoodArray.push(newFood2);


document.addEventListener("DOMContentLoaded", function (event) {

// define what should happend when the "show one" button is clicked

        document.getElementById("output").value = message;  // write out the data
    
});

// define what should happen when the form is submitted
function formSubmitEvent() {
    let tname = document.getElementById("foodname").value;
    let tcalories = document.getElementById("calories").value;

    CustomerArray.push( new Customer(tname, tcalories))
    // clear text boxes
    document.getElementById("foodname").value = "";
    document.getElementById("calories").value = "";
}



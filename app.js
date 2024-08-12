


// function schema 
//making functions saves blocks of code to be ran when we need it
//INSTEAD of immediently running as the page loads 

function funcOne() {
    console.log("Hello World");
    console.log(5+7);
};

//This is how we call function code blocks to run
//ex. funcName();
funcOne();

let numOne = 7 
let numTwo = 3


//Scope: whether it's GLOBAL, BLOCK, FUNCTION SCOPE (Local scope)
function addTwoNums(){
    console.log(numOne + numTwo);
}


addTwoNums();

//This function is currenlty accepting two arguments (args) its like storage
function addTwoNumsVS(a , b) {
    console.log(a + b);
}

//We are sending data inside the arguments spots in functions (bookshelf)
addTwoNumsVS(numOne, numTwo);
addTwoNumsVS(6, 10);
addTwoNumsVS("Hello", "Zach!")

function greeting(){
    console.log("HI")
}
greeting();

function greetingByname(name){
    console.log("Hello, " + name + "! Welcome to the site.");
}

//don't need it? Just delete it. 
//return statement sends data back
greetingByname("Dayna");


function greetingByExcitment(name){
    let upperCaseName = name.toUpperCase();
    console.log(upperCaseName);

    return upperCaseName
}

//If you ever needa  funciton to send back new data, you'll need a return
let screamingName = greetingByExcitment("zach");

//upperCaseName
//console.log(upperCaseName);
console.log (`HELLOOOO ${screamingName} IT'S NORTHERN LIGHT SUPLEX SINGER!!`)

//THIS FUNCTION SHOWS DEFAULT VALUES BEING ADDED IN THE ARUGMENTS 
function sandwichMaker(typeOfBread, typeOfMeat = "N/A", typeOfSauce, typeOfVeggie = "N/A")
{ 
    console.log(
        `Bread: ${typeOfBread} Meat: ${typeOfMeat} Sauce: ${typeOfSauce} Veggies: ${typeOfVeggie}`
                )
}

let zachSandwich =sandwichMaker("white", "ham" , "mayo" , "lettuce")
let margaritoSandwich = sandwichMaker("white", "rotierry chicken", "buffalo")

//Saves code. You don't want all code to run all the time. Exp future coin rollling where you need a coinds before you can use the wrapper. 

//!  QUIZ 8/12/2024
 
//! Grade Calculator (1)
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.
 
//TODO Define an Array: Define an array containing a list of grades.
//TODO Create a Function: Create a function to calculate the average of the grades.
//TODO Create Another Function: Create another function to determine the letter grade based on the average.
//TODO Use if-else Statements: Use if-else statements inside the function to determine the letter grade.
//* Output Results: Use console.log to display the average grade and the corresponding letter grade.
 
grades_arr = ["A" , "B" , "C" , "D" , "E"]

function AverageGradeCalc(grades){
    let total = 0
    for (let i = 0; grades.length; i++) {
        total += grade[i];
    }
    return total / grades.length;
}
 
//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
 
//TODO Define Variables: Start with a balance variable.
//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.
//TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.
//* Output Results: Use console.log to display the updated balance after each operation.
 
 
//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.
 
//TODO Define an Array: Define an array to store the tasks.
//TODO Create Functions: Create functions to add a task and display the to-do list.
//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.
//* Output Results: Use console.log to display the to-do list after each operation.
 
//! BONUS: Be able to remove a task o.o
 
 
 
//! Temperature Converter
//? Create a program that converts temperatures between Celsius, Fahrenheit, and Kelvin.
 
//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.
//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.
//? (Hint: There will be two arguements temperature value and unit letter (Celsius, Farenheit, Kelvin))
//? ex. If I provide 25 and "C" I want the Kelvin and Farenheit temperature
 
//* KelvinToCelsius conversion:
//* kelvinNum - 273.15
 
//* celsiusToKelvin:
//* celsiusNum + 273.15
 
//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9
 
//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32
 
 
//TODO  Use if-else Statements: Use if-else statements to determine which conversion to perform based on the user's input.
//* Output Results: Use console.log to display the converted temperature.
 
 



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
 /*
grades_arr = ["A" , "B" , "C" , "D" , "E"]

function AverageGradeCalc(grades_arr){
    let total = 0
    for (let i = 0; grades.length; i++) {
        total += grade[i];
    }
    return total / grades.length;
}
 /*
//! Bank Account Manager (2)
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
 
//TODO Define Variables: Start with a balance variable.
//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.
//TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.
//* Output Results: Use console.log to display the updated balance after each operation.
 
let balance = 0 

function banking(depositing, withdrawing, balnance_checking)
{
    if()
}

/*
function sandwichMaker(typeOfBread, typeOfMeat = "N/A", typeOfSauce, typeOfVeggie = "N/A")
{ 
    console.log(
        `Bread: ${typeOfBread} Meat: ${typeOfMeat} Sauce: ${typeOfSauce} Veggies: ${typeOfVeggie}`
                )
}

let zachSandwich =sandwichMaker("white", "ham" , "mayo" , "lettuce")
let margaritoSandwich = sandwichMaker("white", "rotierry chicken", "buffalo")
*/


//! Simple To-Do List (3)
//? Create a program that allows the user to add and display tasks in a to-do list.
 
//TODO Define an Array: Define an array to store the tasks.
//TODO Create Functions: Create functions to add a task and display the to-do list.
//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.
//* Output Results: Use console.log to display the to-do list after each operation.
 
//! BONUS: Be able to remove a task o.o
 
simple_list = [ "wash clothes" , "cook dinner" , "feed dog" , "code"] 

function to_do_list( task1 , task2 , task3, task4) 
{
    console.log(`TaskOne: ${task1} TaskTwo : ${task2} TaskThree : ${task3} TaskFour : ${task4}`)
}

let mylist = to_do_list(simple_list[0], simple_list[1] , simple_list[2], simple_list[3])




//! Temperature Converter (4)
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
 
/*
function TempConvet ( celsius , Farenheit, kalvin)
*/

//INSTRUCTION 

//! Grade Calculator 
//? Create a program that calculates the average grade from an array of grades and determines teh corresponding letter grade.

//TODO Define an Array : Define an array containing a list of 5 grades 
let grades = [85, 34, 56, 87, 90];
let gradeTwo = [82, 56, 31, 78, 61];

//TODO Create a Function: Create a funtion to calulate the average of the grades.
//? calulates the average grade from an array of grade

function calcaverage (gradesArr){
    let average = 0;
    for (let i = 0; i < grades.length; i++) { 
        average += gradeArr[i]

    }
    average += average / gradesArr.length;
    console.log(average)
}

calcaverage(gradeTwo)


//TODO Create Another Function : Create another funiton to determine the letter greade based on teh average. 

function letterGrade(gradeNum) {
    if (gradeNum > 100){
        console.log(`$(gradeNum) can't exist and recieve no letter`)
    } else if (gradeNum > 90) {
        console.log(`$(gradeNum) has a A average!`)
    } else if (gradeNum >= 80){
        console.log(`$(grandNum) has a B average!`)
    }else if (gradeNum >= 70){
        console.log(`$(grandNum) has a C average!`)
    } else if (gradeNum >= 60){
        console.log(`$(grandNum) has a D average!`)
    } else (gradeNum >= 50) ;{
        console.log(`$(grandNum) has a F average!`)
    }
}



//! Simple To-Do List 
//? Create a program that allows the usewr to add and display tasks in a to-do list. 

//TODO Define an Array: Deifine an array to store the tasks. 
let taskToDo = [];
//TODO Create Functions: Create functions to add a task and display the to-do list.

function addATask(additionalTask){
    //how do i add an item to the array?
    taskToDo.push(additionalTask); 
    console.log(taskToDo);
}

function displayToDoList(){
    console.log(taskToDo);
}

function removeAnItem(taskCompleted) {
    //I need to remove a specific item. 
    //If else statement?
    // if (taskCompleted == "Make bed"){
    //    console.log("It's here!")
    // }
    let upperCaseTaskCompleted = taskCompleted.toUpperCase
    console.log(upperCaseTaskCompleted)

    for (let i = 0; i< taskToDo; i++) {
        console.log(taskToDo[i]. toUpperCase());
        if (upperCaseTaskCompleted == currentTaskItem) {
            taskToDo.splice(i, 1);
            console.log(taskToDo);
        }
    }
}

addATask("Make bed")
addATask("Code some")
addATask("Make food!")
removeAnItem("make bed");
removeAnItem("make food!")


//? Create a progam that converts tempatrues between Celsius, Fahrenheit, and Kkelvin. 
//TODO Define Variables: Allow the user to input a temparture value and the unit they want to convet from. 

let tempNum = 25;
let tempUnitLetter = "C" ; 





//QUIZ 8/13/2024

//! Music Playlist Manager (1) 
//? Create a program that alllows the user to manage a playlist of songs. 

//TODO Define an Array: Define an array to store the song titles. 
//TODO Create Functions: Create functions to add a song, remove a song, and display the playlist. 
//TODO Use if - else statments and Loops: Use if - else statments and loops within the funcitons to handle the operatiosn. 
//* Output Results: Use console.log to display the playlist after each operation. 

let chill_jamz = []

function sick_beats (WhatsNew, WhatsCut, WhatsPlaying) {
    for ( let i = 0; i < chill_jamz.length; i++) {
        if (chill_jamz == WhatsNew) {
            console.log("Play that Sick Beat! " + "Up Next: " + WhatsNew )
        } else if ( chill_jamz == WhatsCut) {
            console.log("Ew. Who got the mic?" + "No Longer Playing : " + WhatsCut)
        } else (chill_jamz == WhatsPlaying); {
            console.log("Wait. Whats on now?" + "Now Playing : " + WhatsPlaying)
        }
    }
}

WhatsNew.push("Barbie World")
WhatsCut.pop("The Song That Never Ends")
WhatsPlaying ("I'm a Gummy Bear")



//! Daily Tempatures (2)
//? Create a program that processes daily tempature readings, calucaltes the average tempature, and identifyes the hihgest and lowerst tempatures. 
//TODO Predefine an Array of Tempatures: Start with an array of numbers representing daily temperatrures. 
let tempatures = [72 , 75 , 79 , 83 , 78 , 85 , 90] ; 
//TODO Calculate the Average Tempature: Write a function to calculate the average of the tempatures. 
//TODO Find the Highest Tempature: Write a function to find the highest tempature in the array 
//TODO Find the Lowest Tempature: Write a function to find the lowest tempature in the array. 


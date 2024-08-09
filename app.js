


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
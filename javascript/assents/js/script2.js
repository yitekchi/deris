'use strict';

///////////////////
// let hasDriverLicense = true;
// const passTest = true;

// if (passTest) hasDriverLicense = true
// if (hasDriverLicense) console.log('i can drice :D')  


//  x = 3.14;    // This will not cause an error.
//  myFunction();
 
//  function myFunction() {
 
//    y = 3.14;  // This will cause an error (y is not defined).
//  }

// Functions
var my = 'Abdusami';
function logger(){
    console.log( 'My name is Elyar',my)
}

// calling /running /invoking function

logger(my);
function fruiProcessor(apples , oranges){
    const juice = `Juice with ${apples} apples and ${oranges}oranges `;
    return juice
}

const appleJuice = fruiProcessor(5,0);
console.log(appleJuice);
const appleOrangeJuice = fruiProcessor(2,3);
console.log(appleOrangeJuice);

const num = Number('23')
/////////////////////////////////

// Function Declarations VS Expressions

// Function Declarations 
const d = new Date();
let year = d.getFullYear();
function calcAge1(brithYear){
    return year - brithYear;
}

const age1 = calcAge1(1919);
console.log(age1)
function calculator(a,b){
    return a*b;
}
const age2 = calculator(2,10);
//console.log(age2)
// Function Expressions 
const calcAge3 = function(brithYear){
    return 2030 - brithYear 
}
const age3 = calcAge3(1995)
console.log(age1,age2,age3)

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
// var my = 'Abdusami';
// function logger(){
//     console.log( 'My name is Elyar',my)
// }

// calling /running /invoking function

// logger(my);
// function fruiProcessor(apples , oranges){
//     const juice = `Juice with ${apples} apples and ${oranges}oranges `;
//     return juice
// }

// const appleJuice = fruiProcessor(5,0);
// console.log(appleJuice);
// const appleOrangeJuice = fruiProcessor(2,3);
// console.log(appleOrangeJuice);

// const num = Number('23')
/////////////////////////////////

// Function Declarations VS Expressions

// Function Declarations 
// const d = new Date();
// let year = d.getFullYear();
// function calcAge1(brithYear){
//     return year - brithYear;
// }

// const age1 = calcAge1(1919);
// console.log(age1)
// function calculator(a,b){
//     return a*b;
// }
// const age2 = calculator(2,10);
//console.log(age2)
// Function Expressions 
// const calcAge3 = function(brithYear){
//     return 2030 - brithYear 
// }
// const age3 = calcAge3(1995)
// console.log(age1,age2,age3)

// Arrow Function

// const calAge3 = brithYear => 2023 - brithYear;
// const age3 = calAge3(1990);
// console.log(age3);

// const yearsUnitilRetirement = (brithYear ,firstName) =>{
//     const age = 2023 - brithYear;
//     const retirement = 65 -age;
//     //return retirement
//     return `${firstName} retires in ${retirement} year`;
// }

// console.log (yearsUnitilRetirement(1990,'Amine'));
// console.log(yearsUnitilRetirement(1980,'Alim'));

///////////////////////////////////

// Function Calling Other Function
// function cutFruitpieces(fruit){
//     return fruit*4
// }
//console.log(cutFruitpieces(10))

// function fruitProcessor(apples ,Oranges){
//     const applePieces = cutFruitpieces(apples);
//     const orangePieces = cutFruitpieces(Oranges);
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces}pieces of orange`;
//     return juice;
// }
// console.log(fruitProcessor(5,10));
///////////////////////////////////////

// Reviewing Function

// const calAge = function (brithYear){
//     return 2037 - brithYear
// }

// const yearsUnitilRetirement = function(brithYear,firstName){
//     const age = calAge(brithYear);
//     const retirement = 65-age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   }else {
//     console.log(`${firstName} has already retired`);
//     return -1
//   }
// }

// console.log(yearsUnitilRetirement(1991,'Erkin'));
// console.log(yearsUnitilRetirement(1950,'Muhammed'));

// Introduction to arrays

//  bir maxina var bar .  bu var..  bmw ,audi , toyota 

// const friend1 = 'aygul';
// const friend2 = 'aysa';
// const friend3 = 'alim';
// const friends = ["aygul","aysa","alim"];
// console.log(friends);

// const y = new Array(1990,1890,1999,2008,2020);

// console.log(friends[0]);
// console.log(friends[2])
// console.log(friends[friends.length - 1]);

// friends[2] = 'kasim';

//console.log(friends);

// const firstName = ' rozi';

// const Amine = [firstName ,'teacher', 2323 - 1999 , 'Job' ,friends];

// console.log(Amine);
// console.log(Amine.length);
// Exercise

// const calAge = function(brithYear){
//     return 2040 -brithYear;
// }
// const years = [1990,1890,1999,2008,2020];

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length - 1]);
// console.log(age1,age2,age3)
// const ages = [calAge(years[0]),calAge(years[1]),calAge(years[years.length - 1])];
// console.log(ages);

//////////////////////////// 

// Basic Array  Operation (Methods)

// const friends = ["Abeydul",'muhammad','nuzugum','Amine'];

// Add elements

// const newLengh = friends.push("abletjan");
// console.log(friends)
// console.log(newLengh)

// friends.unshift('ayishe');

// console.log(friends);

// Remove elements

// friends.pop();//last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);
// console.log(friends.indexOf('nuzugum'))
// console.log(friends.indexOf('ayishe'));

// if (friends.includes("nuzugum")) {
//     console.log('you have a friend called nuzgum');
    
// }else{
//     console.log('you have dont  have nuzgums');
// }

////////////////////////////// 

//Codeing Challenge 1

// const bill =430;
// const tip = bill <= 300 && bill>=50 ? bill*0.15:bill*0.2;
// console.log(`The bill was ${bill},the tip was ${tip},and the total value ${bill+tip} `);
//Codeing Challenge 2

// const calcAverage = (a,b,c)=>(a+b+c)/3;
// console.log(calcAverage(3,4,5));

//Test 1
// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function(avgDolphins,avgKoalas){
//     if(avgDolphins>=2*avgKoalas){
//       console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`)
//     }else if(avgKoalas>=2*avgDolphins){
//         console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`)
//     }else{
//         console.log('No team wins.....')
//     }
// }
// checkWinner(scoreDolphins,scoreKoalas)
// checkWinner(580,289);
//Test 2

// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas =  calcAverage(23,34,27);
// console.log(scoreDolphins,scoreKoalas)

// checkWinner(scoreDolphins,scoreKoalas)

// Coding Callenge 3

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill*0.15:bill*0.2

// }
//const calcTip =bill =>bill >=50 && bill<=300 ?bill*0.15:bill*0.2;
// const bills = [125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
// console.log(bills ,tips,totals)
// Coding Callenge 4
// const calc12And5 = Calculator(12,5);
// calc12And5.sum(); //17
// calc12And5.difference(); // 7
// calc12And5.product();  //60
// calc12And5.dividend(); // 2

// Introduction Objects

//  const array = ['toyota','audi','bmw'];
//  const object = {toyota:'camrery',audi:'A4',bmw:'X5'};


 

// console.log(alshir.fristname);
//  console.log(alshir['lastname']);

// const nameKey = 'name';
// console.log(alshir['frist'+nameKey]);
// console.log(alshir['last'+nameKey]);
//console.log(alshir.'last'+nameKey);

// const interstedin = prompt('what do you want to know about alshir? choose between fristname,lastName ,age')

// if (alshir[interstedin]) {
//     console.log(alshir[interstedin])
// }else{
//     console.log("wrong requst ! choose between firstname ,lastname")
// }
// alshir.location = 'Kashigher';
// alshir["yurti"] = '@upal'
// console.log(alshir);
// Object Method

// const alshir = {
//     fristname : 'alshir',
//     lastname: 'newayi',
//     supet:['buyuk','yituk','meshur'],
//     hasWrotebook:true,
//     brithYear:1450,
    // calcAge:function(){
    //    return 2023 - brithYear;
    // }
    // calcAge:function(){
    //     //console.log(this,'bu bima')
    //    return 2023 - this.brithYear;
    // },
//     calcAge:function(){
//         this.age= 2023 -this.brithYear;
//         return this.age;
//     },
//     getSummary:function(){
//         return `${this.fristname}is a ${this.calcAge()}-year old ${alshir.supet},and he has Wrote ${this.hasWrotebook?'perhat&shirin':'no'} `
//     }
// };

// console.log(alshir.calcAge());
//   console.log(alshir.age)
// console.log(alshir.getSummary())


/////////////////////////////

// letration : The for loop 

// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')
// console.log('6')
// console.log('7')
// console.log('8')
// const alshirArray =[
//     'alshir',
//     'newayi',
//     2023 - 1420,
//     'alim',
//     ['buyuk','yituk','meshur']
// ];
///////////////////////////
//Dot .Vs. Braket Nation
// for loop keeps running while condition is TRUE

// for (let index = 0; index < alshirArray.length; index++) {
//     const element = alshirArray[index];
//     console.log(element);
// }

// Looping Arrays,Breaking and Continuing
// for (let index = 0; index < 80; index++) {
//     console.log(`Lifting weights repetition ${index}`)
    
// }

const joans =[
    'Joans',
    'Adams',
    2023-1997,
    'teacher',
    'Micheal','Peter','Steven',
    true
    
];

// console.log(joans[0])
// console.log(joans[1])
const types =[];
for(let i = 0; i < joans.length ; i++){
    // Reading from joans exist
    //console.log(joans[i], typeof joans[i]);
    //Filling types array 
    //types[i] = typeof joans[i]
   types.push(typeof joans[i])
}
//console.log(types)

const Brithyears = [1933, 1944,2009,2017];
const ages =[];

for (let index = 0; index < Brithyears.length; index++) {
    ages.push(2023 - Brithyears[index]);
    
}
//console.log(ages)

//Break and Continue

// console.log('---ONLY String ---');
// for (let index = 0; index < joans.length; index++) {
//     if(typeof joans[index] !== 'string') continue
//     console.log(joans[index],typeof joans[index])
// }
// console.log('--- BREAK WITH NUMBER---');
// for (let index = 0; index < joans.length; index++) {
//     if(typeof joans[index]=== 'number') break
//     console.log(joans[index],typeof joans[index])
// }

// looping Backwards and loops
// for (let index = 0; index < joans.length; index++) {
//     console.log(index ,joans[index]);
   
    
// }
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`---------- starting exercise ${exercise}...... `)
//     for(let rep = 1; rep< 6; rep++){
//         console.log(`Exercise ${exercise} : Liffting weight repetition ${rep} `)
    
//     }
// }
// The while Loop 
for(let rep = 1; rep< 6; rep++){
    //console.log(`Exercise ${rep} : Liffting weight repetition ${rep} `)

}
let rep = 1;
while(rep<=10){
    //console.log(`  Liffting weight repetition ${rep} `)
    rep++
}



while(dice!== 6){
    //console.log(`you rolled a ${dice}`);
    let dice =Math.trunc(Math.random()*6)+1
   
}

//////////////////////////////////////////
// Coding Challenge 5
/*
 Let's improve Alim's tip Calculator even more , this using loop !

 1 Create an array `bill` containing all 100 test bill values
2. create empty arrays for the tip and the totals ("tips"and "totals")
 3. use the 'calcTip' function we wrote before (no need to repeat to calculate tips and
 total) values(bill +tip) for evry bill value in the bills array .Use a for loop to
 perform the 10 calculatition!

Test DATA : 22 ,300,175,454,656,983,498,544,12 and 52
 Hint : Call CalcTip in the loop and use the push method to add values
 to the tips and totals array.
 
 4 . BONUS : Write a function `calcAverage` which takes and array called 'arr' as 

 an aegument . this function calculates the average of all numbers in the given array.this
 is a DIFFICULT Challenge voor Jullie!!

 4.1  Frist , you will need to add up all values in the array . To do the addtition , 
 start by creating a variable 'sum' that starts at 0 . 
 then loop over the array using a for loop. in each iteration.
 add the current value to 'sum' variable  . 
  This way  by the end of the loop ,
  you have all values added together.

  4.2 To calculate the average . divide the sum you calculated befoer by the
  length of the array (because that's the number of elements)

  4.3 call the function with the 'total' array

 */
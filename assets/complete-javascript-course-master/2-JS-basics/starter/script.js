/*****************************
Variables and data types
*/

/*
var firstName = 'John';
  console.log(firstName);

var lastName = 'Smith';
var age = 28;


var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/*****************************
Variables mutation and type coercion
*/


//type coercion

/*
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*****************************
Basic Operators
*/

/*
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'text');
*/

/*****************************
Operator precendence
*/

/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

//2020 - 1989 is greater than or equal to 18 years of age; see Javscript operator precendence table
//multiple operating
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
//parentheses have highest precendence
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Mutliple assignments, assignments work from right to left
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10; x = x + 10;
console.log(x);
x+=1;
x--;
console.log(x);
*/

/*****************************
CODING CHALLENGE 1
*/

/*
// BMI mass / heightˆ2 = mass / ( height * height)
var markMass, johnMass, markHeight, johnHeight, markHealth, johnHealth, lowerBMI, finalAnswer;
markMass = 90; //kg
markHeight = 2; //meters
markHealth = markMass / (markHeight * markHeight);
console.log(markHealth);
//mark's BMI is 22.5

johnMass = 80; //kg
johnHeight = 1.8; //meters
johnHealth = johnMass / (johnHeight * johnHeight);
console.log(johnHealth);
//John's BMI is 24.69


lowerBMI = johnHealth >= markHealth;
console.log(lowerBMI);
//returned true because Mark's BMI is lower than John's

console.log(' Is John\'s BMI higher than Mark\'s ' + lowerBMI);
*/


/*****************************
If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

//is John single or married
if (civilStatus === 'married') {
  console.log(firstName + ' is married! ');
} else {
  console.log(firstName + ' will hopefully marry soon ');
}

//with boolean
var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married! ');
} else {
  console.log(firstName + ' will hopefully marry soon ');
}

//with BMI example
var markMass, johnMass, markHeight, johnHeight, markHealth, johnHealth, lowerBMI, finalAnswer;
markMass = 90; //kg
markHeight = 2; //meters
markHealth = markMass / (markHeight * markHeight);
console.log(markHealth);
//mark's BMI is 22.5

johnMass = 80; //kg
johnHeight = 1.8; //meters
johnHealth = johnMass / (johnHeight * johnHeight);
console.log(johnHealth);
//John's BMI is 24.69

if (johnHealth > markHealth) {
  console.log('Mark\'s BMI is lower than John\'s');
}else {
  console.log('John\'s BMI is lower than Mark\'s');
}
*/

/*****************************
Boolean Logic
*/
/*
var firstName = 'John';
var age = 21;

if (age < 13) {
  console.log(firstName + ' is a boy. ');
} else if ( age >= 13 && age < 20) { //between 13 and 20 // && is and operator, \\ is or operator
    console.log(firstName + ' is a teenager. ');
} else if (age >= 20 && age < 30) {
      console.log(firstName + ' is a young man. ');
} else {
  console.log(firstName + ' is a man.');
}
*/



/*****************************
Ternary Operator and Switch Statements
*/

/*
//going with drinking age in europe, which is 18
var firstName = 'John';
var age = 20;

//condition, if and else blocks. If John is 18, if he drinks beer. If he is younger than 18, he drinks juice.
age >= 18 ? console.log(firstName + ' drinks beer. ')
: console.log(firstName + ' drinks juice. ');

//this operator is a Ternary operator
//saying if the variable drink  is greater than or equal to 18, the answer is beer. Otherwise it's juice
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//is the same as this if/else statement
if (age >= 18) {
  var drink = ' beer ';
} else {
  var drink = ' juice ';
}

//Switch statement
var job = 'cop';
switch(job) {

  case 'teacher':
  console.log(firstName + ' teaches kids how to code. ');
  break;

  case 'driver':
  console.log(firstName + ' drives an uber in Lisbon. ');
  break;

  case 'designer':
  console.log(firstName + ' designs beautiful websites. ');
  break;

  default:
  console.log(firstName + ' does something else. ');

}

//another switch statement - just like an if/else statement, another way to write it
var age = 35;
switch(true) {
  case age < 13:
  console.log(firstName + ' is a boy. ');
  break;

  case age >= 13 && age < 20:
  console.log(firstName + ' is a teenager. ');
  break;

  case age >= 20 && age < 30:
  console.log(firstName + ' is a young man. ');
  break;

  default:
  console.log(firstName + ' is a man. ');
}
*/


/*****************************
Truthy and Falsy values and equality operators
*/

//falsy values: undefined, null, 0. '', NaN
//truthy values: NOT falsy

var height;
height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable is undefined');
}

//Equality operators
/*
=== is strict equal sign. 2 = 2
== does type coercion, meaning 2 = '2' (it interprets the value)
try to use === in most cases
*/


var johnAverage, johnScore1, johnScore2, johnScore3, mikeAverage, mikeScore1, mikeScore2, mikeScore3, maryAverage, maryScore1, maryScore2, maryScore3;

johnScore1 = 89
johnScore2 = 1000
johnScore3 = 103
var johnTotal = (johnScore1 + johnScore2 + johnScore3)

mikeScore1 = 116
mikeScore2 = 94
mikeScore3 = 123
var mikeTotal = (mikeScore1 + mikeScore2 + mikeScore3)

maryScore1 = 10
maryScore2 = 12
maryScore3 = 13
var maryTotal = (maryScore1 + maryScore2 + maryScore3)

johnAverage =  johnTotal / 3;
console.log(johnAverage);

mikeAverage = mikeTotal / 3;
console.log(mikeAverage);

maryAverage = maryTotal / 3;
console.log(maryAverage);


if (johnAverage >= mikeAverage && johnAverage >= maryAverage) {
  console.log(' Johns team in the winner with an average of ' + johnAverage);

} else if (mikeAverage >= johnAverage && mikeAverage >= maryAverage) {
  console.log(' Mikes team in the winner with an average of ' + mikeAverage);

} else {
  console.log(' Marys team in the winner with an average of ' + maryAverage);
}

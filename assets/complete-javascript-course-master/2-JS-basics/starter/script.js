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

/*****************************
Boolean Logic
*/

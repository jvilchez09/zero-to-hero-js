/*
* Variables and data types
*/
/*
var firstName = 'John';
console.log (firstName);


var lastName = 'Smith';
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
*/


/*
* Variables mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

//type coercion
console.log (firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('what is his last name?')
console.log(firstName +  ' ' +lastName);
*/

/*
* Basic operators
*/
/*
var year, yearJohn, yearMark;
var now = 2018;
ageJohn = 28;
ageMark = 33;


//Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn)

console.log(now + 2)
console.log(now * 2)
console.log(now / 10)

//Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//type of operator
console.log(typeof johnOlder)
console.log(typeof ageJohn)
console.log(typeof 'Marck is older than john')
var x;
console.log(typeof x)
*/

/*
* Operators precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
var x, y;
x = y = (3 + 5) * 4 -6; // 8*4-6 // 32-6 //26
console.log(x, y);

//More operators


x *= 2;
console.log(x);

x +=10;
console.log(x)

x++;
console.log(x)

x--;
console.log(x)

*/

/*
* The ternary Operator and switch
*/

/*
//Ternary Operator
var firstName = 'John';
var age = 14;

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
//Switch statement
var job = 'teacher';

switch (job) {
    case 'teacher' :
    case 'instructor':
        console.log(firstName + ' teaches kids to code');
        break;
    case 'driver':
        console.log(firstName + ' uber');
        break;
    default:
        console.log(firstName + ' does something else');
}
*/
/*
* Truthy and falsy
*/

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values
/*
var height;

height = 0;
if (height || height === 0) {
    console.log('defined');
} else {
    console.log('NOT defined');
}


//equality operators
if (height == '23') {
    console.log('The == does type coercion and convert types to match if they do');
} 
// === is strictly equal (including type)

*/


/*
* Functions Statements and Expressions
*/
//Function declaration
/*
function whatDoYouDo(job, firstName) {}

//Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher' :
    case 'instructor':
        return firstName + ' teaches kids to code';
    case 'driver':
        return firstName + ' uber';
    default:
        return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('driver', 'john'));
 */

 /*
* Objects and Methods
*/
/*
var john = {
    firstName: 'Jonh',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
       this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john)
*/


/*
var john = {
    name: "John",
    lastName: "Smith",
    mass: 60,
    height: 170,
    calcBmi: function (){
        this.bmi = this.mass / (this.height * this.height)
    }
}

var mark = {
    name: "Mark",
    lastName: "Smith",
    mass: 70,
    height: 169,
    calcBmi: function (){
        this.bmi = this.mass / (this.height * this.height)
    }
}

function showDetails() {
    john.calcBmi();
    mark.calcBmi();
    console.log(mark);

    if (john.bmi > mark.bmi) {
        console.log( john.name + ' ' + john.lastName + ' has a BMI of ' + john.bmi + ' bigger than ' +  mark.name + ' ' + mark.lastName + ' ' + mark.bmi)
    } else {
        console.log( mark.name + ' ' + mark.lastName + ' has a BMI of ' + mark.bmi + ' bigger than ' +  john.name + ' ' + john.lastName + ' ' + john.bmi)
    }
}

showDetails();

*/


 /*
* loops and iterations
*/
/*
for (var i= 0; i < 10; i++){
    console.log(i)
}

console.log(typeof nothing)
*/


/**
 * let, conts and var
 */
/*
 let age = 30;
 age = 31; //mutate = change value of var

 const birthYear = 1991; // variables que no puedem cambiar
*/

/**
 * 
 * basic operators
 */
/*
const now = 2021;
const ageJose = now - 1990;


console.log (ageJose * 2, ageJose / 10, 2 ** 3)
*/
// 2**3 significa 2 elvado a la 3 = 2*2*2


/**
 * 
 * Checkpoint = vid 15 Operator precedence
 */


 /**
  * Strings and template literals
  */
/*
 const firstName = 'Jose';

const job = 'Dev';

const birthYear = 1990;

const year = 2037;

const jose = "I'm " + firstName + ' , a ' + (year - birthYear) + ' years old ' + job + ' !';

console.log(jose);

const joseNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(joseNew)

*/

/*
const age = 15;
//if/else controlled structure
if (age>=18) {
    console.log('Sarah can start driving 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young wait ${yearsLeft} years 😜`);
}

*/

/**
 * Type conversion and type coercion
 */
//type conversion
/*
 console.log(String(23))

//  type coercion
 let n = '1' + 1; //11 string
 n = n - 1; //10 numero
 console.log(n); // 10
*/

/**
 * Truthy and falsy values
 */
 /*
 const money = 0;

 if (money) {
     console.log('Dont spend it all');
 } else {
     console.log('get a job');
 }*/
/*
const favourite = Number(prompt("Whats your fav numb?"));

if (favourite === 23) {
    console.log('cool 23 is amazing');

} else if (favourite === 7){
    console.log('cool 7 is ok');    
} else {
    console.log('not 7 or 23, not cool');
}

*/

/**
 * Logical Operators
 */
/*
const hasDriverLicense = true;
const hasGoodVision = false;

if (hasDriverLicense && hasGoodVision){
    console.log('she can drive');
}
*/
/**
 * the switch statement
 */
/*
switch (day) {
    case 'monday':
        console.log('a trabajars');        
        break;
    case 'tuesday':
    case 'wednesday':
        console.log('mariokart tour');
    default:
        break;
}
*/

/**
 * statements and expression
 */
/*
//expressions
 2+2 ;
 const name = 'jose';

//  statements
if (condition) {
    
} else {
    
}
*/



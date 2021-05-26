'use strict';

/**Starting */

/**Checkpoint #93 */
/*
function calcAge (birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            const firstName = "Esteban";
            var millennial = true;
            const str = `Oh, and you are a millennial, ${firstName}`;
            console.log(str);
        }
        // console.log(str); //block scope 
        console.log(millennial); //function scope
        console.log(firstName);
    }
    printAge();
    return age;
}

const firstName = "Jose";
calcAge(1991);

*/
/**
 * Hoisting
 */
//variables
/*
 console.log(me);
 console.log(job);
 console.log(year);
var me = "jose";
let job = "dev";
const year = 1990;


//functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
console.log(addArrow(2,3));

function addDecl (a,b) {
    return a+b;
}

const addExpr = function (a,b) {
    return a+b;
}

const addArrow = (a, b) => a+b;
*/

/**
 * The this keyword
 */
/*
console.log(this);


function calcAge (birthYear) {
    const age = 2037 - birthYear;
    console.log(this); //OWN KEYWORD OF FUNCTION WHICH IS UNDEFINED
}
calcAge(1990);

const calcAgeArrow = (birthYear) => {
    const age = 2037 - birthYear;
    console.log(this); //THIS KEYWORD OF THE PARENT ARROW FUNCTION DOESNT HAVE ITS OWN THIS
}
calcAgeArrow(1990);
*/
/*

const jose = {
    firtsName: "Jose",
    year: 1990,
    calcAge: function () {
        const age = 2037 - this.year;
        console.log(age); //OWN KEYWORD OF FUNCTION WHICH IS UNDEFINED

        self = this; //self or that
        //una funcion dentro de una funcion no tendra su propio this, la solucion es pasarlo como self
        // const isMillennial = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // }
        //solucion 2, hacemos un arrow function que su this es el del padre
        const isMillennial = () => {
            // console.log(self.year >= 1981 && self.year <= 1996);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillennial();
    },
    greet: () => console.log(`Hey ${this.firtsName}`)

}

jose.greet();
jose.calcAge();


const addExpr = function (a,b) {
    console.log(arguments);
    return a+b;
}

const addArrow = (a, b) => {
    console.log(arguments);
    return a+b
};


console.log(addExpr(2,1,5));
console.log(addArrow(2,1,5));
*/
//primitive

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//reference types
const jessica = {
    firstName: "Jessica",
    lastName: 'Williams',
    age: 27

};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before m:', jessica);
console.log('aftes m:', marriedJessica);

//copying objects
const jessica2 = {
    firstName: "Jessica",
    lastName: 'Williams',
    age: 27,
    family: ["Alice", "Bob"]

};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";


jessicaCopy.family.push('Mary');

console.log('Before m:', jessica2);
console.log('aftes m:', jessicaCopy);
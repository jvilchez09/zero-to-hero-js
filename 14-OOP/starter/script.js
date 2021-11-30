'use strict';

/**
 * Constructor function
 */
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);

  //    never create methods inside a constructor function (to solve this we will use prototypes)
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const joe = new Person('Joe', 1990);
console.log(joe);

// 1. New is created
//2. function is called, this {}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 1992);
const charles = new Person('Charles', 1992);
console.log(matilda, charles);

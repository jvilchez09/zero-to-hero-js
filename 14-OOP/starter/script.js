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
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
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

/**
 * Prototypes
 */
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// console.log(Person.prototype);

joe.calcAge(); //joe no tiene el metodo calAge pero se  puede usar porque lo hereda de Person

console.log(joe.__proto__);

console.log(Person.prototype.isPrototypeOf(joe)); //true
console.log(Person.prototype.isPrototypeOf(Person)); // false, it is the prototype of linked objects not the class

Person.prototype.species = 'Homo Sapiens';
console.log(joe.species);

/**
 * Classes in ES6
 */
//class expression
// const PersonCl = class {};
//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //instance method
  //methods will be added to .prototype propertie
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  //static method
  static hey() {
    console.log('HEY THERE 😆');
    console.log(this);
  }
}
const jessica = new PersonCl('Jess', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.age);

// 1. classes are not hoisted
//2. classes are first-class citizens
//3. classes are excecuted in strict mode

/**
 * Setters and getters
 */

const account = {
  owner: 'jose',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

/**
 * Static methods
 */

Person.hey = function () {
  console.log('HEY THERE 😆');
  console.log(this);
};

Person.hey();

PersonCl.hey();

/**
 * Inheritance between classes
 */
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Sci');

console.log(mike);

mike.introduce();

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);

/**
 * Object.create
 */

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
steven.birthYear = 1990;

console.log(steven);

/**
 * Encapsulation: private class fields
 */

//Public/Private fields
//Public/Private methods

/* this is how private fields are defines the # make them private
#movements = []

*/

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('joe', 'USD', 1111);
acc1.deposit(1500);
acc1.requestLoan(100);

console.log(acc1._approveLoan(10));

/**
 * Chaining methods
 */

acc1.deposit(1500).deposit(1500);

//return this in the function os a class so the methods are chainable

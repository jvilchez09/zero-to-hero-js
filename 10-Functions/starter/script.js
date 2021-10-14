'use strict';

/**
 * advance topics about functions
 * Default parameter
 */
/*
const bookings = [];
const createBooking = function (flightNum, numPass = 1, price = 199 * numPass) {
  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH124', 5);

createBooking('LH124', undefined, 5000);
*/

/**
 * Value vs reference
 */
/*
const flight = 'LH123';
const jose = {
  name: 'jose Vil',
  passport: 123548415,
};

const checkIn = function (flightNum, pass) {
  flightNum = 'LH987';
  pass.name = 'Mr.' + pass.name;
  if (pass.passport === 123548415) {
    console.log('Check IN');
  } else {
    console.log("CheckInn't");
  }
};

checkIn(flight, jose);
console.log(flight);
console.log(jose);
*/
//passing by value
/**
 * Pass by reference es una referencia al valor en la memoria (objetos y arreglos)
 * pasar por valor es una copia del valor (primitivos <todo lo demas>)
 */

/**
 * first class functions (first class citizens)
 * higher order functions
 */

/*

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`Transformed str: ${fn(str)}`); //fn is the callback function
  console.log(`Transformed by: ${fn.name}`);
};

transformer('js is the best', upperFirstWord);

transformer('js is the best', oneWord);  

*/

/**
 * function returning functions
 */
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('joe');
greeterHey('steev');

greet('Hello')('jose');

//turning to arrow fn
const greet = greeting => name => console.log(`${greeting} ${name}`);

*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: ` ${this.iataCode}`, name });
  },
};

lufthansa.book(258, 'joe v.');
console.log(lufthansa);
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'sarah will');
//call method sirve para especificar a que objeto apuntara "this" cuando la funcion se definio en un objeto
book.call(eurowings, 23, 'sarah will');

console.log(eurowings);

// apply method

const flightData = [585, 'estefs vils'];

book.apply(eurowings, flightData);

book.call(eurowings, ...flightData);

/**
 * bind method
 */

const bookEW = book.bind(eurowings);
bookEW(23, 'stev wils');

// bind whith even listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); //this is the function calling in this case the event listener so it is the button
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial aplication
const addTax = (rate, value) => value + value * rate;

const addVat = addTax.bind(null, 0.23); //  el primer argumento es this keyword y el segundo el primer argumento de la funcion add tax que sera seteado

console.log(addVat(100));

const addTaxArrow = rate => value => value + value * rate;

const addVatArrow = addTaxArrow(0.23);
console.log(addVatArrow(100));

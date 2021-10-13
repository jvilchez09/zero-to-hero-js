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

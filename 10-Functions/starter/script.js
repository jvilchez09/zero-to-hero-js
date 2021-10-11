'use strict';

/**
 * advance topics about functions
 * Default parameter
 */

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

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xsss = 23;

// console.log();

// console.log(xsss);

// Ledyba

//instale el servidor en vivo de VS y el de Node js
/**
 * checkpoint 59
 */

/**
 * Given an array calculate temp amplitude, sometimes we get and error
 */

const temperatires = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) understanding the problem
//-whats temperatiure amplitud? is the difference between highest and lowest temp in the array
//-how to compute max and min temps
//- what's a sensor error and what to do?

//2) breaking into smaller problems
//- how to ignore errors
//-max value
//-find min value
//-substract min from max (amplitud)

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let currrentTemp = temps[i];

    if (typeof currrentTemp !== 'number') continue;

    if (currrentTemp > max) {
      max = currrentTemp;
    }
    if (currrentTemp < min) min = currrentTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatires);
console.log(amplitude);

//problem 2: function should receive 2 arrays of temperatures
//-in this case we will merge the two arrays

const temperatires2 = [2, 5, 8, 7, 6, 9];
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let currrentTemp = temps[i];

    if (typeof currrentTemp !== 'number') continue;

    if (currrentTemp > max) {
      max = currrentTemp;
    }
    if (currrentTemp < min) min = currrentTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const amplitude2 = calcTempAmplitudeNew(temperatires, temperatires2);
console.log(amplitude2);

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // the last one wont be included
console.log(arr.slice(-1)); //starts from the end -1 is the last  one
console.log(arr.slice(1, -2));

//SPLICE

console.log(arr.splice(2)); // it mutates the original array (deletes the ones indicated)
console.log(arr);

// reverse
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // mutates the original array

//concat
const letters = arr.concat(arr2); //does not mutate original
console.log(letters);
console.log([...arr, ...arr2]); //does the same work as concat

// JOIN
console.log(letters.join('-'));
*/

for (const [i, movement] of movements.entries()) {
}

movements.forEach(function (movement, index, array) {
  console.log(movement);
  console.log(index);
  console.log(array);
});

//foreach cant be break or continue

/**
 * foreach with maps
 */

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(value);
  console.log(key);
  console.log(map);
});

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row"> 
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};

const user = 'Steven Thomas Williams';
createUserName(accounts);
console.log(accounts);

const calcPrintBalance = function (movement) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcPrintBalance(account1.movements);
/**
 * Data transformation
 * Map, Filter, Reduce
 * Map: similar to forEach, takes an array and creates a new one with the operation that we want.
 * Filter takes the array and creates a new one with the elements that pass the specified test condition
 * Reduce redices all elements to one single value, like adding all together
 */

/**
 * Map Method
 */

const euroToUsd = 1.1;

const movementsUsd = movements.map(mov => mov * euroToUsd);
console.log(movementsUsd);

const movDesc = movements.map(
  (mov, i) =>
    `movimiento ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movDesc);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const widrawal = movements.filter(function (mov) {
  return mov < 0;
});
console.log(widrawal);

const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0); // value at what it will start adding

console.log(balance);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

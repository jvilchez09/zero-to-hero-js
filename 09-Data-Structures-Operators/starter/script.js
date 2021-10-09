'use strict';

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  //ES6 object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}  at  ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`HERE is you deli pastas with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 2,
});

restaurant.orderPizza('hongos', 'maiz', 'tomates');
/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const ca = arr[2];

const [x,y,z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);


const [starter, mainCours] = restaurant.order(2, 0);
console.log(starter, mainCours);

//nested destructuring
const nested = [2, 4, [5,6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p=1, q=1, r=1] = [8, 9];
//print 8 9 1
console.log(p, q, r);
*/

// destructuriong objects vid 104
/*
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//default values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 4 };

({ a, b } = obj);
console.log(a, b);

//nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/**
 * The spread Operator
 */
/*
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];
// Join 3 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// iterables: arrays, strings, maps, sets. NOT Objects (spread operator se usa con iterables)
const str = 'jose';
const letters = [...str, ' ', 'V.'];
console.log(letters);

// const ingredients = [
//   prompt('hagamos pasta ing 1?'),
//   prompt('hagamos pasta ing 2?'),
//   prompt('hagamos pasta ing 3?'),
// ];

// restaurant.orderPasta(...ingredients);

//Objetos

const newRest = { foundedIn: 1990, ...restaurant, founder: 'Joseph' };
console.log(newRest);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Risto Italo';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/**
 * Rest Pattern and Parameters
 */
console.log('REST AND SPREAD');
//Spread, because on right side of =
const arr = [1, 2, ...[3, 4]];

//Rest (el resto), because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

//in objects
const { sat: sab, ...weekDays } = restaurant.openingHours;
console.log(sab);
console.log(weekDays);

// 2) functions
// ... Rest oparameters
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  // console.log(numbers);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 5);

const x = [23, 5, 7];
add(...x);

console.log('Short circuiting');
console.log('----------OR-----------------');
//short circuit evaluation = return the first truthy value
console.log(3 || 'jose');
console.log('' || 'jose');
console.log(true || 0);
console.log(undefined || null);

console.log('----------AND-----------------');
//short circuit evaluation = return the first falsy value
console.log(0 && 'jose');
console.log('' && 'jose');
console.log(true && 'jj');
console.log(undefined && null);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mush', 'spich');
}

restaurant.orderPizza && restaurant.orderPizza('mush', 'spich');

//Nullish coalescing Operator nullish values null and undefined ()
restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

console.log('for-of loop');
const menu = [restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
//to get index and value
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
console.log('Optional chaining');
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.fri.open);

console.log(restaurant.openingHours.mon?.open);

//example
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'no existe');

console.log('Looping Objects');
//Properties name
const porperties = Object.keys(openingHours);

let openStr = `we are open on ${porperties.length} days`;

for (const day of porperties) {
  openStr += `${day} ,`;
}
console.log(openStr);

//Property values

const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and we close at ${close}`);
}

console.log('SETS');
const orderSet = new Set(['pasta', 'pizza', 'risotto', 'pizza', 'risotto']);
console.log(orderSet);

console.log(new Set('jose'));
console.log(orderSet.size);
console.log(orderSet.has('pizza'));
// orderSet.clear;

//example
const staff = ['waiter', 'chef', 'manager', 'chef', 'waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log('********MAPS');

const rest = new Map();
rest.set('name', 'clasico italiano');
rest.set(1, 'Italy');
console.log(rest.set(1, 'Portu'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we close');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 7;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

/**
 * Methods for maps:
 * .has
 * .delete
 * .size
 */
const question = new Map([
  ['question', 'whats the best progr language?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'js'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);

console.log(question);

/**
 * Convert object to maps
 */
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}

const answer = 3; //Number(prompt('ur answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

/**
 * map to array
 */
console.log(...question);

console.log('Working with strings');

const airline = 'tap aire Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B236'[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
// the 4 is where the slice starts to extract
console.log(airline.slice(4));
//the second parameter is where the extract ends (fundamentals of slice method)
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

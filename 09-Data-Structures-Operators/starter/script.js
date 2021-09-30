'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
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
//to get index
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

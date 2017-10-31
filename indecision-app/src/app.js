// below brackets not an object just import syntax
//
import subtract, { square, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';
import validator from 'validator';

console.log('app.js is running');
console.log(square(3));
console.log(add(3, 2));
console.log(isAdult(17));
console.log(canDrink(21));
console.log(subtract(100, 10));
console.log(isSenior(65));
console.log('X X X X X X');
console.log(validator.isEmail('test@gmail.com'));

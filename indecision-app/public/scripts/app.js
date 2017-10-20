"use strict";

//anon old function
var square = function square(x) {
  return x * x;
};

console.log(square(8));

//named old function
function squareName(x) {
  return x * x;
};

console.log(squareName(3));

// now using es6 arrow function...
// all arrow func are anon...must be set to variable
var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(9));

// if returns single expression use the new concise syntax
// has implicit return
var sqArrow = function sqArrow(x) {
  return x * x;
};

console.log(sqArrow(4));

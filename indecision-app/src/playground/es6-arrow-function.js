//anon old function
const square = function (x) {
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
const squareArrow = (x) => {
  return x * x;
};

console.log(squareArrow(9));

// if returns single expression use the new concise syntax
// has implicit return
const sqArrow = (x) => x * x;

console.log(sqArrow(4));





//exercise
const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Mike Smith'));

// arguments object - no longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// // 1001 still accessable in add even though its not a parameter
// console.log(add(55,1,1001));

const addTwo = (a, b) => {
  // arguments don't work...if needed use es5 syntax
  // console.log(arguments)
  return a + b;
}
console.log(addTwo(55,1));



// this keyword - no longer bound with arrow functions

// const user = {
//   name: 'Michael',
//   cities: ['Rochester', 'Fort Myers', 'Chicago'],
//   printPlacesLived: function () {
//     console.log(this.name);
//     console.log(this.cities);
//     const that = this;
//
//     this.cities.forEach(function (city) {
//       // this not accessable in this function ... use 'that'
//       // this only accessable on function on object property like printPlacesLived function which is why it logs above
//       console.log(that.name + ' has lived in ' + city)
//     });
//   }
// };
//
// user.printPlacesLived();


const userTwo = {
  name: 'Michael',
  cities: ['Rochester', 'Fort Myers', 'Chicago'],
  // dont use arrow func for printPlaces because this is undefined
  // also new syntax below
  printPlacesLive() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    // this.cities.forEach((city) => {
    //   // this value is in context they are created aka this functions parent
    //   console.log(this.name + ' has lived in ' + city)
    // });
  }
};
console.log(userTwo.printPlacesLive());

const multiplier = {
  numbers: [1, 2, 4, 6],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());

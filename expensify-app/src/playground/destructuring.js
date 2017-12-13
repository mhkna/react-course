//
// OBJECT DESTRUCTURING
//

const person = {
  name: 'Michael',
  age: 27,
  location: {
    city: 'Miami',
    temp: 92
  }
};

//renamed var and default for firstName below...
const { name: firstName = 'Anon', age } = person;
// the 2 commented lines below is equiv to line above
// const name = person.name;
// const age = person.age;
console.log(`${firstName} is ${age}.`)

const { city, temp: temperature } = person.location
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`)
}
// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }


//
// ARRAY DESTRUCTURING
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// instead of const city =....
// can leave off last but must use comma for first
const [, city2, yourState = 'New York'] = address;

console.log(`You are in ${city2} ${yourState}.`);



const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medPrice] = item;
console.log(`A medium ${itemName} costs ${medPrice}.`)





//
// ADDITIONAL
//

const add = (data) => {
  return data.a + data.b;
};
// above is equiv to below except for c part
const add = ({ a, b }, c) => {
  return a + b + c;
};

console.log(add({ a: 1, b: 12 }, 100));

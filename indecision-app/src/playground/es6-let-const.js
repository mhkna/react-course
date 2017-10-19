var nameVar = 'Michael';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Justin';
nameLet = 'Alan';
console.log('nameLet', nameLet);

const nameConst = 'Dima';
console.log('nameConst', nameConst);

// var scoped to function below and not avail outside of it
// let/const also function scoped
function getPetName() {
  const petName = 'Ty';
  return petName;
}

console.log(getPetName());
// below doesn't work
// console.log(petName);

// block scoping
var fullName = 'Mich Kna';

if (fullName) {
  const firstName = fullName.split(' ')[0]
  console.log(firstName)
}

//const/let are block level scoped meaning they are not avail outside of blocks which is dif than var
console.log(firstName);

// DO THIS INSTEAD OF ABOVE IF WANT IT OUTSIDE BLOCK
const fullName = 'Mich Kna'
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}
//will now print below
console.log("HI")
console.log(firstName);

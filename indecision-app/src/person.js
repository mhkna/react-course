export { isAdult, canDrink, isSeniorCitizen as default }

const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

const isSeniorCitizen = (age) => {
  return age >= 65;
}

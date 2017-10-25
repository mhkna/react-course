
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  //override parent function above
  getDescription() {
    //set parent function to var...remember to pass in arguments (but here there are none)
    let description = super.getDescription();

    if (this.hasMajor()) {
        // description = description + ` Their major is ${this.major}.`
        description += ` Their major is ${this.major}.`
    }

    return description;
  }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
      super(name, age);
      this.homeLocation = homeLocation;
    }
    getGreeting() {
      let greeting = super.getGreeting();

      if (this.homeLocation) {
        greeting += ` I'm visiting from ${this.homeLocation}.`
      }

      return greeting;
    }
}

const me = new Traveler('Michael Knapp', 27, 'Detroit');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());

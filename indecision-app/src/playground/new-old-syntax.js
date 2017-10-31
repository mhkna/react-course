// new syntax using babel plugin called transform class properties

class OldSyntax {
  constructor() {
    this.name = 'Eleven';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// ------------------

class NewSyntax {
  name = 'Mike';
  getGreeting = () => {
    return `Hi. My name is ${this.name}.`;
  }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());

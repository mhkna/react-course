const obj = {
  name: 'Nathan',
  getName() {
    return this.name;
  }
};

const getName = obj.getName.bind(obj);

console.log(getName());

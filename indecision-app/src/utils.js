console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => {
  return a - b;
}

// export default subtract

//below is NOT an object just references to things to export
export { square, add, subtract as default };
// exports - default export or named exports
// can only have 0 or 1 default export

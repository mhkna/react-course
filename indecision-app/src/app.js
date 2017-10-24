console.log('App.js is running!');
const obj = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: ['One', 'Two']
}
// JSX - JavaScript XML
const template = (
  <div>
    <h1>{obj.title}</h1>
    {obj.subtitle && <p>{obj.subtitle}</p>}
    <p>{obj.options.length > 0 ? "here they are" : "none avail"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  console.log('addOne');
};
const minusOne = () => {
  console.log('minusOne');
};
const reset = () => {
  console.log('reset');
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);
//make -1 button setup minusOne function and register - log -1
//make reset button "reset" - function fires setup reset function - log reset

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

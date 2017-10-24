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
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

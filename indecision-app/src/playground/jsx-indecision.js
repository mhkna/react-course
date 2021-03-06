console.log('App.js is running!');
const obj = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: []
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option) {
    obj.options.push(option);
    event.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  obj.options = [];
  render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * obj.options.length);
    const option = obj.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{obj.title}</h1>
      {obj.subtitle && <p>{obj.subtitle}</p>}
      <p>{obj.options.length > 0 ? "here they are" : "none avail"}</p>
      <button disabled={obj.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          obj.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();

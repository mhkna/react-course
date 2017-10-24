console.log('App.js is running!');

let visibility = false;

const toggleVis = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVis}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
          <div>
            <p>Details Here</p>
          </div>
      )}
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

render();

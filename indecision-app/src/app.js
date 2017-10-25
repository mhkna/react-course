class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

// react component is just an es6 class
class Header extends React.Component {
  // react components MUST define render
  render() {
    return (
      <div>
        <h1>Indeicison</h1>
        <h2>We will choose for you</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
  }

class Options extends React.Component {
  render()  {
    return (
      <div>
        <p>This is the holder for options</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>FORM</p>
        <button>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

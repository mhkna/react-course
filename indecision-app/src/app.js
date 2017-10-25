class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'We will choose for you';
    const options = ['one', 'two', 'three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

// react component is just an es6 class
class Header extends React.Component {
  // react components MUST define render
  // console.log(this.props);
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        * {this.props.optionText}
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

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
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
  }

class Options extends React.Component {
  // passing in props is same as this.props anywhere else. automatic in constructor
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render()  {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(event) {
    event.preventDefault();
    // event.target is the form element which has two elements of input and button. then option is name we gave the element
    // trim removes spaces
    const option = event.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

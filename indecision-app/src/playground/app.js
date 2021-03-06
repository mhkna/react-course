class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  //lifecycle method must be spelled correctly and CANT be used on functional stateless
  componentDidMount() {
    //try/catch bc invalid json throws error
    try {
      //fetching data
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    //saving data if actually changed
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      //key value pair below where you make up key
      localStorage.setItem('options', json);
    }
  }
  //unmounted from screen aka render new page
  componentWillUnmount() {
    console.log('about to unmount');
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => optionToRemove !== option)
      }
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.includes(option)) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    });
  }
  render() {
    const subtitle = 'We will choose for you';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};


// // react component is just an es6 class
// class Header extends React.Component {
//   // react components MUST define render
//   // console.log(this.props);
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// stateless functional
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
}

//
// class Options extends React.Component {
//   // passing in props is same as this.props anywhere else. automatic in constructor
//   // constructor(props) {
//   //   super(props);
//   //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   // }
//   // handleRemoveAll() {
//   //   console.log(this.props.options);
//   // }
//   render()  {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      * {props.optionText}
      <button
        onClick={(e) => {
          //passing optionText up to handleDeleteOption
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         * {this.props.optionText}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    };
  }
  handleAddOption(event) {
    event.preventDefault();
    // event.target is the form element which has two elements of input and button. then option is name we gave the element
    // trim removes spaces
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    //implicit returning an opject requires braces wrapped in parens
    this.setState(() => ({ error: error }));

    if (!error) {
      event.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// stateless functional component
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

ReactDOM.render(<IndecisionApp options={['one', 'two']}/>, document.getElementById('app'))

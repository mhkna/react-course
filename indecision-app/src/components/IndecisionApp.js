import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js'
import Action from './Action.js';
import Header from './Header.js';
import OptionModal from './OptionModal.js';

// pull state out of constructor
// convert event handlers
// delete constructor altogether
// start with class properties and end with methods

class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: [],
        selectedOption: undefined
      };
    });
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => optionToRemove !== option)
      }
    });
  };
  handleClearSelected = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      }
    });
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => {
      return {
        selectedOption: option
      }
    });
  };
  handleAddOption = (option) => {
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
  };
  componentDidMount() {
    // try/catch bc invalid json throws error
    try {
      //fetch data
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch (e) {
      // do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // saving data
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('about to unmount');
  }
  render() {
    const subtitle = 'We will choose for you';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
            handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelected={this.handleClearSelected}
        />
      </div>
    );
  }
}

export default IndecisionApp;

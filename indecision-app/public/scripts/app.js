"use strict";

console.log('App.js is running!');
var obj = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();

  var option = event.target.elements.option.value;

  if (option) {
    obj.options.push(option);
    event.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  obj.options = [];
  render();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      obj.title
    ),
    obj.subtitle && React.createElement(
      "p",
      null,
      obj.subtitle
    ),
    React.createElement(
      "p",
      null,
      obj.options.length > 0 ? "here they are" : "none avail"
    ),
    React.createElement(
      "p",
      null,
      obj.options.length
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      obj.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();

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

var appRoot = document.getElementById('app');

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
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "Item one"
      ),
      React.createElement(
        "li",
        null,
        "Item two"
      )
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

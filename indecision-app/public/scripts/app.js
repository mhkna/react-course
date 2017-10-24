"use strict";

console.log('App.js is running!');
var obj = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: ['One', 'Two']
  // JSX - JavaScript XML
};var template = React.createElement(
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
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

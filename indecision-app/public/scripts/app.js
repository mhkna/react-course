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
  console.log('addOne');
};
var minusOne = function minusOne() {
  console.log('minusOne');
};
var reset = function reset() {
  console.log('reset');
};
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
//make -1 button setup minusOne function and register - log -1
//make reset button "reset" - function fires setup reset function - log reset

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

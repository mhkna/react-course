"use strict";

console.log('App.js is running!');
var obj = {
  title: "Indecision App",
  subtitle: "This is some info"
  // JSX - JavaScript XML
};var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    obj.title
  ),
  React.createElement(
    "p",
    null,
    obj.subtitle
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

var user = {
  name: 'Mike',
  age: 27,
  location: 'Chicago'
  // var userName = 'Mike';
  // var userAge = 27;
  // var userLocation = 'Chicago';
};var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

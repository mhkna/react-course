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

var user = {
  name: 'Mike',
  age: 27,
  location: 'Chicago'
  // var userName = 'Mike';
  // var userAge = 27;
  // var userLocation = 'Chicago';
};function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

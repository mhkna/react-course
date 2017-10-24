'use strict';

console.log('App.js is running!');

var visibility = false;

var toggleVis = function toggleVis() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVis },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Details Here'
      )
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};

render();

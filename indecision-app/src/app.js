console.log('App.js is running!');
var obj = {
  title: "Indecision App",
  subtitle: "This is some info"
}
// JSX - JavaScript XML
var template = (
  <div>
    <h1>{obj.title}</h1>
    <p>{obj.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Mike',
  age: 27,
  location: 'Chicago'
}
// var userName = 'Mike';
// var userAge = 27;
// var userLocation = 'Chicago';
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

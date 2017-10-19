console.log('App.js is running!');
const obj = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: ['One', 'Two']
}
// JSX - JavaScript XML
const template = (
  <div>
    <h1>{obj.title}</h1>
    {obj.subtitle && <p>{obj.subtitle}</p>}
    <p>{obj.options.length > 0 ? "here they are" : "none avail"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Mike',
  age: 27,
  location: 'Chicago'
}
// var userName = 'Mike';
// var userAge = 27;
// var userLocation = 'Chicago';
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// react component is just an es6 class
class Header extends React.Component {
  // react components MUST define render
  render() {
    return (
      <div>
        <h1>Indeicison</h1>
        <h2>We will choose for you</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header/>
    <Action/>
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))

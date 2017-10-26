// visibilityToggle - render, constructor, handleToggleVisibilty
// single piece of state .... visibility -> false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibilty() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibilty}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>some details to toggle</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// let visibility = false;
//
// const toggleVis = () => {
//   visibility = !visibility;
//   render();
// }
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVis}>
//         {visibility ? 'Hide Details' : 'Show Details'}
//       </button>
//       {visibility && (
//           <div>
//             <p>Details Here</p>
//           </div>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(template, document.getElementById('app'));
// };
//
// render();

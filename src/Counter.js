import React from 'react';

class Counter extends React.Component {
  state = {
    who: 'World'
  }
  handleButtonClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const newWho = e.target.value;
    this.setState({
      who: newWho
    })
  }
  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button className="world" value="world"
          onClick={this.handleButtonClick}>
          World
        </button>
        <button className="friend" value="friend"
          onClick={this.handleButtonClick}>
          Friend
        </button>
        <button className="react" value="react"
          onClick={this.handleButtonClick}>
          React
        </button>
      </div>
    )
  }
}
export default Counter;
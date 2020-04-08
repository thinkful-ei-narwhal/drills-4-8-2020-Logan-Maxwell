import React from 'react';

class Bomb extends React.Component {

  state = {
    count: 10,
    not: ''
  }

  // componentDidMount() { }


  handleTickTockBoom = () => {
    const countdown = this.state.count - 1;
    this.setState({ count: countdown })
  }
  handleTickTockBoom = () => {
    const notification = this.state.not - 1;
    this.setState({ not: notification })
  }

  ticker = () => {
    setInterval(this.handleTickTockBoom, 1000)

  };

  ticker2 = () => {
    setInterval(this.countNot, 1000)
  }

  countNot = () => {
    if (this.state.count === 0) {
      return this.state.not[2]
    }
    else if (this.state.count % 2 === 0) {
      return this.state.not[1]
    }

    else if (this.state.count % 2 !== 0) {
      return this.state.not[0]
    }
  }

  initiate = () => {
    this.ticker();
    this.handleTickTockBoom();
    this.countNot();
    this.ticker2();
  }

  render() {
    console.log(this.state.count)
    return (
      <div>
        <button onClick={this.initiate}>CountdownToBOOM</button>
        <p className="theBooms">{this.state.not}</p>
        <p className="timer">{this.state.count}</p>
      </div>
    )
  }
  // componentWillUnmount() { }
}
export default Bomb;
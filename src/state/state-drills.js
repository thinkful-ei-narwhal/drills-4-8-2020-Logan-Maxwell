import React from 'react';

class HelloWorld extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      who: "world"
    }
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
}
handleButtonClicked = (e) => {
  //change the string if a button is pressed
  //fetch the class of each xml button and output unique string. 

  let classNames = e.target.className;
  console.log(classNames);
  this.setState({who: classNames});
}
  render(){
  return(
    <div>
      <p>Hello {this.state.who}</p>
      <button onClick={this.handleButtonClicked}className="world">World</button>
      <button onClick={this.handleButtonClicked}className="friend">Friend</button>
      <button onClick={this.handleButtonClicked}className="react">React</button>
    </div>
  )
  }
}
export default HelloWorld;
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    toggleTickTock = () => {
        let title = "tick ";
        return (this.state.count < 9) ? title = (this.state.count % 2 === 0) ? title : "tock " : title = "Shit went Boom ";
    }

    handleTickTockBoom = () => {
        let increment = this.state.count + 1;
        this.setState({ count: increment })
    }
    ticker = () => { setInterval(this.handleTickTockBoom, 1000) };
    render() {
        // console.log(this.state.timer);
        return (
            <div>
                <button onClick={this.ticker}>Start Timer</button>
                <p className="bomb">{this.toggleTickTock()}{this.state.count}</p>
            </div>
        )
    }
}

export default Bomb;

// class Bomb extends React.Component {
//     constructor(props){
//     super(props)
//     this.state = {
//         timer: false,
//         title: "tick",
//         count: 0
//         }
//     }

//     toggleTickTock = () => {
//         let toggle = this.state.timer;
//         console.log(toggle);
//         this.setState({timer: !toggle})
//     }   

//     handleTickTockBoom = () => {
//         this.toggleTickTock();
//         (this.state.timer !== false) ? this.setState({title: "tock"}) : this.setState({title: "tick"})
//         let increment = this.state.count + 1;
//         this.setState({count: increment})
//     }
//     ticker = () => {setInterval(this.handleTickTockBoom,1000)};
//     render(){
//         // console.log(this.state.timer);
//         return(
//             <div>
//                 <button onClick={this.ticker}>Start Timer</button>
//                 <p className="bomb">Bad News : {this.state.title} {this.state.count}</p>
//             </div>
//         )
//     }
// }

// export default Bomb;
import React from "react";
import ReactDOM from "react-dom"


export default class Time extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      intervalId: "",
    }; 
    // 時計用
    this.tick = this.tick.bind(this)
  }
  // 時計用
 tick(){
  let { time } = this.state
  time.setSeconds(time.getSeconds() + 1)
  this.setState({time: time})
}
componentDidMount(){
  let id = setInterval(this.tick, 1000)
  this.setState({intervalId: id})
} 
  render(){
    return(
      <div>
        <h2>現在の時間</h2>
        <span>今の時間 {this.state.time.toLocaleTimeString()}</span>
      </div>
    )
  }
}

import React from 'react';
import ElapsedTime from './elapsed-time';
import Buttons from './buttons';

import './style.css';

class Timer extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      timingEvents:[],
      nonce: 0,
    }
    
    this.addTimerEvent = this.addTimerEvent.bind(this)
    this.tick = this.tick.bind(this)
    this.poll = setInterval(this.tick, 1000)// set milisec diff
  }

    addTimerEvent(){
      this.setState({
        timingEvents:[
          ...this.state.timingEvents, //gives previous time
          new Date()
            
        ]
      })
    }

    tick(){
      this.setState((prevState) => ({ nonce:this.state.nonce+1 }))
    }


  render(){
    return(
      <div className='container'>
      <ElapsedTime 
        timingEvents={this.state.timingEvents}
      />
      <Buttons 
        handleClick = {this.addTimerEvent}
        timingEvents={this.state.timingEvents}
      />
    </div>
    );
  }
}

export default Timer
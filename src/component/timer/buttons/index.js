import React from 'react';

export default function Buttons(props) {

const label = props.timingEvents.length % 2 === 0
? 'Start'
: 'Stop'



return (
  <div className='buttons'>
    <button
      onClick={props.handleClick}
    >
     {label}
    </button>
  </div>
)
}

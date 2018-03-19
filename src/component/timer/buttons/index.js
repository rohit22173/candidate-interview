import React from 'react';

export default function Buttons(props) {

const label = props.timingEvents.length % 2 === 0
? 'Start'
: 'Stop'



return (
  <div className='buttons'>
    <button
    	disabled = { props.isDisabled > 3 ? false : true }
      onClick={props.handleClick}
    >
     {label} {props.isDisabled}
    </button>
  </div>
)
}

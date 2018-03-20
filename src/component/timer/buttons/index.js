import React from 'react';

export default function Buttons(props) {

const label = props.timingEvents.length % 2 === 0
? 'Start'
: 'Stop'

const checkboxText = 'Selected'



return (
  <div className='buttons '>
    <button
       className='btn btn-primary'
    	disabled = { props.isDisabled > 3 ? false : true }
      onClick={props.handleClick}
    >
     {label}
    </button>
    <input type='checkbox' onChange={props.handleCheckBoxClick}/>
  </div>
)
}

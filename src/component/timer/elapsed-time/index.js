import React from 'react';
import formatDuration from 'format-duration';

function elapsedTime(events){
   
  let elapsed = 0;
  
  for(let i=0; i<events.length; i+=2){
    const start = events[i];
    const stop = events[i+1] || new Date()

    elapsed+= stop - start
    // console.log(stop - start)
  }
  // return (elapsed/1000).toFixed(0); // return single sec not milisec
  return elapsed;
}

export default function ElapsedTime(props){
  return(
    <div className="elapsed-time">
      {
        (formatDuration(elapsedTime(props.timingEvents)))
      }
    </div>
  )
 
}


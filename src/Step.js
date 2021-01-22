import React from 'react';

const Step = (props) => {
      
    return(
        <div>
            Kroki:
            <input type='number' min='1' onChange={(event) => {props.stepMethod(event.target.value)}} value={props.stepValue}></input>
        </div>
    )   
}

export default Step
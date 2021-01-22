import React, {useState, useEffect} from 'react';
import './Clock.css';

const Clock = (props) => {

    const [date, setDate] = useState(new Date());

    const tick = () => setDate(new Date());
    
    useEffect(() => {
        let timeID = setInterval(() => {
            tick()
        }, 1000)

        return(() => {
            clearInterval(timeID)
        });
    });

    return(
        <div className='clock'>
            <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockMethod}>X</span></h4>
        </div>
    );
}

export default Clock
import React from 'react';

const Timer = (props) => {

    const currentDate = new Date().toDateString()

    return (
        <div>
            <p> Timer says date is:  { currentDate} </p>
            
        </div>
    
    
    )



}

export default Timer
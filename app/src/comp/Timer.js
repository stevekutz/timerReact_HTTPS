import React, {useState, useEffect} from 'react';

const Timer = (props) => {

    const [secondsCount, setSecondsCount] = useState(0);
    // const [ timeCount, setTimeCount] = useState(new Date());

    const countTime = (dir) => {
        if (dir) {
            setInterval(() => setSecondsCount(secondsCount + 1), 1000)
            console.log("secondsCount", secondsCount);
        }
    
    
    }


    // similar to mix of componentDidMount + componentDidUpdate + componentWillUnmount
    useEffect( () => {
        const timer = setInterval(
            () => {setSecondsCount(secondsCount + 1)}
        , 1000)

        // cancels operation of timer, this allows single increment else this starts count up from 0
        return () => clearInterval(timer);
    
    })


    const currentDate = new Date().toDateString()

    



    return (
        <div>
            <p> Direct call to date is:  { currentDate} </p>
            <button onClick = {() => countTime(true) }> Start Timer </button>
            <h2> Seconds Count : {secondsCount}</h2>

            
        </div>
    
    
    )



}

export default Timer
import React, {useState, useEffect} from 'react';



const Timer = (props) => {

    const currentDate = new Date().toDateString();
    
    const [secondsCount, setSecondsCount] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [timerStartStop, setTimerStartStop] = useState('Start');

    const [timerDirection, setTimerDirection] = useState('up');
    // const [ timeCount, setTimeCount] = useState(new Date());

    // const countTime = (dir) => {
    //     if (dir) {
    //         setTimerDirection('up')
    //     }
    
    
    // }


    const toggleTimer = () => {
        setTimerActive(!timerActive);
    
    }

    const resetTimer = () => {
        toggleTimer();
        setSecondsCount(0);

    
    }


    // toggle button control text for Start / Stop
    useEffect(() => {
        timerActive ? setTimerStartStop('Stop') : setTimerStartStop('Start')
    
    }, [timerActive])


    // similar to mix of componentDidMount + componentDidUpdate + componentWillUnmount
    useEffect( () => {
        if(timerActive) {
            const timer = setInterval(
                () => {setSecondsCount(secondsCount + 1)}
            , 1000)

            // cancels operation of timer, this allows single increment else this starts count up from 0
            return () => clearInterval(timer);
        
        
        }
    
    })




    return (


        <div>
            <p> Direct call to date is:  { currentDate} </p>
            <div>
                <button onClick = {toggleTimer}> {timerStartStop} </button>
                <button onClick = {resetTimer}> Reset </button>
            
            </div>
            <h2> Seconds Count : {secondsCount}</h2>

            
        </div>
    
    
    )



}

export default Timer
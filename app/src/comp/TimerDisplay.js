import React , {useState, useEffect}from 'react';
import {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitText,

} from '../styled/timer_display_style';


const TimerDisplay = (props) => {

    const colonText = ':';

    const [min_Ones, setMin_Ones] = useState('0');
    const [min_Tens, setMin_Tens] = useState('0');
    const [sec_Ones, setSec_Ones] = useState('0');
    const [sec_Tens, setSec_Tens] = useState('0');

    const [justSeconds, setJustSeconds] = useState('0');
    const [minCount, setMinCount] = useState('0');

    // console.log("Inside TimerDisplay", typeof(props.secondsCount));


    useEffect( () => {
        // update seconds
        
        let stringNum = props.secondsCount.toString();
        console.log("stringNum ", stringNum);

        // let justSeconds = 0;

        if (props.secondsCount === 0) {
            setMinCount('0');
            setSec_Ones('0')
            console.log("should reset minutes here");
        }

        // findSeconds(timeVal) {
        //     if 
        
        // }

        // seconds_Ones
        setSec_Ones(stringNum.slice(-1))

        if (stringNum < 10) {
            setSec_Tens('0');
            setMin_Ones('0');
            setMin_Tens('0');
        }
        else if(stringNum >= 10 && stringNum <= 59) {
            setSec_Tens(stringNum.slice(-2, 1));         
        } else if(stringNum >=60 && stringNum <= 3599) {
            
            setMinCount(Math.floor(stringNum / 60).toString()); // try as STRING
            setMin_Ones(minCount);
            
            setJustSeconds((props.secondsCount -  minCount * 60).toString());
            if (justSeconds < 10) {
                setSec_Tens('0');
            }
            else if(justSeconds >= 10 && justSeconds <= 59) {
                setSec_Tens(justSeconds.slice(-2, 1)); 
            }
            
        }

    
    } , [minCount, props.secondsCount])


    return (
            <DisplayContainerDiv>
                <DisplayDigitContainerDiv>
                    <DisplayDigitText> {min_Tens} </DisplayDigitText>
                    <DisplayDigitText> {min_Ones} </DisplayDigitText>
                    <DisplayColonDiv> {colonText} </DisplayColonDiv>
                    <DisplayDigitText> {sec_Tens} </DisplayDigitText>
                    <DisplayDigitText> {sec_Ones} </DisplayDigitText>
                
                
                </DisplayDigitContainerDiv>
            
            
            </DisplayContainerDiv>

    )


}


export default TimerDisplay;
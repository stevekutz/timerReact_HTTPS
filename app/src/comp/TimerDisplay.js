import React , {useState, useEffect}from 'react';
import {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitText,

} from '../styled/timer_display_style';


const TimerDisplay = (props) => {

    const colonText = ':';

    const [min_Ones, setMin_Ones] = useState('8');
    const [min_Tens, setMin_Tens] = useState('2');
    const [sec_Ones, setSec_Ones] = useState('0');
    const [sec_Tens, setSec_Tens] = useState('0');

    // console.log("Inside TimerDisplay", typeof(props.secondsCount));


    useEffect( () => {
        // update seconds
        console.log("Inside TimerDisplay", props.secondsCount);
        let stringNum = props.secondsCount.toString();
        console.log("seconds ONES is : ", stringNum.slice(-1))

        // seconds_Ones
        setSec_Ones(stringNum.slice(-1))

       if (stringNum < 10) {
            setSec_Tens('0');
       }
       else if(stringNum >= 10 && stringNum <= 59) {
            setSec_Tens(stringNum.slice(-2, 1));
            
        }

    
    } , [props.secondsCount])


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
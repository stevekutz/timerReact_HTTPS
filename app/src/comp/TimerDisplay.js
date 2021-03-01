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


    const [secDigits, setSecDigits] = useState('00');
    const [minDigits, setMinDigits] = useState('00');


    // console.log("Inside TimerDisplay", typeof(props.secondsCount));


    useEffect( () => {
        // update seconds
        
        let stringNum = props.secondsCount.toString();
        console.log("stringNum ", stringNum);

        // let justSeconds = 0;

        // const handleDigits = (numStr) => {
        //     console.log(">>> inside handelDigits >>>  ", numStr);

        //     if (numStr === 0) {
        //         setSecDigits('00');
        //     } else if (numStr <= '9') {
        //         setSecDigits('0' + numStr);
        //     }
        // }    




        if (stringNum <= 59) {
            console.log("inside if ", stringNum);
            // handleDigits(stringNum);
            if (stringNum === 0) {
                setSecDigits('00');
                setMinDigits('00');
            } else if (stringNum <= 9) {
                setSecDigits('0' + stringNum);
            } else if (stringNum <= 59) {
                setSecDigits(stringNum);
            }
        } else if (stringNum >= '60') {
            setMinCount(Math.floor(stringNum / 60))
            setJustSeconds((props.secondsCount -  minCount * 60));

            if (justSeconds === 0) {
                setSecDigits('00');
            } else if (justSeconds <= 9) {
                setSecDigits('0' + justSeconds);
            } else if (justSeconds <= 59) {
                setSecDigits(justSeconds)
            }

            if (minCount <=9) {
                setMinDigits('0' + minCount.toString())
            } else if (minCount <= 59) {
                setMinDigits(minCount)
            } else {
                console.log("*** Over an HOUR ***")
            }

        }
    



        // if (props.secondsCount === 0) {
        //     setMinCount('0');
        //     setSec_Ones('0')
        //     console.log("should reset minutes here");
        // }

        // // findSeconds(timeVal) {
        // //     if 
        
        // // }

        // // seconds_Ones
        // setSec_Ones(stringNum.slice(-1))

        // if (stringNum < 10) {
        //     setSec_Tens('0');
        //     setMin_Ones('0');
        //     setMin_Tens('0');
        // }
        // else if(stringNum >= 10 && stringNum <= 59) {
        //     setSec_Tens(stringNum.slice(-2, 1));         
        // } else if(stringNum >=60 && stringNum <= 3599) {
            
        //     setMinCount(Math.floor(stringNum / 60).toString()); // try as STRING
        //     setMin_Ones(minCount);
            
        //     if(minCount >= 10 && stringNum <=59) {
        //         // set() //  manage minutes settings here
        //     }

        //     setJustSeconds((props.secondsCount -  minCount * 60).toString());
            
        //     if (justSeconds < 10) {
        //         setSec_Tens('0');
        //     }
        //     else if(justSeconds >= 10 && justSeconds <= 59) {
        //         setSec_Tens(justSeconds.slice(-2, 1)); 
        //     }
        
        // } else {
        //     console.log("we hit 1 hour ")
        // }    


            
        

    
    } , [minCount, props.secondsCount])


    return (
            <DisplayContainerDiv>
                <DisplayDigitContainerDiv>
                    <DisplayDigitText> {minDigits} </DisplayDigitText>
                    <DisplayColonDiv> {colonText} </DisplayColonDiv>
                    <DisplayDigitText> {secDigits} </DisplayDigitText>
                
                
                </DisplayDigitContainerDiv>
            
            
            </DisplayContainerDiv>

    )


}


export default TimerDisplay;
/*
    <DisplayDigitText> {min_Tens} </DisplayDigitText>
    <DisplayDigitText> {min_Ones} </DisplayDigitText>
    <DisplayColonDiv> {colonText} </DisplayColonDiv>
    <DisplayDigitText> {sec_Tens} </DisplayDigitText>
    <DisplayDigitText> {sec_Ones} </DisplayDigitText>
*/    


/*
    <DisplayDigitText> {minDigits} </DisplayDigitText>
    <DisplayColonDiv> {colonText} </DisplayColonDiv>
    <DisplayDigitText> {secDigits} </DisplayDigitText>
*/
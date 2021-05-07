import React, { useEffect, useState } from "react";

const format = time => {
    let minutes = Math.floor(time / 60);
    if(minutes < 10)
    minutes = '0'+ minutes;
    let seconds = time % 60;
    if(seconds < 10)
    seconds = '0'+ seconds;
    return `${minutes}:${seconds}`;
};

const Timer = ({ time, step }) => {
    const [ seconds, setSeconds ] = useState(5);
    const [ secondsTimerTwo, setSecondsTimerTwo ] = useState(time);
    const [ isActive, setIsActive ] = useState(false);
    const [ isActiveTwo, setIsActiveTwo ] = useState(true);

    useEffect(() => {
        if (seconds > 0 && isActive) {
            const timer = setInterval(() =>{
                setSeconds( seconds - 1);
            }, 1000)
            return () => {
                clearInterval(timer);
            }
        } else if(seconds === 0) {
            console.log('Час вийшов!');
            }
    }, [ seconds, isActive ]);

    useEffect(() => {
        if (secondsTimerTwo > 0 && isActiveTwo) {
            const timerTwo = setInterval(() =>{
                setSecondsTimerTwo( secondsTimerTwo - step);
            }, 2000)
            console.log("Залишилось часу: " + (secondsTimerTwo * 1000) + ' мс')

            return () => {
                clearInterval(timerTwo);
            }
        } 
    }, [ secondsTimerTwo, isActiveTwo, step ]);

    return (
        <div>
            <div className='timer'>
                <time className='time'>{format(seconds)}</time>
                <button onClick={() => setIsActive(!isActive) }>{isActive ? 'stop' : 'start'}</button>
            </div>
            <div className='timer'>
                <time className='time'>{format(secondsTimerTwo)}</time>
                <button onClick={() => setIsActiveTwo(!isActiveTwo)}>{isActiveTwo ? 'stop' : 'start'}</button>
            </div>
        </div>
    );
}

export default Timer;


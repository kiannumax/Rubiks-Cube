import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { TimerContext } from '../hoc/contexts/Timer/TimerContext'

export function Timer() {
    const {actualState} = useContext(TimerContext)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        let interval;
        if(actualState.timeState === 'start' || actualState.timeState === 'resume') {
            interval = setInterval(() => {
                if(seconds === 59) {
                    setSeconds(0)
                    setMinutes(minutes + 1)
                    sessionStorage.setItem('minutes', minutes)
                    sessionStorage.setItem('seconds', seconds)
                } else {
                    setSeconds(seconds + 1)
                    sessionStorage.setItem('seconds', seconds)
                }
            }, 1000)  
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [actualState.timeState, seconds, minutes])

    return (
        <p>{minutes}:{seconds > 9 ? seconds : `0${seconds}`}</p>
    )
}

export const TimeButtons = () => {
    const {start, stop, actualState, reset, resume, saveTime} = useContext(TimerContext)
    
        return (
            <> 
                {actualState.timeState === 'reset' || actualState.timeState === 'none' ? 
                <Button className="rubiksButton" variant="success" onClick={start}>Start</Button> :

                actualState.timeState === 'start' ? 
                <Button className="rubiksButton" variant="danger" onClick={stop}>Stop</Button> :

                actualState.timeState === 'resume' ?
                <Button className="rubiksButton" variant="danger" onClick={stop}>Stop</Button> :
                
                <Button className="rubiksButton" variant="success" onClick={resume}>Resume</Button>}
                
                {actualState.timeState === 'stop' ? 
                <>
                    <Button className="rubiksButton" variant="danger" onClick={reset}>Reset</Button>
                    <Button className="rubiksButton" variant="info" onClick={() => {saveTime()}}>Save</Button> 
                </>
                 : null}
            </>
        )   
}
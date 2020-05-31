import React, { useState } from 'react'
import { RubiksCube } from './RubiksCube'
import { Timer } from './Timer'

export const TimerContext = React.createContext(null)

export function RubiksPage() {
    const [timerState, setTimerState] = useState('none')
    const [showTimer, setShowTimer] = useState(false)

    const startTimer = () => {
        setTimerState('start')
        setShowTimer(true)
    }

    const stopTimer = () => {
        setTimerState('stop')
    }

    const resumeTimer = () => {
        setTimerState('resume')
    }

    const resetTimer = () => {
        setTimerState('reset')
        setShowTimer(false)
    }

    return (
        <>
            <div id="time">
                {showTimer === true ? <Timer state={timerState} /> : null }
            </div>
            
            <TimerContext.Provider value={{
                state      : timerState,
                startTimer : startTimer,
                stopTimer  : stopTimer,
                resetTimer : resetTimer,
                resumeTimer: resumeTimer
            }}>
                <RubiksCube />
            </TimerContext.Provider>
        </>
    )
}

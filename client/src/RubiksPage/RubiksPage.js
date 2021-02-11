import React, { useContext } from 'react'
import { TimerContext } from '../hoc/contexts/Timer/TimerContext'
import { MoveState } from '../hoc/contexts/Rubiks/movesContext'
import { ScrambleState } from '../hoc/contexts/Rubiks/scramble/savedScramblesContext'
import { OtherState } from '../hoc/contexts/Rubiks/other/otherContext'
import ButtonSection from './ButtonSection'
import { RubiksCube } from './RubiksCube'
import { Timer } from './Timer'

const Rubiks = () => {

    return (
   <OtherState>
        <RubiksCube />
       
        <ScrambleState>
            <ButtonSection />
        </ScrambleState>  
    </OtherState>
    
    )
}

export function RubiksPage() {
   const {actualState} = useContext(TimerContext)

    return (
        <>
            <div id="time">
                {actualState.timeState === 'reset' || actualState.timeState === 'none' ?
                  null 
                  : 
                  <Timer state={actualState.timeState} />  
                  }
            </div>

            <MoveState>
                <Rubiks />
            </MoveState>
        </>
    )
}

import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { MovesContext } from '../hoc/contexts/Rubiks/movesContext'
import { ScrambleContext } from '../hoc/contexts/Rubiks/scramble/savedScramblesContext'
import { OtherContext } from '../hoc/contexts/Rubiks/other/otherContext'
import { TimeButtons } from './Timer'
import MoveToObject from './Scramble'
import SavedData from './SavedData'
import { TimerContext } from '../hoc/contexts/Timer/TimerContext'

const Moves = () => {
    const { right, left, up, down, front, back, middle, equator, stand, double_right,
        double_left, double_up, double_down, double_front, double_back, anti_right, anti_left, anti_up,
        anti_down, anti_front, anti_back, anti_middle, anti_equator, anti_stand, anti_double_right, 
        anti_double_left, anti_double_up, anti_double_down, anti_double_front, anti_double_back} = useContext(MovesContext);

    return (
        <>
                <Button className="rubiksButton" variant="success" onClick={up}>U</Button>
                <Button className="rubiksButton" variant="success" onClick={anti_up}>U'</Button>
                <Button className="rubiksButton" variant="success" onClick={down}>D</Button>
                <Button className="rubiksButton" variant="success" onClick={anti_down}>D'</Button>
                <Button className="rubiksButton" variant="success" onClick={equator}>E</Button>
                <Button className="rubiksButton" variant="success" onClick={anti_equator}>E'</Button>
                <Button className="rubiksButton" variant="success" onClick={double_up}>Uw</Button>
                <Button className="rubiksButton" variant="success" onClick={anti_double_up}>Uw'</Button>
                <Button className="rubiksButton" variant="success" onClick={double_down}>Dw</Button>
                <Button className="rubiksButton" variant="success" onClick={anti_double_down}>Dw'</Button>
                <Button className="rubiksButton" variant="success" onClick={right}>R</Button>
                <Button className="rubiksButton" variant="success" onClick={anti_right}>R'</Button>
                <Button className="rubiksButton" variant="success" onClick={left}>L</Button>
                <Button className="rubiksButton" variant="success" onClick={anti_left}>L'</Button>
                <Button className="rubiksButton" variant="success" onClick={middle}>M</Button>       
                <Button className="rubiksButton" variant="success" onClick={anti_middle}>M'</Button> 
                <Button className="rubiksButton" variant="success" onClick={double_right}>Rw</Button>   
                <Button className="rubiksButton" variant="success" onClick={anti_double_right}>Rw'</Button>   
                <Button className="rubiksButton" variant="success" onClick={double_left}>Lw</Button>         
                <Button className="rubiksButton" variant="success" onClick={anti_double_left}>Lw'</Button>
                <Button className="rubiksButton" variant="success" onClick={front}>F</Button>
                <Button className="rubiksButton" variant="success" onClick={anti_front}>F'</Button> 
                <Button className="rubiksButton" variant="success" onClick={back}>B</Button>            
                <Button className="rubiksButton" variant="success" onClick={anti_back}>B'</Button>   
                <Button className="rubiksButton" variant="success" onClick={stand}>S</Button>
                <Button className="rubiksButton" variant="success" onClick={anti_stand}>S'</Button> 
                <Button className="rubiksButton" variant="success" onClick={double_front}>Fw</Button>                    
                <Button className="rubiksButton" variant="success" onClick={anti_double_front}>Fw'</Button>                    
                <Button className="rubiksButton" variant="success" onClick={double_back}>Bw</Button>                        
                <Button className="rubiksButton" variant="success" onClick={anti_double_back}>Bw'</Button>   
        </>
    )
}

const OtherButtons = () => {
    const { rotateY, rotateX, refresh } = useContext(MovesContext)
    const { scramble } = useContext(OtherContext)

    return (
        <>
            <Button className="rubiksButton" variant="success" onClick={() => rotateY(-90)}>Y</Button>   
            <Button className="rubiksButton" variant="success" onClick={() => rotateY(90)}>Y'</Button>        
            <Button className="rubiksButton" variant="success" onClick={() => rotateX(-90)}>X</Button>
            <Button className="rubiksButton" variant="success" onClick={() => rotateX(90)}>X'</Button>
            <Button className="rubiksButton" variant="success" onClick={scramble}>Scramble</Button> 
            <Button className="rubiksButton" variant="success" onClick={refresh}>Refresh</Button>
            <TimeButtons /> 
        </>
    )
}

export default function ButtonSection() {
    const [loading, setLoading]                         = useState(true);
    const [toggledState, setToggle]                     = useState('scramble')
    const {getSavedScrambles, saveScramble, unmount, scrambleUpdateData}    = useContext(ScrambleContext)
    const {otherActualState, scrambleClear}             = useContext(OtherContext)
    const {getSavedTimes, timeUnmount, timerUpdateData}                  = useContext(TimerContext)

    useEffect(() => {
        getSavedScrambles()
        getSavedTimes()
        setLoading(false)

        return () => {
            unmount()
            timeUnmount()
        }
         // eslint-disable-next-line
    }, [])

    const toggle = () => {
        if(toggledState === 'scramble') {
            timerUpdateData()
            getSavedTimes()
            setToggle('times')
        } else {
            scrambleUpdateData()
            getSavedScrambles()
            setToggle('scramble')
        }
    }

    return (
        <div id="buttons">
            <div id="savedScrambles">
                <Button className="rubiksButton" variant="info" onClick={toggle} >Toggle</Button>
                { loading ? null : <SavedData context={toggledState} /> }
            </div>
            <div id="moves">
                <Moves />      
            </div>
            <div id="scramble">
                {otherActualState.scrambleArr.length > 0 ? <MoveToObject array={otherActualState.scrambleArr} /> : null}
                <div id="scrambleButtons">
                     {otherActualState.scrambleArr.length >= 15 ? <><Button variant="info" onClick={() => { 
                    saveScramble(otherActualState.scrambleArr)}}> Save</Button> 
                    <Button variant="danger" onClick={scrambleClear}>Clear</Button> </> : null }
                </div>
            </div>
            <div id="otherButtons">
                <OtherButtons />
            </div>
        </div>
    )
}
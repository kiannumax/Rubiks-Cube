import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export default function TimeButtons() {
    const [intervalName, setInName]   = useState(null)
    const [startStopB, setstartStopB] = useState(false)
    const [resetB, setresetB]         = useState(false)
    const [minutes, setminutes]       = useState(0)
    const [seconds, setseconds]       = useState(0)
 
     const startTimer = () => {
         setstartStopB(true)
         let  display = document.querySelector('#time'),
         minutes2 = minutes,
         seconds2 = seconds,
         tiMer = setInterval(() => {
             let seconds3 = seconds2 >= 10 ? seconds2 : `0${seconds2}`
             let timer    = `${minutes2}:${seconds3}`
             seconds2++
             setseconds(seconds2)
             if(seconds2 >= 60) {
                 seconds2 = 0
                 setseconds(seconds2)
                 minutes2++
                 setminutes(minutes2)
             }
             display.textContent = timer
         },1000)
         setInName(tiMer)
     }
 
     const stopTimer = () => {
         setstartStopB(false)
         setresetB(true)
         clearInterval(intervalName)
     }

     const resetTimer = () => {
        setseconds(0);
        setminutes(0);
        setresetB(false)
     }
      
     return( 
         <>
          <Button className="rubiksButton" variant="success" onClick={
          () => startStopB === false ? startTimer() : stopTimer()}>{startStopB === false ? "Start" : "Stop"}</Button>
          {resetB === false ? null : <Button className="rubiksButton" variant="danger" onClick={resetTimer()}>Reset</Button>}
         </>
     )
 }
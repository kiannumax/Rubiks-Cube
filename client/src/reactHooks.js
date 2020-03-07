import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export function TimeButtons() {
    const [intervalName, setInName]   = useState(null)
    const [startStopB, setstartStopB] = useState(false)
    const [resetB, setresetB]         = useState(false)
    const [minutes, setminutes]       = useState(0)
    const [seconds, setseconds]       = useState(0)
 
     const startTimer = () => {
         setstartStopB(true)
         let  display = document.querySelector('#time'),
         tiMer = setInterval(() => {
             let seconds2 = seconds >= 10 ? seconds : `0${seconds}`
             let timer    = `${minutes}:${seconds2}`
             let x = seconds + 1
             setseconds(x)
             if(seconds >= 60) {
                 setseconds(0)
                 setminutes(minutes + 1)
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
          () => startStopB == false ? startTimer() : stopTimer()}>{startStopB == false ? "Start" : "Stop"}</Button>
          {resetB == false ? null : <Button className="rubiksButton" variant="danger" onClick={resetTimer()}>Reset</Button>}
         </>
     )
 }
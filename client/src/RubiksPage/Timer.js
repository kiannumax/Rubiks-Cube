import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import { TimerContext } from './RubiksPage'

export class Timer extends React.Component {

    state = {
        minutes: 0,
        seconds: 0,
        x: 0,
        interval: null,
        intervalFunc: () => {
            if(this.state.seconds === 59) {
                this.setState((prevState) => {
                    return {
                        minutes: prevState.minutes + 1,
                        seconds: 0
                    }
                })
                sessionStorage.setItem('minutes', this.state.minutes)
                sessionStorage.setItem('seconds', this.state.seconds)
            } else {
                this.setState((prevState) => {
                    return {
                        seconds: prevState.seconds + 1
                    }
                })
                sessionStorage.setItem('seconds', this.state.seconds)
            }
        }
    }

    componentDidMount() {
        let tiMer = setInterval(this.state.intervalFunc, 1000)
        this.setState({interval: tiMer})
    }

    componentWillUnmount() {
        sessionStorage.clear()
        clearInterval(this.state.interval)
    }

    componentDidUpdate() {
        if(this.props.state === 'stop') {
                clearInterval(this.state.interval)
                if(this.state.x === 1) {
                    this.setState({x: 0})
                }
        } 
        else if(this.props.state === 'resume') {
                   if(this.state.x === 0) {
                     this.setState({x: 1})
                     let timer = setInterval(this.state.intervalFunc, 1000)
                     this.setState({interval: timer})
                 }
        }
    }

   render() {
       let seconds = this.state.seconds > 9 ? this.state.seconds : `0${this.state.seconds}`;
        return <p>{`${this.state.minutes}:${seconds}`}</p>
   }
    
}

Timer.propTypes = {
    state: PropTypes.string
}

export const TimeButtons = () => (
        <TimerContext.Consumer>
           {({state, startTimer, stopTimer, resetTimer, resumeTimer}) => ( 
               <> 
                {state === 'reset' || state === 'none' ? 
                <Button className="rubiksButton" variant="success" onClick={startTimer}>Start</Button> :
                state === 'start' ? 
                <Button className="rubiksButton" variant="danger" onClick={stopTimer}>Stop</Button> :
                state === 'resume' ?
                <Button className="rubiksButton" variant="danger" onClick={stopTimer}>Stop</Button> :
                <Button className="rubiksButton" variant="success" onClick={resumeTimer}>Resume</Button>}
                
                {state === 'stop' ? <Button className="rubiksButton" variant="danger" onClick={resetTimer}>Reset</Button> : null}
            </>
            )}
        </TimerContext.Consumer>
     )
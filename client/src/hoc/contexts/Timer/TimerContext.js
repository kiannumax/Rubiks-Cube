import React, { useReducer } from 'react'
import { timerReducer } from './TimerReducer'
import { START_TIMER, STOP_TIMER, RESET_TIMER, RESUME_TIMER, LOADING, SAVE_TIME, UNMOUNT,
         UNLOADING, DELETE_TIME, GET_SAVED_TIMES } from './TimerTypes';

export const TimerContext = React.createContext()

export const TimeState = (props) => {
    const [state, dispatch] = useReducer(timerReducer, {storage: null, timeState: 'none', key: 'time', updating: false})

    const start  = () => dispatch({type: START_TIMER});
    const stop   = () => dispatch({type: STOP_TIMER});
    const resume = () => dispatch({type: RESUME_TIMER});
    const unLoading   = () => dispatch({type: UNLOADING})

    const reset  = () => {
        sessionStorage.clear()
        dispatch({type: RESET_TIMER})
    }

    const saveTime = () => {
        dispatch({type: LOADING})
        let storage     = state.storage;
        let secondsData  = sessionStorage.getItem('seconds');
        let minutesData  = sessionStorage.getItem('minutes');
        let seconds = Number(secondsData) < 10 ? `0${secondsData}` : secondsData;
        let minutes = minutesData ? minutesData : 0
        let fullTime = `${minutes}:${seconds}`;

        let timeID = storage.length >= 1 ? storage[storage.length - 1].id : 0
        let newDataArr = storage.concat()
        newDataArr.push({time: fullTime, id: timeID + 1})

        return dispatch({type: SAVE_TIME, payload: newDataArr})
    }

    const remove = (id) => {
        dispatch({type: LOADING})
        let newDataArr = state.storage.concat()
            newDataArr.splice(id, 1)

        return dispatch({type: DELETE_TIME, payload: newDataArr})
    }
 
    const getSavedTimes = () => {
        dispatch({type: LOADING})
        let timeData = localStorage.getItem('timeData')
        let storage = timeData.length >= 1 ? JSON.parse(timeData) : timeData,
            dataArr = [];

        for(let i = 0; i < storage.length; i++) {
            let key = storage[i]
            dataArr.push({id: key.id, time: key.time})
        }
 
       return dispatch({type: GET_SAVED_TIMES, payload: dataArr})
    }

    const timerUpdateData = () => {
        localStorage.setItem('timeData', JSON.stringify(state.storage))
    }

    const timeUnmount = () => {
        sessionStorage.clear()
        dispatch({type: UNMOUNT})
    }  
    

    return (
        <TimerContext.Provider value={{
            start, stop, resume, reset, saveTime, remove, getSavedTimes, timeUnmount, actualState: state,
            updateData: timerUpdateData, unLoading, timerUpdateData
        }}>
            {props.children}
        </TimerContext.Provider>
    )
}
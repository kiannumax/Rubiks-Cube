import { START_TIMER, STOP_TIMER, RESET_TIMER, RESUME_TIMER, LOADING, SAVE_TIME, UNMOUNT,
         UNLOADING, DELETE_TIME, GET_SAVED_TIMES } from './TimerTypes';


const types = {
    [START_TIMER]: state => {
        return {
            ...state, timeState: 'start'
        }
    },

    [STOP_TIMER]: state => {
        return {
            ...state, timeState: 'stop'
        }
    },

    [RESET_TIMER]: state => {
        return {
            ...state, timeState: 'reset'
        }
    },

    [RESUME_TIMER]: state => {
        return {
            ...state, timeState: 'resume'
        }
    },

    [LOADING]: state => {
        return {
            ...state, updating: true
        }
    },

    [SAVE_TIME]: (state, action) => {
        console.log(state.storage, action.payload)
        console.log('..saved')
        return {
           ...state, storage: action.payload
        }
    },

    [UNMOUNT]: () => {
        return {
            storage: null, updating: false, timeState: 'none', key: 'times'
        }
    },

    [UNLOADING]: state => {
        return {
            ...state, updating: false
        }
    },

    [DELETE_TIME]: (state, action) => {
        return {
           ...state, storage: action.payload
        }
    },

    [GET_SAVED_TIMES]: (state, action) => {
        return {
           ...state, storage: action.payload
        }
    },

    DEFAULT: state => state 
}

export const timerReducer = (state, action) => {
   const handler = types[action.type] || types.DEFAULT
   return handler(state, action)
}
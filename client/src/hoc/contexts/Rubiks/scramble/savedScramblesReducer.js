import { SAVE_SCRAMBLE, DELETE_SCRAMBLE, GET_SAVED_SCRAMBLES, UNMOUNT, LOADING, UNLOADING } from './savedScramblesTypes'


const types = {
    [SAVE_SCRAMBLE]: (state, action) => {
        return {
           ...state, storage: action.payload
        }
    },

    [DELETE_SCRAMBLE]: (state, action) => {
        return {
           ...state, storage: action.payload
        }
    },

    [GET_SAVED_SCRAMBLES]: (state, action) => {
        return {
           ...state, storage: action.payload
        }
    },

    [UNMOUNT]: () => {
        return {
            storage: null, updating: false, key: 'moves'
        }
    },

    [LOADING]: state => {
        return {
            ...state, updating: true
        }
    },

    [UNLOADING]: state => {
        return {
            ...state, updating: false
        }
    },

    DEFAULT: (state) => state 
}

export default function ScrambleReducer(state, action)  {
   const handler = types[action.type] || types.DEFAULT
   return handler(state, action)
}
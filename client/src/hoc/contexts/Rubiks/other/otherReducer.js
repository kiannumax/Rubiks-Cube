import { SCRAMBLE, CLEAR_SCRAMBLE_ARR } from './otherTypes'

const types = {
    [SCRAMBLE]: (state, action) => {
        return {
            scrambleArr: action.payload
        }
    },

    [CLEAR_SCRAMBLE_ARR]: state => {
        return {
            scrambleArr: []
        }
    },

    DEFAULT: (state) => state 
}

export default function OtherReducer(state, action)  {
   const handler = types[action.type] || types.DEFAULT
   return handler(state, action)
}
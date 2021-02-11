import React, { useReducer, useContext } from 'react'
import { MovesContext } from '../movesContext'
import OtherReducer from './otherReducer'
import { SCRAMBLE, CLEAR_SCRAMBLE_ARR } from './otherTypes'


export const OtherContext = React.createContext()

export const OtherState = (props) => {
    const [state, dispatch] = useReducer(OtherReducer, {scrambleArr: [] })

    const { right, left, middle, equator, stand, up, down, front, back, double_back, double_down, double_front,
        double_left, double_right, double_up, anti_back, anti_double_back, anti_double_down, anti_double_front,
        anti_double_left, anti_double_right, anti_double_up, anti_equator, anti_front, anti_left, anti_middle,
        anti_down, anti_right, anti_stand, anti_up } = useContext(MovesContext)

    const scrambleClear     = () => dispatch({type: CLEAR_SCRAMBLE_ARR});
    
    const scramble  = () => {
        const randomN = (max,min) => {
            let miN = Math.ceil(min),
                maX = Math.floor(max);
            return Math.floor(Math.random() * (maX - miN) + miN)
        }

        let moves = [right, left, middle, equator, stand, up, down, front, back, double_back, double_down, double_front,
                     double_left, double_right, double_up, anti_back, anti_double_back, anti_double_down, anti_double_front,
                     anti_double_left, anti_double_right, anti_double_up, anti_equator, anti_front, anti_left, anti_middle,
                     anti_down, anti_right, anti_stand, anti_up];   

        let scramble = [],     
            i = 0;

        function cramFunc() {
            if(i++ < 15) {
                let x = randomN(29,0)
                scramble.push(moves[x])
                moves[x]()
                setTimeout(cramFunc, 500)
            }
        }
        cramFunc()
        return dispatch({
            type: SCRAMBLE,
            payload: scramble
        })
    }
    

    return (
        <OtherContext.Provider value={{
          otherActualState: state, scrambleClear, scramble 
        }}>
            {props.children}
        </OtherContext.Provider>
    )
}
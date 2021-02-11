import React, { useReducer, useContext } from 'react'
import { MovesContext } from '../movesContext'
import scrambleReducer from './savedScramblesReducer'
import { DELETE_SCRAMBLE, GET_SAVED_SCRAMBLES, moveNames, SAVE_SCRAMBLE, UNMOUNT, 
         LOADING, UNLOADING } from './savedScramblesTypes'

export const ScrambleContext = React.createContext()

export const ScrambleState = (props) => {
    const [state, dispatch] = useReducer(scrambleReducer, {storage: null, updating: false, key: 'moves'})
    const { right, left, middle, equator, stand, up, down, front, back, double_back, double_down, double_front,
        double_left, double_right, double_up, anti_back, anti_double_back, anti_double_down, anti_double_front,
        anti_double_left, anti_double_right, anti_double_up, anti_equator, anti_front, anti_left, anti_middle,
        anti_down, anti_right, anti_stand, anti_up } = useContext(MovesContext)

    
    const getSavedScrambles  = () => {
        dispatch({type: LOADING})
        let storage = localStorage.getItem('data').length >= 1 ? JSON.parse(localStorage.getItem('data')) : localStorage.getItem('data'),
            dataArr = [];

        for(let i = 0; i < storage.length; i++) {
            let key = storage[i]
            dataArr.push({id: key.id, moves: key.moves})
        }
 
       return dispatch({type: GET_SAVED_SCRAMBLES, payload: dataArr})
    }

    const remove = (id) => {
        dispatch({type: LOADING})
        let newDataArr = state.storage.concat()
            newDataArr.splice(id, 1)
        return dispatch({type: DELETE_SCRAMBLE, payload: newDataArr})
     }

    const saveScramble = (array) => {
        dispatch({type: LOADING})
        let storage = state.storage,
            scrambleArr     = [],
            move    = null;
          
        for(move of array) {
            let moveTitle = move.name
            scrambleArr.push(moveNames[moveTitle])
        }

        let scrambleID = storage.length >= 1 ? storage[storage.length - 1].id : 0
        let newDataArr = storage.concat()
        newDataArr.push({moves: scrambleArr, id: scrambleID + 1})

        return dispatch({type: SAVE_SCRAMBLE, payload: newDataArr})
    }

    const use = (id) => {
        let scramble = state.storage[id].moves,
            move     = null;

            let nameObj = {
                'R': right, 'L': left, 'M': middle, 'E': equator, 'S': stand, 'U': up,'D': down, 'F': front, 'B': back, 'BW': double_back,
                'DW': double_down, 'FW': double_front, 'LW': double_left, 'RW': double_right, 'UW': double_up, [`B'`]: anti_back,
                [`BW'`]: anti_double_back, [`DW'`]: anti_double_down, [`FW'`]: anti_double_front, [`LW'`]: anti_double_left,
                [`RW'`]: anti_double_right, [`UW'`]: anti_double_up, [`E'`]: anti_equator, [`F'`]: anti_front, [`L'`]: anti_left,
                [`M'`]: anti_middle, [`D'`]: anti_down, [`R'`]: anti_right, [`S'`]: anti_stand, [`U'`]: anti_up 
            }

            for(move of scramble) {
                let func = nameObj[move]
                func()
            }
    }

    const scrambleUpdateData = () => {
        localStorage.setItem('data', JSON.stringify(state.storage))
    }

    const unmount   = () => dispatch({type: UNMOUNT})
    const unLoading = () => dispatch({type: UNLOADING})

    return (
        <ScrambleContext.Provider value={{
         actualState: state, remove, getSavedScrambles, saveScramble, unmount, unLoading, scrambleUpdateData, 
         use, updateData: scrambleUpdateData
        }}>
            {props.children}
        </ScrambleContext.Provider>
    )
}
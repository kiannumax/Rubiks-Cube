import React, { useEffect, useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { ScrambleContext } from '../hoc/contexts/Rubiks/scramble/savedScramblesContext.js';
 

const SavedScramble = ({move}) => {
    const {deleteScramble, actualState, UseScramble} = useContext(ScrambleContext)
    let item = actualState.storage[move].moves

    return(
        <li>
            {item.join(', ')} <Button variant="danger" onClick={() => {deleteScramble(move)}}>Delete</Button>
            <Button variant="info" onClick={() => {UseScramble(move)}}>Use</Button>
        </li>
    )
}

export default function SavedScrambles() {
   const [storArr, setStorArr] = useState([])
   const { actualState, updateData, unLoading } = useContext(ScrambleContext)

    useEffect(() => {
        let storage = actualState.storage,
        lenArr = [];
       
        for(let i = 0; i < storage.length; i++) {
            lenArr.push(i)
        }

         setStorArr(lenArr)
         unLoading()
         updateData()

         // eslint-disable-next-line
      }, [actualState.storage]);

    return(
        <ul>
           { actualState.updating ? null : storArr.map((move, index) => {
             return  actualState.storage.length === 0 ? null : <SavedScramble move={move} key={index} />
           })}
        </ul>
    )
}

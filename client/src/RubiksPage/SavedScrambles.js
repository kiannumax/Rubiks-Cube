import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { SaveScrambleContext } from './RubiksCube.js'
 
export function SaveScramble(array, func) {
    let arr = [],
        move = null
    for(move of array) {
        let moveTitle = move.name.toString(),
        x = moveTitle.charAt(9),
        y = moveTitle.charAt(10),
        moveName

        if(y === '_') {
            moveName = `${x}'`
         } else if(y !== 'f') {
             if(moveTitle.charAt(11) === '_') {
                 moveName = `${x}${y}'`
             } else {
             moveName = `${x}${y}`
             }
         } else {
             moveName = `${x}`
         }

        arr.push(moveName)
    }

    func(arr, true)
}

const SavedScrambles3 = props => {
    let item = props.move
    
    return(
        <SaveScrambleContext.Consumer>
        {func => (<li>
            {localStorage.getItem(item)} <Button variant="danger" onClick={() => {func(item, false)}}>delete</Button>
        </li>
        )}
        </SaveScrambleContext.Consumer>
        
    )
}

export function SavedScrambles(props) {
   const [storArr, setStorArr] = useState([])

    useEffect(() => {
        let propLen = props.leng,
        i = 0,
        arr = []

        while(i < propLen) {
           arr.push(i)
            i++
         }
         setStorArr(arr)
      },[props.leng]);

    return(
        <ul>
           {storArr.map((move, index) => {
              let storKey = localStorage.key(move)
             return  props.leng === 0 ? null : <SavedScrambles3 move={storKey} key={index} />
           })}
        </ul>
    )
}

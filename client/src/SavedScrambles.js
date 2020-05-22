import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

export function SaveScramble(array, func) {
    let arr = []
    array.map(move => {
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
    })

    func(arr, true)
}

function SavedScrambles3(props) {
    let item = props.move
    return(
        <li>
            {localStorage.getItem(item)} <Button variant="danger" onClick={() => {props.func(item, false)}}>delete</Button>
        </li>
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
             return  props.leng === 0 ? null : <SavedScrambles3 func={props.func} move={storKey} key={index} />
           })}
        </ul>
    )
}



// export default SavedScrambles()
import React from 'react'
import { moveNames } from '../hoc/contexts/Rubiks/scramble/savedScramblesTypes'

function MoveItem({ move }) {

    // if(Math.random() > 0.5) {
    //     throw new Error('Loh') 
    //     }
    let moveName = moveNames[move.title];

    return(
        <li>
            {moveName}
        </li>
    )
}

function MovesList({ array }) {
    return(
        <>
        <ol id="scrambleList">
            {array.map((move, index) => {
                return <MoveItem move={move} key={index} />
            })}
        </ol>
        </>
    )
}

export default function MoveToObject({ array }) { 
    let arr = [],
        move = null;

    for(move of array) {
        arr.push({title: move.name})
    }
    
    return <MovesList array={arr} />
}

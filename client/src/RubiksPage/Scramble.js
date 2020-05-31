import React from 'react'

function MoveItem({ move }) {

    // if(Math.random() > 0.5) {
    //     throw new Error('Loh') 
    //     }
    
    let moveTitle = move.title.toString(),
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
    
    return(
        <li>
            {moveName}
        </li>
    )
}

function MovesList(props) {
    return(
        <>
        <ol id="scrambleList">
            {props.array.map((move, index) => {
                return <MoveItem move={move} key={index} />
            })}
        </ol>
        </>
    )
}

function MoveToObject(props) { 
    let arr = [],
        move = null
    for(move of props.array) {
        arr.push({title: move.name})
    }
    return <MovesList array={arr} />
}

export default MoveToObject
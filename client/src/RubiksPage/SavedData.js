import React, { useEffect, useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { ScrambleContext } from '../hoc/contexts/Rubiks/scramble/savedScramblesContext';
import { TimerContext } from '../hoc/contexts/Timer/TimerContext';

const DataToLi = ({ index, context }) => {
    const {remove, actualState, use} = useContext(context === 'scramble' ? ScrambleContext : TimerContext)
    console.log(actualState, index)
    let item = actualState.storage[index][actualState.key]

    return(
        <li>
            {item} <Button variant="danger" onClick={() => {remove(index)}}>Delete</Button>
            {context === 'scramble' ? <Button variant="info" onClick={() => {use(index)}}>Use</Button> : null }
        </li>
    )
}

export default function SavedData({ context }) {
    const [storArr, setStorArr] = useState([])
    const { actualState, updateData, unLoading } = useContext(context === 'scramble' ? ScrambleContext : TimerContext)
 
     useEffect(() => {
         console.log(actualState, context)
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
            { actualState.updating ? null : storArr.map((item) => {
              return  actualState.storage.length === 0 ? null : <DataToLi index={item} context={context} key={item.id} />
            })}
         </ul>
     )
 }
 
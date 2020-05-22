import React, { useState } from 'react' 
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import './index.css';
import ErrorBoundary from './hoc/ErrorBoundary.js';
import InputClass from './InputClass.js'
import RubiksCube from './RubiksCube.js'

function PreApp() {

    const [showChallenge, setShowChallenge] = useState(true)
    const [showRubiks, setShowRubiks]       = useState(false)
   
   const handleRubiksShow = () => {
      setShowChallenge(false)
      setShowRubiks(true)
   }

        return (
            <ErrorBoundary>
                {showChallenge ? <InputClass handleShow={handleRubiksShow}/> : null}
                <div id="time"></div>
                {showRubiks ? <div id="rubiks"> <RubiksCube /> </div> : null}
            </ErrorBoundary>
        )
}



ReactDOM.render(
   <PreApp/>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
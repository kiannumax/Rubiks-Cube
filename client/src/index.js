import React from 'react' 
import ReactDOM from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Layout from './hoc/Layout'
import ErrorBoundary from './hoc/ErrorBoundary.js';
import { TimeState } from './hoc/contexts/Timer/TimerContext'
import InputClass from './InputClass.js'
import  { RubiksPage }  from './RubiksPage/RubiksPage.js'

const PreApp = () => (
            <ErrorBoundary>
                <Switch>
                    <Route path='/' exact component={Layout(InputClass, 'input')} />

                    
                        <Route path='/rubiks' render={ () => <TimeState> <RubiksPage /></TimeState>} />
                   

                    <Route render={() => <h2>404 Page not found</h2>} />
                </Switch>
            </ErrorBoundary> 
        )

const App = (
    <BrowserRouter>
        <PreApp />
    </BrowserRouter>
)

ReactDOM.render(
    App,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
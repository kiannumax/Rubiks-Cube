import React from 'react' 
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import './index.css';
import Layout from './hoc/Layout'
import ErrorBoundary from './hoc/ErrorBoundary.js';
import InputClass from './InputClass.js'
import  { RubiksPage }  from './RubiksPage/RubiksPage.js'

const PreApp = () => (
            <ErrorBoundary>
                <Route path='/' component={Layout(InputClass, 'input')} />

                <Route path='/rubiks' component={Layout(RubiksPage, 'rubiks')} />
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
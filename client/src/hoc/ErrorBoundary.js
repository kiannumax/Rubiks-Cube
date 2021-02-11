import React from 'react'

export default class ErrorBoundary extends React.Component {

    state = {
        hasError: false,
        errorInfo: null
    }

    static getDerivedStateFromError() {
        return {hasError: true}
   }

   componentDidCatch(error, info) {
       this.setState({errorInfo: `${error} found it ${info.componentStack}`})
   }

   render() {
       if(this.state.hasError) {
        return( 
            <>
                <h2 style={{color: 'red'}}>Ups... {this.state.errorInfo}</h2>
                <button onClick={() => {this.setState({hasError: false})}}>Click</button>
            </>
         )
       }

       return this.props.children
   }
}

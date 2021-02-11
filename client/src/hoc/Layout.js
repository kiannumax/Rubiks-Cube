import React from 'react'

const Layout = (Component, className) => {
    return props => {
        return (
            <div className={className} >
                <Component {...props} />
            </div>
        )
    }
       
}

export default Layout
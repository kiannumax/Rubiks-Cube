import React, { useReducer } from 'react'
import movesReducer from './movesReducer'
import { RIGHT, LEFT, UP, DOWN, FRONT, BACK, MIDDLE, STAND, EQUATOR, DOUBLE_RIGHT,
    DOUBLE_LEFT, DOUBLE_UP, DOUBLE_DOWN, DOUBLE_FRONT, DOUBLE_BACK, ANTI_RIGHT, ANTI_LEFT,
    ANTI_UP, ANTI_DOWN, ANTI_FRONT, ANTI_BACK, ANTI_MIDDLE, ANTI_EQUATOR, ANTI_STAND,
    ANTI_DOUBLE_RIGHT, ANTI_DOUBLE_LEFT, ANTI_DOUBLE_UP, ANTI_DOUBLE_DOWN, ANTI_DOUBLE_FRONT,
    ANTI_DOUBLE_BACK, ROTATE_X, ROTATE_Y, REFRESH } from './movesTypes'

export const MovesContext = React.createContext()

const initialState = {
    FfRfE: 'blue', FfRsE: 'blue', FfRtE: 'blue', FsRfE: 'blue', FsRsE: 'blue', FsRtE: 'blue', FtRfE: 'blue',
    FtRsE: 'blue', FtRtE: 'blue', LfRfE: 'orange', LfRsE: 'orange', LfRtE: 'orange', LsRfE: 'orange',
    LsRsE: 'orange', LsRtE: 'orange', LtRfE: 'orange', LtRsE: 'orange', LtRtE: 'orange', RfRfE: 'red',
    RfRsE: 'red', RfRtE: 'red', RsRfE: 'red', RsRsE: 'red', RsRtE: 'red', RtRfE: 'red', RtRsE: 'red',
    RtRtE: 'red', BfRfE: 'green', BfRsE: 'green', BfRtE: 'green', BsRfE: 'green', BsRsE: 'green', BsRtE: 'green',
    BtRfE: 'green', BtRsE: 'green', BtRtE: 'green', UfRfE: 'yellow', UfRsE: 'yellow', UfRtE: 'yellow', UsRfE: 'yellow',
    UsRsE: 'yellow', UsRtE: 'yellow', UtRfE: 'yellow', UtRsE: 'yellow', UtRtE: 'yellow', DfRfE: 'white', DfRsE: 'white',
    DfRtE: 'white', DsRfE: 'white', DsRsE: 'white', DsRtE: 'white', DtRfE: 'white', DtRsE: 'white', DtRtE: 'white',
    rotateY: 320, rotateX: 0
}

export const MoveState = (props) => {
    const [state, dispatch] = useReducer(movesReducer, initialState);

    const right                = () => dispatch({type: RIGHT})
    const left                 = () => dispatch({type: LEFT})        
    const up                   = () => dispatch({type: UP})    
    const down                 = () => dispatch({type: DOWN})    
    const front                = () => dispatch({type: FRONT})    
    const back                 = () => dispatch({type: BACK})    
    const middle               = () => dispatch({type: MIDDLE})    
    const equator              = () => dispatch({type: EQUATOR})    
    const stand                = () => dispatch({type: STAND})    
    const double_right         = () => dispatch({type: DOUBLE_RIGHT})    
    const double_left          = () => dispatch({type: DOUBLE_LEFT})    
    const double_up            = () => dispatch({type: DOUBLE_UP}) 
    const double_down          = () => dispatch({type: DOUBLE_DOWN})    
    const double_front         = () => dispatch({type: DOUBLE_FRONT})    
    const double_back          = () => dispatch({type: DOUBLE_BACK})
    const anti_right           = () => dispatch({type: ANTI_RIGHT})
    const anti_left            = () => dispatch({type: ANTI_LEFT})
    const anti_up              = () => dispatch({type: ANTI_UP})    
    const anti_down            = () => dispatch({type: ANTI_DOWN})
    const anti_front           = () => dispatch({type: ANTI_FRONT})
    const anti_back            = () => dispatch({type: ANTI_BACK})
    const anti_middle          = () => dispatch({type: ANTI_MIDDLE})
    const anti_equator         = () => dispatch({type: ANTI_EQUATOR})
    const anti_stand           = () => dispatch({type: ANTI_STAND})
    const anti_double_right    = () => dispatch({type: ANTI_DOUBLE_RIGHT})
    const anti_double_left     = () => dispatch({type: ANTI_DOUBLE_LEFT})    
    const anti_double_up       = () => dispatch({type: ANTI_DOUBLE_UP})  
    const anti_double_down     = () => dispatch({type: ANTI_DOUBLE_DOWN})  
    const anti_double_front    = () => dispatch({type: ANTI_DOUBLE_FRONT})  
    const anti_double_back     = () => dispatch({type: ANTI_DOUBLE_BACK})  
    const rotateY              = number => dispatch({type: ROTATE_Y, payload: number})  
    const rotateX              = number => dispatch({type: ROTATE_X, payload: number})    
    const refresh              = () => dispatch({type: REFRESH})   
    
    return (
        <MovesContext.Provider value={{
            actualState: state, right, left, up, down, front, back, middle, equator, stand, double_right,
            double_left, double_up, double_down, double_front, double_back, anti_right, anti_left, anti_up,
            anti_down, anti_front, anti_back, anti_middle, anti_equator, anti_stand, anti_double_right, refresh, 
            anti_double_left, anti_double_up, anti_double_down, anti_double_front, anti_double_back, rotateX, rotateY
        }}>
            {props.children}
        </MovesContext.Provider>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { TimeButtons } from './Timer.js'
import { SavedScrambles, SaveScramble } from './SavedScrambles.js'
import MoveToObject from './Scramble.js'

export const SaveScrambleContext = React.createContext(null)

export class RubiksCube extends React.Component {
    constructor(props) {
        const b = "blue",
            o = "orange",
            r = "red",
            g = "green",
            y = "yellow",
            w = "white";

            /* FsRfE - Front side second row first element,F/U/B/D - sides,
            f/s/t number of row,R - row,f/s/t - number of element, E - element */
        super(props);
        this.state = {FfRfE: b,FfRsE: b,FfRtE: b,FsRfE: b,FsRsE: b,FsRtE: b,FtRfE: b,FtRsE: b,FtRtE: b,LfRfE: o,LfRsE: o,
        LfRtE: o,LsRfE: o,LsRsE: o,LsRtE: o,LtRfE: o,LtRsE: o,LtRtE: o,RfRfE: r,RfRsE: r,RfRtE: r,RsRfE: r,RsRsE: r,
        RsRtE: r,RtRfE: r,RtRsE: r,RtRtE: r,BfRfE: g,BfRsE: g,BfRtE: g,BsRfE: g,BsRsE: g,BsRtE: g,BtRfE: g,BtRsE: g,
        BtRtE: g,UfRfE: y,UfRsE: y,UfRtE: y,UsRfE: y,UsRsE: y,UsRtE: y,UtRfE: y,UtRsE: y,UtRtE: y,DfRfE: w,DfRsE: w,
        DfRtE: w,DsRfE: w,DsRsE: w,DsRtE: w,DtRfE: w,DtRsE: w,DtRtE: w,rotateY: 320,rotateX: 0,scrambleArr: [],
        storage: localStorage.length, contextValue: this.storageUpdate.bind(this)}

        this.theUfunction   = this.theUfunction.bind(this);
        this.theU_function  = this.theU_function.bind(this);
        this.theDfunction   = this.theDfunction.bind(this);
        this.theD_function  = this.theD_function.bind(this);
        this.theEfunction   = this.theEfunction.bind(this);
        this.theE_function  = this.theE_function.bind(this);
        this.theUWfunction  = this.theUWfunction.bind(this);
        this.theUW_function = this.theUW_function.bind(this);
        this.theDWfunction  = this.theDWfunction.bind(this);
        this.theDW_function = this.theDW_function.bind(this);
        this.theRfunction   = this.theRfunction.bind(this);
        this.theR_function  = this.theR_function.bind(this);
        this.theLfunction   = this.theLfunction.bind(this);
        this.theL_function  = this.theL_function.bind(this);
        this.theMfunction   = this.theMfunction.bind(this);
        this.theM_function  = this.theM_function.bind(this);
        this.theYfunction   = this.theYfunction.bind(this);
        this.theY_function  = this.theY_function.bind(this);
        this.theXfunction   = this.theXfunction.bind(this);
        this.theX_function  = this.theX_function.bind(this);
        this.theRWfunction  = this.theRWfunction.bind(this);
        this.theRW_function = this.theRW_function.bind(this);
        this.theLWfunction  = this.theLWfunction.bind(this);
        this.theLW_function = this.theLW_function.bind(this);
        this.theFfunction   = this.theFfunction.bind(this);
        this.theF_function  = this.theF_function.bind(this);
        this.theBfunction   = this.theBfunction.bind(this);
        this.theB_function  = this.theB_function.bind(this);
        this.theSfunction   = this.theSfunction.bind(this);
        this.theS_function  = this.theS_function.bind(this);
        this.theFWfunction  = this.theFWfunction.bind(this);
        this.theFW_function = this.theFW_function.bind(this);
        this.theBWfunction  = this.theBWfunction.bind(this);
        this.theBW_function = this.theBW_function.bind(this);
        this.theScramble    = this.theScramble.bind(this);  
     //   this.theTimer       = this.theTimer.bind(this);
    }

    componentWillUnmount() {
        this.setState({storage: null, scrambleArr: null, showScrambleButtons: null, contextValue: null})
    }

    theUfunction() {
        this.setState({LfRfE: this.state.FfRfE,LfRsE: this.state.FfRsE,
        LfRtE: this.state.FfRtE,FfRfE: this.state.RfRfE,FfRsE: this.state.RfRsE,FfRtE: this.state.RfRtE,
        RfRfE: this.state.BfRfE,RfRsE: this.state.BfRsE,RfRtE: this.state.BfRtE,BfRfE: this.state.LfRfE,
        BfRsE: this.state.LfRsE,BfRtE: this.state.LfRtE,UfRfE: this.state.UtRfE,UfRsE: this.state.UsRfE,
        UfRtE: this.state.UfRfE,UsRfE: this.state.UtRsE,UsRtE: this.state.UfRsE,UtRfE: this.state.UtRtE,
        UtRsE: this.state.UsRtE,UtRtE: this.state.UfRtE
        })
    }

    theU_function() {
        this.setState({LfRfE:this.state.BfRfE,LfRsE:this.state.BfRsE,LfRtE:this.state.BfRtE,FfRfE: this.state.LfRfE,
        FfRsE:this.state.LfRsE,FfRtE:this.state.LfRtE,RfRfE:this.state.FfRfE,RfRsE:this.state.FfRsE,
        RfRtE:this.state.FfRtE,BfRfE:this.state.RfRfE,BfRsE:this.state.RfRsE,BfRtE:this.state.RfRtE,
        UfRfE: this.state.UfRtE,UfRsE: this.state.UsRtE,UfRtE: this.state.UtRtE,UsRfE: this.state.UfRsE,
        UsRtE: this.state.UtRsE,UtRfE: this.state.UfRfE,UtRsE: this.state.UsRfE,UtRtE: this.state.UtRfE
        })
    }

    theD_function() {
        this.setState({LtRfE: this.state.FtRfE,LtRsE: this.state.FtRsE,
        LtRtE: this.state.FtRtE,FtRfE: this.state.RtRfE,FtRsE: this.state.RtRsE,FtRtE: this.state.RtRtE,
        RtRfE: this.state.BtRfE,RtRsE: this.state.BtRsE,RtRtE: this.state.BtRtE,BtRfE: this.state.LtRfE,
        BtRsE: this.state.LtRsE,BtRtE: this.state.LtRtE,DfRfE: this.state.DfRtE,DfRsE: this.state.DsRtE,
        DfRtE: this.state.DtRtE,DsRfE: this.state.DfRsE,DsRtE: this.state.DtRsE,DtRfE: this.state.DfRfE,
        DtRsE: this.state.DsRfE,DtRtE: this.state.DtRfE
        })
    }

    theDfunction() {
        this.setState({LtRfE: this.state.BtRfE,LtRsE: this.state.BtRsE,
        LtRtE: this.state.BtRtE,FtRfE: this.state.LtRfE,FtRsE: this.state.LtRsE,FtRtE: this.state.LtRtE,
        RtRfE: this.state.FtRfE,RtRsE: this.state.FtRsE,RtRtE: this.state.FtRtE,BtRfE: this.state.RtRfE,
        BtRsE: this.state.RtRsE,BtRtE: this.state.RtRtE,DfRfE: this.state.DtRfE,DfRsE: this.state.DsRfE,
        DfRtE: this.state.DfRfE,DsRfE: this.state.DtRsE,DsRtE: this.state.DfRsE,DtRfE: this.state.DtRtE,
        DtRsE: this.state.DsRtE,DtRtE: this.state.DfRtE
        })
    }

    theEfunction() {
        this.setState({LsRfE: this.state.BsRfE,LsRsE: this.state.BsRsE,
        LsRtE: this.state.BsRtE,FsRfE: this.state.LsRfE,FsRsE: this.state.LsRsE,FsRtE: this.state.LsRtE,
        RsRfE: this.state.FsRfE,RsRsE: this.state.FsRsE,RsRtE: this.state.FsRtE,BsRfE: this.state.RsRfE,
        BsRsE: this.state.RsRsE,BsRtE: this.state.RsRtE
        })
    }

    theE_function() {
        this.setState({LsRfE: this.state.FsRfE,LsRsE: this.state.FsRsE,
        LsRtE: this.state.FsRtE,FsRfE: this.state.RsRfE,FsRsE: this.state.RsRsE,FsRtE: this.state.RsRtE,
        RsRfE: this.state.BsRfE,RsRsE: this.state.BsRsE,RsRtE: this.state.BsRtE,BsRfE: this.state.LsRfE,
        BsRsE: this.state.LsRsE,BsRtE: this.state.LsRtE
        })
    }

    theUWfunction() {
        this.setState({LsRfE: this.state.FsRfE,LsRsE: this.state.FsRsE,
        LsRtE: this.state.FsRtE,FsRfE: this.state.RsRfE,FsRsE: this.state.RsRsE,FsRtE: this.state.RsRtE,
        RsRfE: this.state.BsRfE,RsRsE: this.state.BsRsE,RsRtE: this.state.BsRtE,BsRfE: this.state.LsRfE,
        BsRsE: this.state.LsRsE,BsRtE: this.state.LsRtE,LfRfE: this.state.FfRfE,LfRsE: this.state.FfRsE,
        LfRtE: this.state.FfRtE,FfRfE: this.state.RfRfE,FfRsE: this.state.RfRsE,FfRtE: this.state.RfRtE,
        RfRfE: this.state.BfRfE,RfRsE: this.state.BfRsE,RfRtE: this.state.BfRtE,BfRfE: this.state.LfRfE,
        BfRsE: this.state.LfRsE,BfRtE: this.state.LfRtE,UfRfE: this.state.UtRfE,UfRsE: this.state.UsRfE,
        UfRtE: this.state.UfRfE,UsRfE: this.state.UtRsE,UsRtE: this.state.UfRsE,UtRfE: this.state.UtRtE,
        UtRsE: this.state.UsRtE,UtRtE: this.state.UfRtE
        })
    }

    theUW_function() {
        this.setState({LsRfE: this.state.BsRfE,LsRsE: this.state.BsRsE,
        LsRtE: this.state.BsRtE,FsRfE: this.state.LsRfE,FsRsE: this.state.LsRsE,FsRtE: this.state.LsRtE,
        RsRfE: this.state.FsRfE,RsRsE: this.state.FsRsE,RsRtE: this.state.FsRtE,BsRfE: this.state.RsRfE,
        BsRsE: this.state.RsRsE,BsRtE: this.state.RsRtE,LfRfE: this.state.BfRfE,LfRsE: this.state.BfRsE,
        LfRtE: this.state.BfRtE,FfRfE: this.state.LfRfE,FfRsE: this.state.LfRsE,FfRtE: this.state.LfRtE,
        RfRfE: this.state.FfRfE,RfRsE: this.state.FfRsE,RfRtE: this.state.FfRtE,BfRfE: this.state.RfRfE,
        BfRsE: this.state.RfRsE,BfRtE: this.state.RfRtE,UfRfE: this.state.UfRtE,UfRsE: this.state.UsRtE,
        UfRtE: this.state.UtRtE,UsRfE: this.state.UfRsE,UsRtE: this.state.UtRsE,UtRfE: this.state.UfRfE,
        UtRsE: this.state.UsRfE,UtRtE: this.state.UtRfE
        })
    }

    theDWfunction() {
        this.setState({LsRfE: this.state.BsRfE,LsRsE: this.state.BsRsE,
        LsRtE: this.state.BsRtE,FsRfE: this.state.LsRfE,FsRsE: this.state.LsRsE,FsRtE: this.state.LsRtE,
        RsRfE: this.state.FsRfE,RsRsE: this.state.FsRsE,RsRtE: this.state.FsRtE,BsRfE: this.state.RsRfE,
        BsRsE: this.state.RsRsE,BsRtE: this.state.RsRtE,LtRfE: this.state.BtRfE,LtRsE: this.state.BtRsE,
        LtRtE: this.state.BtRtE,FtRfE: this.state.LtRfE,FtRsE: this.state.LtRsE,FtRtE: this.state.LtRtE,
        RtRfE: this.state.FtRfE,RtRsE: this.state.FtRsE,RtRtE: this.state.FtRtE,BtRfE: this.state.RtRfE,
        BtRsE: this.state.RtRsE,BtRtE: this.state.RtRtE,DfRfE: this.state.DtRfE,DfRsE: this.state.DsRfE,
        DfRtE: this.state.DfRfE,DsRfE: this.state.DtRsE,DsRtE: this.state.DfRsE,DtRfE: this.state.DtRtE,
        DtRsE: this.state.DsRtE,DtRtE: this.state.DfRtE
        })
    }

    theDW_function() {
        this.setState({LsRfE: this.state.FsRfE,LsRsE: this.state.FsRsE,
        LsRtE: this.state.FsRtE,FsRfE: this.state.RsRfE,FsRsE: this.state.RsRsE,FsRtE: this.state.RsRtE,
        RsRfE: this.state.BsRfE,RsRsE: this.state.BsRsE,RsRtE: this.state.BsRtE,BsRfE: this.state.LsRfE,
        BsRsE: this.state.LsRsE,BsRtE: this.state.LsRtE,LtRfE: this.state.FtRfE,LtRsE: this.state.FtRsE,
        LtRtE: this.state.FtRtE,FtRfE: this.state.RtRfE,FtRsE: this.state.RtRsE,FtRtE: this.state.RtRtE,
        RtRfE: this.state.BtRfE,RtRsE: this.state.BtRsE,RtRtE: this.state.BtRtE,BtRfE: this.state.LtRfE,
        BtRsE: this.state.LtRsE,BtRtE: this.state.LtRtE,DfRfE: this.state.DfRtE,DfRsE: this.state.DsRtE,
        DfRtE: this.state.DtRtE,DsRfE: this.state.DfRsE,DsRtE: this.state.DtRsE,DtRfE: this.state.DfRfE,
        DtRsE: this.state.DsRfE,DtRtE: this.state.DtRfE
        })
    }

    theRfunction() {
        this.setState({FfRtE: this.state.DfRtE,FsRtE: this.state.DsRtE,
        FtRtE: this.state.DtRtE,UfRtE: this.state.FfRtE,UsRtE: this.state.FsRtE,UtRtE: this.state.FtRtE,
        BtRfE: this.state.UfRtE,BsRfE: this.state.UsRtE,BfRfE: this.state.UtRtE,DfRtE: this.state.BtRfE,
        DsRtE: this.state.BsRfE,DtRtE: this.state.BfRfE,RfRfE: this.state.RtRfE,RfRsE: this.state.RsRfE,
        RfRtE: this.state.RfRfE,RsRfE: this.state.RtRsE,RsRtE: this.state.RfRsE,RtRfE: this.state.RtRtE,
        RtRsE: this.state.RsRtE,RtRtE: this.state.RfRtE
        })
    }

    theR_function() {
        this.setState({FfRtE: this.state.UfRtE,FsRtE: this.state.UsRtE,
        FtRtE: this.state.UtRtE,UfRtE: this.state.BtRfE,UsRtE: this.state.BsRfE,UtRtE: this.state.BfRfE,
        BfRfE: this.state.DtRtE,BsRfE: this.state.DsRtE,BtRfE: this.state.DfRtE,DfRtE: this.state.FfRtE,
        DsRtE: this.state.FsRtE,DtRtE: this.state.FtRtE,RfRfE: this.state.RfRtE,RfRsE: this.state.RsRtE,
        RfRtE: this.state.RtRtE,RsRfE: this.state.RfRsE,RsRtE: this.state.RtRsE,RtRfE: this.state.RfRfE,
        RtRsE: this.state.RsRfE,RtRtE: this.state.RtRfE
        })
    }

    theL_function() {
        this.setState({FfRfE: this.state.DfRfE,FsRfE: this.state.DsRfE,
        FtRfE: this.state.DtRfE,UfRfE: this.state.FfRfE,UsRfE: this.state.FsRfE,UtRfE: this.state.FtRfE,
        BfRtE: this.state.UtRfE,BsRtE: this.state.UsRfE,BtRtE: this.state.UfRfE,DfRfE: this.state.BtRtE,
        DsRfE: this.state.BsRtE,DtRfE: this.state.BfRtE,LfRfE: this.state.LfRtE,LfRsE: this.state.LsRtE,
        LfRtE: this.state.LtRtE,LsRfE: this.state.LfRsE,LsRtE: this.state.LtRsE,LtRfE: this.state.LfRfE,
        LtRsE: this.state.LsRfE,LtRtE: this.state.LtRfE
        })
    }

    theLfunction() {
        this.setState({FfRfE: this.state.UfRfE,FsRfE: this.state.UsRfE,
        FtRfE: this.state.UtRfE,UfRfE: this.state.BtRtE,UsRfE: this.state.BsRtE,UtRfE: this.state.BfRtE,
        BfRtE: this.state.DtRfE,BsRtE: this.state.DsRfE,BtRtE: this.state.DfRfE,DfRfE: this.state.FfRfE,
        DsRfE: this.state.FsRfE,DtRfE: this.state.FtRfE,LfRfE: this.state.LtRfE,LfRsE: this.state.LsRfE,
        LfRtE: this.state.LfRfE,LsRfE: this.state.LtRsE,LsRtE: this.state.LfRsE,LtRfE: this.state.LtRtE,
        LtRsE: this.state.LsRtE,LtRtE: this.state.LfRtE
        })
    }

    theMfunction() {
        this.setState({FfRsE: this.state.UfRsE,FsRsE: this.state.UsRsE,
        FtRsE: this.state.UtRsE,UfRsE: this.state.BtRsE,UsRsE: this.state.BsRsE,UtRsE: this.state.BfRsE,
        BfRsE: this.state.DtRsE,BsRsE: this.state.DsRsE,BtRsE: this.state.DfRsE,DfRsE: this.state.FfRsE,
        DsRsE: this.state.FsRsE,DtRsE: this.state.FtRsE
        })
    }

    theM_function() {
        this.setState({FfRsE: this.state.DfRsE,FsRsE: this.state.DsRsE,
        FtRsE: this.state.DtRsE,UfRsE: this.state.FfRsE,UsRsE: this.state.FsRsE,UtRsE: this.state.FtRsE,
        BfRsE: this.state.UtRsE,BsRsE: this.state.UsRsE,BtRsE: this.state.UfRsE,DfRsE: this.state.BtRsE,
        DsRsE: this.state.BsRsE,DtRsE: this.state.BfRsE
        })
    }

    theRWfunction() {
        this.setState({FfRsE: this.state.DfRsE,FsRsE: this.state.DsRsE,
        FtRsE: this.state.DtRsE,UfRsE: this.state.FfRsE,UsRsE: this.state.FsRsE,UtRsE: this.state.FtRsE,
        BfRsE: this.state.UtRsE,BsRsE: this.state.UsRsE,BtRsE: this.state.UfRsE,DfRsE: this.state.BtRsE,
        DsRsE: this.state.BsRsE,DtRsE: this.state.BfRsE,FfRtE: this.state.DfRtE,FsRtE: this.state.DsRtE,
        FtRtE: this.state.DtRtE,UfRtE: this.state.FfRtE,UsRtE: this.state.FsRtE,UtRtE: this.state.FtRtE,
        BtRfE: this.state.UfRtE,BsRfE: this.state.UsRtE,BfRfE: this.state.UtRtE,DfRtE: this.state.BtRfE,
        DsRtE: this.state.BsRfE,DtRtE: this.state.BfRfE,RfRfE: this.state.RtRfE,RfRsE: this.state.RsRfE,
        RfRtE: this.state.RfRfE,RsRfE: this.state.RtRsE,RsRtE: this.state.RfRsE,RtRfE: this.state.RtRtE,
        RtRsE: this.state.RsRtE,RtRtE: this.state.RfRtE
        })
    }

    theRW_function() {
        this.setState({FfRsE: this.state.UfRsE,FsRsE: this.state.UsRsE,
        FtRsE: this.state.UtRsE,UfRsE: this.state.BtRsE,UsRsE: this.state.BsRsE,UtRsE: this.state.BfRsE,
        BfRsE: this.state.DtRsE,BsRsE: this.state.DsRsE,BtRsE: this.state.DfRsE,DfRsE: this.state.FfRsE,
        DsRsE: this.state.FsRsE,DtRsE: this.state.FtRsE,FfRtE: this.state.UfRtE,FsRtE: this.state.UsRtE,
        FtRtE: this.state.UtRtE,UfRtE: this.state.BtRfE,UsRtE: this.state.BsRfE,UtRtE: this.state.BfRfE,
        BfRfE: this.state.DtRtE,BsRfE: this.state.DsRtE,BtRfE: this.state.DfRtE,DfRtE: this.state.FfRtE,
        DsRtE: this.state.FsRtE,DtRtE: this.state.FtRtE,RfRfE: this.state.RfRtE,RfRsE: this.state.RsRtE,
        RfRtE: this.state.RtRtE,RsRfE: this.state.RfRsE,RsRtE: this.state.RtRsE,RtRfE: this.state.RfRfE,
        RtRsE: this.state.RsRfE,RtRtE: this.state.RtRfE
        })
    }

    theLWfunction() {
        this.setState({FfRsE: this.state.UfRsE,FsRsE: this.state.UsRsE,
        FtRsE: this.state.UtRsE,UfRsE: this.state.BtRsE,UsRsE: this.state.BsRsE,UtRsE: this.state.BfRsE,
        BfRsE: this.state.DtRsE,BsRsE: this.state.DsRsE,BtRsE: this.state.DfRsE,DfRsE: this.state.FfRsE,
        DsRsE: this.state.FsRsE,DtRsE: this.state.FtRsE,FfRfE: this.state.UfRfE,FsRfE: this.state.UsRfE,
        FtRfE: this.state.UtRfE,UfRfE: this.state.BtRtE,UsRfE: this.state.BsRtE,UtRfE: this.state.BfRtE,
        BfRtE: this.state.DtRfE,BsRtE: this.state.DsRfE,BtRtE: this.state.DfRfE,DfRfE: this.state.FfRfE,
        DsRfE: this.state.FsRfE,DtRfE: this.state.FtRfE,LfRfE: this.state.LtRfE,LfRsE: this.state.LsRfE,
        LfRtE: this.state.LfRfE,LsRfE: this.state.LtRsE,LsRtE: this.state.LfRsE,LtRfE: this.state.LtRtE,
        LtRsE: this.state.LsRtE,LtRtE: this.state.LfRtE
        })
    }

    theLW_function() {
        this.setState({FfRsE: this.state.DfRsE,FsRsE: this.state.DsRsE,
        FtRsE: this.state.DtRsE,UfRsE: this.state.FfRsE,UsRsE: this.state.FsRsE,UtRsE: this.state.FtRsE,
        BfRsE: this.state.UtRsE,BsRsE: this.state.UsRsE,BtRsE: this.state.UfRsE,DfRsE: this.state.BtRsE,
        DsRsE: this.state.BsRsE,DtRsE: this.state.BfRsE,FfRfE: this.state.DfRfE,FsRfE: this.state.DsRfE,
        FtRfE: this.state.DtRfE,UfRfE: this.state.FfRfE,UsRfE: this.state.FsRfE,UtRfE: this.state.FtRfE,
        BfRtE: this.state.UtRfE,BsRtE: this.state.UsRfE,BtRtE: this.state.UfRfE,DfRfE: this.state.BtRtE,
        DsRfE: this.state.BsRtE,DtRfE: this.state.BfRtE,LfRfE: this.state.LfRtE,LfRsE: this.state.LsRtE,
        LfRtE: this.state.LtRtE,LsRfE: this.state.LfRsE,LsRtE: this.state.LtRsE,LtRfE: this.state.LfRfE,
        LtRsE: this.state.LsRfE,LtRtE: this.state.LtRfE
        })
    }

    theFfunction() {
        this.setState({RfRfE: this.state.UtRfE,RsRfE: this.state.UtRsE,
        RtRfE: this.state.UtRtE,UtRfE: this.state.LtRtE,UtRsE: this.state.LsRtE,UtRtE: this.state.LfRtE,
        LfRtE: this.state.DfRfE,LsRtE: this.state.DfRsE,LtRtE: this.state.DfRtE,DfRfE: this.state.RtRfE,
        DfRsE: this.state.RsRfE,DfRtE: this.state.RfRfE,FfRfE: this.state.FtRfE,FfRsE: this.state.FsRfE,
        FfRtE: this.state.FfRfE,FsRfE: this.state.FtRsE,FsRtE: this.state.FfRsE,FtRfE: this.state.FtRtE,
        FtRsE: this.state.FsRtE,FtRtE: this.state.FfRtE
        })
    }

    theF_function() {
        this.setState({RfRfE: this.state.DfRtE,RsRfE: this.state.DfRsE,
        RtRfE: this.state.DfRfE,UtRfE: this.state.RfRfE,UtRsE: this.state.RsRfE,UtRtE: this.state.RtRfE,
        LfRtE: this.state.UtRtE,LsRtE: this.state.UtRsE,LtRtE: this.state.UtRfE,DfRfE: this.state.LfRtE,
        DfRsE: this.state.LsRtE,DfRtE: this.state.LtRtE,FfRfE: this.state.FfRtE,FfRsE: this.state.FsRtE,
        FfRtE: this.state.FtRtE,FsRfE: this.state.FfRsE,FsRtE: this.state.FtRsE,FtRfE: this.state.FfRfE,
        FtRsE: this.state.FsRfE,FtRtE: this.state.FtRfE
        })
    }

    theBfunction() {
        this.setState({RfRtE: this.state.DtRtE,RsRtE: this.state.DtRsE,
        RtRtE: this.state.DtRfE,UfRfE: this.state.RfRtE,UfRsE: this.state.RsRtE,UfRtE: this.state.RtRtE,
        LfRfE: this.state.UfRtE,LsRfE: this.state.UfRsE,LtRfE: this.state.UfRfE,DtRfE: this.state.LfRfE,
        DtRsE: this.state.LsRfE,DtRtE: this.state.LtRfE,BfRfE: this.state.BtRfE,BfRsE: this.state.BsRfE,
        BfRtE: this.state.BfRfE,BsRfE: this.state.BtRsE,BsRtE: this.state.BfRsE,BtRfE: this.state.BtRtE,
        BtRsE: this.state.BsRtE,BtRtE: this.state.BfRtE
        })
    }

    theB_function() {
        this.setState({RfRtE: this.state.UfRfE,RsRtE: this.state.UfRsE,
        RtRtE: this.state.UfRtE,UfRfE: this.state.LtRfE,UfRsE: this.state.LsRfE,UfRtE: this.state.LfRfE,
        LfRfE: this.state.DtRfE,LsRfE: this.state.DtRsE,LtRfE: this.state.DtRtE,DtRfE: this.state.RtRtE,
        DtRsE: this.state.RsRtE,DtRtE: this.state.RfRtE,BfRfE: this.state.BfRtE,BfRsE: this.state.BsRtE,
        BfRtE: this.state.BtRtE,BsRfE: this.state.BfRsE,BsRtE: this.state.BtRsE,BtRfE: this.state.BfRfE,
        BtRsE: this.state.BsRfE,BtRtE: this.state.BtRfE
        })
    }

    theSfunction() {
        this.setState({RfRsE: this.state.UsRfE,RsRsE: this.state.UsRsE,
        RtRsE: this.state.UsRtE,UsRfE: this.state.LtRsE,UsRsE: this.state.LsRsE,UsRtE: this.state.LfRsE,
        LfRsE: this.state.DsRfE,LsRsE: this.state.DsRsE,LtRsE: this.state.DsRtE,DsRfE: this.state.RtRsE,
        DsRsE: this.state.RsRsE,DsRtE: this.state.RfRsE
        })
    }

    theS_function() {
        this.setState({RfRsE: this.state.DsRtE,RsRsE: this.state.DsRsE,
        RtRsE: this.state.DsRfE,UsRfE: this.state.RfRsE,UsRsE: this.state.RsRsE,UsRtE: this.state.RtRsE,
        LfRsE: this.state.UsRtE,LsRsE: this.state.UsRsE,LtRsE: this.state.UsRfE,DsRfE: this.state.LfRsE,
        DsRsE: this.state.LsRsE,DsRtE: this.state.LtRsE
        })
    }

    theFWfunction() {
        this.setState({RfRsE: this.state.UsRfE,RsRsE: this.state.UsRsE,
        RtRsE: this.state.UsRtE,UsRfE: this.state.LtRsE,UsRsE: this.state.LsRsE,UsRtE: this.state.LfRsE,
        LfRsE: this.state.DsRfE,LsRsE: this.state.DsRsE,LtRsE: this.state.DsRtE,DsRfE: this.state.RtRsE,
        DsRsE: this.state.RsRsE,DsRtE: this.state.RfRsE,RfRfE: this.state.UtRfE,RsRfE: this.state.UtRsE,
        RtRfE: this.state.UtRtE,UtRfE: this.state.LtRtE,UtRsE: this.state.LsRtE,UtRtE: this.state.LfRtE,
        LfRtE: this.state.DfRfE,LsRtE: this.state.DfRsE,LtRtE: this.state.DfRtE,DfRfE: this.state.RtRfE,
        DfRsE: this.state.RsRfE,DfRtE: this.state.RfRfE,FfRfE: this.state.FtRfE,FfRsE: this.state.FsRfE,
        FfRtE: this.state.FfRfE,FsRfE: this.state.FtRsE,FsRtE: this.state.FfRsE,FtRfE: this.state.FtRtE,
        FtRsE: this.state.FsRtE,FtRtE: this.state.FfRtE
        })
    }

    theFW_function() {
        this.setState({RfRsE: this.state.DsRtE,RsRsE: this.state.DsRsE,
        RtRsE: this.state.DsRfE,UsRfE: this.state.RfRsE,UsRsE: this.state.RsRsE,UsRtE: this.state.RtRsE,
        LfRsE: this.state.UsRtE,LsRsE: this.state.UsRsE,LtRsE: this.state.UsRfE,DsRfE: this.state.LfRsE,
        DsRsE: this.state.LsRsE,DsRtE: this.state.LtRsE,RfRfE: this.state.DfRtE,RsRfE: this.state.DfRsE,
        RtRfE: this.state.DfRfE,UtRfE: this.state.RfRfE,UtRsE: this.state.RsRfE,UtRtE: this.state.RtRfE,
        LfRtE: this.state.UtRtE,LsRtE: this.state.UtRsE,LtRtE: this.state.UtRfE,DfRfE: this.state.LfRtE,
        DfRsE: this.state.LsRtE,DfRtE: this.state.LtRtE,FfRfE: this.state.FfRtE,FfRsE: this.state.FsRtE,
        FfRtE: this.state.FtRtE,FsRfE: this.state.FfRsE,FsRtE: this.state.FtRsE,FtRfE: this.state.FfRfE,
        FtRsE: this.state.FsRfE,FtRtE: this.state.FtRfE
        })
    }

    theBWfunction() {
        this.setState({RfRsE: this.state.DsRtE,RsRsE: this.state.DsRsE,
        RtRsE: this.state.DsRfE,UsRfE: this.state.RfRsE,UsRsE: this.state.RsRsE,UsRtE: this.state.RtRsE,
        LfRsE: this.state.UsRtE,LsRsE: this.state.UsRsE,LtRsE: this.state.UsRfE,DsRfE: this.state.LfRsE,
        DsRsE: this.state.LsRsE,DsRtE: this.state.LtRsE,RfRtE: this.state.DtRtE,RsRtE: this.state.DtRsE,
        RtRtE: this.state.DtRfE,UfRfE: this.state.RfRtE,UfRsE: this.state.RsRtE,UfRtE: this.state.RtRtE,
        LfRfE: this.state.UfRtE,LsRfE: this.state.UfRsE,LtRfE: this.state.UfRfE,DtRfE: this.state.LfRfE,
        DtRsE: this.state.LsRfE,DtRtE: this.state.LtRfE,BfRfE: this.state.BtRfE,BfRsE: this.state.BsRfE,
        BfRtE: this.state.BfRfE,BsRfE: this.state.BtRsE,BsRtE: this.state.BfRsE,BtRfE: this.state.BtRtE,
        BtRsE: this.state.BsRtE,BtRtE: this.state.BfRtE
        })
    }

    theBW_function() {
        this.setState({RfRsE: this.state.UsRfE,RsRsE: this.state.UsRsE,
        RtRsE: this.state.UsRtE,UsRfE: this.state.LtRsE,UsRsE: this.state.LsRsE,UsRtE: this.state.LfRsE,
        LfRsE: this.state.DsRfE,LsRsE: this.state.DsRsE,LtRsE: this.state.DsRtE,DsRfE: this.state.RtRsE,
        DsRsE: this.state.RsRsE,DsRtE: this.state.RfRsE,RfRtE: this.state.UfRfE,RsRtE: this.state.UfRsE,
        RtRtE: this.state.UfRtE,UfRfE: this.state.LtRfE,UfRsE: this.state.LsRfE,UfRtE: this.state.LfRfE,
        LfRfE: this.state.DtRfE,LsRfE: this.state.DtRsE,LtRfE: this.state.DtRtE,DtRfE: this.state.RtRtE,
        DtRsE: this.state.RsRtE,DtRtE: this.state.RfRtE,BfRfE: this.state.BfRtE,BfRsE: this.state.BsRtE,
        BfRtE: this.state.BtRtE,BsRfE: this.state.BfRsE,BsRtE: this.state.BtRsE,BtRfE: this.state.BfRfE,
        BtRsE: this.state.BsRfE,BtRtE: this.state.BtRfE
        })
    }

    theYfunction() {
        this.setState((prevState) => {
            return {
                rotateY: prevState.rotateY - 90
            }
        })
    }

    theY_function() {
        this.setState((prevState) => {
            return {
                rotateY: prevState.rotateY + 90
            }
        })
    }

    theXfunction() {
        this.setState((prevState) => {
            return {
                rotateX: prevState.rotateX - 90
            }
        })
    }

    theX_function() {
        this.setState((prevState) => {
            return {
                rotateX: prevState.rotateX + 90
            }
        })
    }

    theScramble() { 
        function randomN(max,min) {
            let miN = Math.ceil(min),
                maX = Math.floor(max)
            return Math.floor(Math.random() * (maX - miN) + miN);
        }

        let moves = [this.theDWfunction,this.theD_function,this.theDfunction,this.theE_function,this.theEfunction,
            this.theUfunction,this.theU_function,this.theDW_function,this.theUW_function,this.theUWfunction,
            this.theRfunction,this.theR_function,this.theL_function,this.theLfunction,this.theMfunction,this.theM_function,
            this.theRWfunction,this.theRW_function,this.theLWfunction,this.theLW_function,this.theFfunction,
            this.theF_function,this.theBfunction,this.theB_function,this.theSfunction,this.theS_function,this.theFWfunction,
            this.theFW_function,this.theBWfunction,this.theBW_function]   
            let scramble = []     

            let i = 0
    function cramFunc() {
        if(i++ < 15) {
            let x = randomN(29,0)
            scramble.push(moves[x])
            moves[x]()
               setTimeout(cramFunc, 500)
        }
    }
        cramFunc()
        this.setState({scrambleArr: scramble})
    }

    storageUpdate(key, state) {
           let i = 0,
            y = 0;

            if(this.state.storage !== 0) {
            while(i <= this.state.storage) {
                let x = localStorage.key(i) 

                if(x > y) {
                    y = x
                }

                i++ 
            }
        }
        if(state) {
            localStorage.setItem(y + 1, key)
        } else {
            localStorage.removeItem(key)
        }
    
        this.setState({storage: localStorage.length})
    }

    scrambleClear() {
        this.setState({scrambleArr: []}) 
    }

    render() {
        let y = this.state.rotateY,
            x = this.state.rotateX,
       rotate = {
           transform: `rotateY(${y}deg) rotateX(${x}deg)`
       };
       

        return(
    <>
        <div id="wrap">
            <div id="rubiksCube" style={rotate}>   
                        <div id="UpSide" className="Side">
                            <div id="UpfirstRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.UfRfE}} id="UfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.UfRsE}} id="UfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.UfRtE}} id="UfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="UpSecondRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.UsRfE}} id="UsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.UsRsE}} id="UsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.UsRtE}} id="UsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="UpThirdrow" className="rubiksRow">
                                 <i style={{backgroundColor:this.state.UtRfE}} id="UthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.UtRsE}} id="UthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.UtRtE}} id="UthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                        <div id="LeftSide" className="Side">
                            <div id="LeftFirstRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.LfRfE}} id="LfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.LfRsE}} id="LfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.LfRtE}} id="LfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="LeftSecondRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.LsRfE}} id="LsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.LsRsE}} id="LsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.LsRtE}} id="LsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="LeftThirdrow" className="rubiksRow">
                                 <i style={{backgroundColor:this.state.LtRfE}} id="LthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.LtRsE}} id="LthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.LtRtE}} id="LthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                        <div id="BackSide" className="Side">
                            <div id="BackFirstRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.BfRfE}} id="BfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.BfRsE}} id="BfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.BfRtE}} id="BfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="BackSecondRow" className="rubiksRow">
                                 <i style={{backgroundColor:this.state.BsRfE}} id="BsecondRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.BsRsE}} id="BsecondRsecondElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.BsRtE}} id="BsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="BackThirdrow" className="rubiksRow">
                              <i style={{backgroundColor:this.state.BtRfE}} id="BthirdRfirstElement" className="RubiksElement"></i>
                              <i style={{backgroundColor:this.state.BtRsE}} id="BthirdRfirstElement" className="RubiksElement"></i>
                              <i style={{backgroundColor:this.state.BtRtE}} id="BthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                         <div id="FrontSide" className="Side">
                            <div id="FrontfirstRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.FfRfE}} id="FfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.FfRsE}} id="FfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.FfRtE}} id="FfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="FrontSecondRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.FsRfE}} id="FsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.FsRsE}} id="FsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.FsRtE}} id="FsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="Frontthirdrow" className="rubiksRow">
                                 <i style={{backgroundColor:this.state.FtRfE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.FtRsE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.FtRtE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                        <div id="RightSide" className="Side">
                            <div id="RightFirstRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.RfRfE}} id="RfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.RfRsE}} id="RfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.RfRtE}} id="RfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="RightSecondRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.RsRfE}} id="RsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.RsRsE}} id="RsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.RsRtE}} id="RsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="RightThirdrow" className="rubiksRow">
                                 <i style={{backgroundColor:this.state.RtRfE}} id="RthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.RtRsE}} id="RthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.RtRtE}} id="RthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                        <div id="DownSide" className="Side">
                            <div id="DownFirstRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.DfRfE}} id="FfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.DfRsE}} id="FfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.DfRtE}} id="FfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="DownSecondRow" className="rubiksRow">
                                <i style={{backgroundColor:this.state.DsRfE}} id="FsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.DsRsE}} id="FsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor:this.state.DsRtE}} id="FsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="DownThirdrow" className="rubiksRow">
                                 <i style={{backgroundColor:this.state.DtRfE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.DtRsE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor:this.state.DtRtE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>
            </div>
        </div>
        <div id="buttons">
            <div id="savedScrambles">
                <SaveScrambleContext.Provider value={this.state.contextValue}>
                    <SavedScrambles leng={this.state.storage} />
                </SaveScrambleContext.Provider> 
            </div>
            <div id="moves">
             <Button className="rubiksButton" variant="success" onClick={this.theUfunction}>U</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theU_function}>U'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theDfunction}>D</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theD_function}>D'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theEfunction}>E</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theE_function}>E'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theUWfunction}>Uw</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theUW_function}>Uw'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theDWfunction}>Dw</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theDW_function}>Dw'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theRfunction}>R</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theR_function}>R'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theLfunction}>L</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theL_function}>L'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theMfunction}>M</Button>       
             <Button className="rubiksButton" variant="success" onClick={this.theM_function}>M'</Button> 
             <Button className="rubiksButton" variant="success" onClick={this.theRWfunction}>Rw</Button>   
             <Button className="rubiksButton" variant="success" onClick={this.theRW_function}>Rw'</Button>   
             <Button className="rubiksButton" variant="success" onClick={this.theLWfunction}>Lw</Button>         
             <Button className="rubiksButton" variant="success" onClick={this.theLW_function}>Lw'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theFfunction}>F</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theF_function}>F'</Button> 
             <Button className="rubiksButton" variant="success" onClick={this.theBfunction}>B</Button>            
             <Button className="rubiksButton" variant="success" onClick={this.theB_function}>B'</Button>   
             <Button className="rubiksButton" variant="success" onClick={this.theSfunction}>S</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theS_function}>S'</Button> 
             <Button className="rubiksButton" variant="success" onClick={this.theFWfunction}>Fw</Button>                    
             <Button className="rubiksButton" variant="success" onClick={this.theFW_function}>Fw'</Button>                    
             <Button className="rubiksButton" variant="success" onClick={this.theBWfunction}>Bw</Button>                        
             <Button className="rubiksButton" variant="success" onClick={this.theBW_function}>Bw'</Button>                                                    
            </div>
            <div id="scramble">
            {this.state.scrambleArr.length > 0 ? <MoveToObject array={this.state.scrambleArr} /> : null}
            <div id="scrambleButtons">
            {this.state.scrambleArr.length >= 15 ? <><Button variant="info" onClick={() => { 
                SaveScramble(this.state.scrambleArr, this.storageUpdate.bind(this))}}> save</Button> 
                <Button variant="danger" onClick={this.scrambleClear.bind(this)}>Clear</Button> </> : null }
            </div>
            </div>
            <div id="otherButtons">
             <Button className="rubiksButton" variant="success" onClick={this.theYfunction}>Y</Button>   
             <Button className="rubiksButton" variant="success" onClick={this.theY_function}>Y'</Button>        
             <Button className="rubiksButton" variant="success" onClick={this.theXfunction}>X</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theX_function}>X'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theScramble}>Scramble</Button> 
             {/* {scrambleDiv ? <Button variant="info" onClick={() => { SaveScramble(this.state.scrambleArr, this.storageUpdate.bind(this))}}>
                                     save</Button> : null } */}
                <TimeButtons /> 
            </div>
        </div>
    </>
        )
    }
}
            
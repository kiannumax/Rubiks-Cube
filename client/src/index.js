import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class RubiksCube extends React.Component {
    constructor(props) {
        let b = "blue",
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
        DfRtE: w,DsRfE: w,DsRsE: w,DsRtE: w,DtRfE: w,DtRsE: w,DtRtE: w,rotateY: 320,rotateX: 0}

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
        this.theScramble    = this.theScramble.bind(this);  
    }

    theUfunction() {
        this.setState({LfRfE: this.state.FfRfE,LfRsE: this.state.FfRsE,
        LfRtE: this.state.FfRtE,FfRfE: this.state.RfRfE,FfRsE: this.state.RfRsE,FfRtE: this.state.RfRtE,
        RfRfE: this.state.BfRfE,RfRsE: this.state.BfRsE,RfRtE: this.state.BfRtE,BfRfE: this.state.LfRfE,
        BfRsE: this.state.LfRsE,BfRtE: this.state.LfRtE,UfRfE: this.state.UfRtE,UfRsE: this.state.UsRtE,
        UfRtE: this.state.UtRtE,UsRfE: this.state.UfRsE,UsRtE: this.state.UtRsE,UtRfE: this.state.UfRfE,
        UtRsE: this.state.UsRfE,UtRtE: this.state.UtRfE
        })
    }

    theU_function() {
        this.setState({LfRfE:this.state.BfRfE,LfRsE:this.state.BfRsE,LfRtE:this.state.BfRtE,FfRfE: this.state.LfRfE,
        FfRsE:this.state.LfRsE,FfRtE:this.state.LfRtE,RfRfE:this.state.FfRfE,RfRsE:this.state.FfRsE,
        RfRtE:this.state.FfRtE,BfRfE:this.state.RfRfE,BfRsE:this.state.RfRsE,BfRtE:this.state.RfRtE,
        UfRfE: this.state.UtRfE,UfRsE: this.state.UsRfE, UfRtE: this.state.UfRfE,UsRfE: this.state.UtRsE,
        UsRtE: this.state.UfRsE,UtRfE: this.state.UtRtE,UtRsE: this.state.UsRtE,UtRtE: this.state.UfRtE
        })
    }

    theD_function() {
        this.setState({LtRfE: this.state.FtRfE,LtRsE: this.state.FtRsE,
        LtRtE: this.state.FtRtE,FtRfE: this.state.RtRfE,FtRsE: this.state.RtRsE,FtRtE: this.state.RtRtE,
        RtRfE: this.state.BtRfE,RtRsE: this.state.BtRsE,RtRtE: this.state.BtRtE,BtRfE: this.state.LtRfE,
        BtRsE: this.state.LtRsE,BtRtE: this.state.LtRtE,DfRfE: this.state.DtRfE,DfRsE: this.state.DsRfE,
        DfRtE: this.state.DfRfE,DsRfE: this.state.DtRsE,DsRtE: this.state.DfRsE,DtRfE: this.state.DtRtE,
        DtRsE: this.state.DsRtE,DtRtE: this.state.DfRtE
        })
    }

    theDfunction() {
        this.setState({LtRfE: this.state.BtRfE,LtRsE: this.state.BtRsE,
        LtRtE: this.state.BtRtE,FtRfE: this.state.LtRfE,FtRsE: this.state.LtRsE,FtRtE: this.state.LtRtE,
        RtRfE: this.state.FtRfE,RtRsE: this.state.FtRsE,RtRtE: this.state.FtRtE,BtRfE: this.state.RtRfE,
        BtRsE: this.state.RtRsE,BtRtE: this.state.RtRtE,DfRfE: this.state.DfRtE,DfRsE: this.state.DsRtE,
        DfRtE: this.state.DtRtE,DsRfE: this.state.DfRsE,DsRtE: this.state.DtRsE,DtRfE: this.state.DfRfE,
        DtRsE: this.state.DsRfE,DtRtE: this.state.DtRfE
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
        BfRsE: this.state.LfRsE,BfRtE: this.state.LfRtE,UfRfE: this.state.UfRtE,UfRsE: this.state.UsRtE,
        UfRtE: this.state.UtRtE,UsRfE: this.state.UfRsE,UsRtE: this.state.UtRsE,UtRfE: this.state.UfRfE,
        UtRsE: this.state.UsRfE,UtRtE: this.state.UtRfE
        })
    }

    theUW_function() {
        this.setState({LsRfE: this.state.BsRfE,LsRsE: this.state.BsRsE,
        LsRtE: this.state.BsRtE,FsRfE: this.state.LsRfE,FsRsE: this.state.LsRsE,FsRtE: this.state.LsRtE,
        RsRfE: this.state.FsRfE,RsRsE: this.state.FsRsE,RsRtE: this.state.FsRtE,BsRfE: this.state.RsRfE,
        BsRsE: this.state.RsRsE,BsRtE: this.state.RsRtE,LfRfE: this.state.BfRfE,LfRsE: this.state.BfRsE,
        LfRtE: this.state.BfRtE,FfRfE: this.state.LfRfE,FfRsE: this.state.LfRsE,FfRtE: this.state.LfRtE,
        RfRfE: this.state.FfRfE,RfRsE: this.state.FfRsE,RfRtE: this.state.FfRtE,BfRfE: this.state.RfRfE,
        BfRsE: this.state.RfRsE,BfRtE: this.state.RfRtE,UfRfE: this.state.UtRfE,UfRsE: this.state.UsRfE,
        UfRtE: this.state.UfRfE,UsRfE: this.state.UtRsE,UsRtE: this.state.UfRsE,UtRfE: this.state.UtRtE,
        UtRsE: this.state.UsRtE,UtRtE: this.state.UfRtE
        })
    }

    theDWfunction() {
        this.setState({LsRfE: this.state.BsRfE,LsRsE: this.state.BsRsE,
        LsRtE: this.state.BsRtE,FsRfE: this.state.LsRfE,FsRsE: this.state.LsRsE,FsRtE: this.state.LsRtE,
        RsRfE: this.state.FsRfE,RsRsE: this.state.FsRsE,RsRtE: this.state.FsRtE,BsRfE: this.state.RsRfE,
        BsRsE: this.state.RsRsE,BsRtE: this.state.RsRtE,LtRfE: this.state.BtRfE,LtRsE: this.state.BtRsE,
        LtRtE: this.state.BtRtE,FtRfE: this.state.LtRfE,FtRsE: this.state.LtRsE,FtRtE: this.state.LtRtE,
        RtRfE: this.state.FtRfE,RtRsE: this.state.FtRsE,RtRtE: this.state.FtRtE,BtRfE: this.state.RtRfE,
        BtRsE: this.state.RtRsE,BtRtE: this.state.RtRtE,DfRfE: this.state.DfRtE,DfRsE: this.state.DsRtE,
        DfRtE: this.state.DtRtE,DsRfE: this.state.DfRsE,DsRtE: this.state.DtRsE,DtRfE: this.state.DfRfE,
        DtRsE: this.state.DsRfE,DtRtE: this.state.DtRfE
        })
    }

    theDW_function() {
        this.setState({LsRfE: this.state.FsRfE,LsRsE: this.state.FsRsE,
        LsRtE: this.state.FsRtE,FsRfE: this.state.RsRfE,FsRsE: this.state.RsRsE,FsRtE: this.state.RsRtE,
        RsRfE: this.state.BsRfE,RsRsE: this.state.BsRsE,RsRtE: this.state.BsRtE,BsRfE: this.state.LsRfE,
        BsRsE: this.state.LsRsE,BsRtE: this.state.LsRtE,LtRfE: this.state.FtRfE,LtRsE: this.state.FtRsE,
        LtRtE: this.state.FtRtE,FtRfE: this.state.RtRfE,FtRsE: this.state.RtRsE,FtRtE: this.state.RtRtE,
        RtRfE: this.state.BtRfE,RtRsE: this.state.BtRsE,RtRtE: this.state.BtRtE,BtRfE: this.state.LtRfE,
        BtRsE: this.state.LtRsE,BtRtE: this.state.LtRtE,DfRfE: this.state.DtRfE,DfRsE: this.state.DsRfE,
        DfRtE: this.state.DfRfE,DsRfE: this.state.DtRsE,DsRtE: this.state.DfRsE,DtRfE: this.state.DtRtE,
        DtRsE: this.state.DsRtE,DtRtE: this.state.DfRtE
        })
    }

    theRfunction() {
        this.setState({FfRtE: this.state.DtRtE,FsRtE: this.state.DsRtE,
        FtRtE: this.state.DfRtE,UfRtE: this.state.FtRtE,UsRtE: this.state.FsRtE,UtRtE: this.state.FfRtE,
        BtRfE: this.state.UtRtE,BsRfE: this.state.UsRtE,BfRfE: this.state.UfRtE,DfRtE: this.state.BfRfE,
        DsRtE: this.state.BsRfE,DtRtE: this.state.BtRfE,RfRfE: this.state.RtRfE,RfRsE: this.state.RsRfE,
        RfRtE: this.state.RfRfE,RsRfE: this.state.RtRsE,RsRtE: this.state.RfRsE,RtRfE: this.state.RtRtE,
        RtRsE: this.state.RsRtE,RtRtE: this.state.RfRtE
        })
    }

    theR_function() {
        this.setState({FfRtE: this.state.UtRtE,FsRtE: this.state.UsRtE,
        FtRtE: this.state.UfRtE,UfRtE: this.state.BfRfE,UsRtE: this.state.BsRfE,UtRtE: this.state.BtRfE,
        BfRfE: this.state.DfRtE,BsRfE: this.state.DsRtE,BtRfE: this.state.DtRtE,DfRtE: this.state.FtRtE,
        DsRtE: this.state.FsRtE,DtRtE: this.state.FfRtE,RfRfE: this.state.RfRtE,RfRsE: this.state.RsRtE,
        RfRtE: this.state.RtRtE,RsRfE: this.state.RfRsE,RsRtE: this.state.RtRsE,RtRfE: this.state.RfRfE,
        RtRsE: this.state.RsRfE,RtRtE: this.state.RtRfE
        })
    }

    theL_function() {
        this.setState({FfRfE: this.state.DtRfE,FsRfE: this.state.DsRfE,
        FtRfE: this.state.DfRfE,UfRfE: this.state.FtRfE,UsRfE: this.state.FsRfE,UtRfE: this.state.FfRfE,
        BfRtE: this.state.UfRfE,BsRtE: this.state.UsRfE,BtRtE: this.state.UtRfE,DfRfE: this.state.BfRtE,
        DsRfE: this.state.BsRtE,DtRfE: this.state.BtRtE,LfRfE: this.state.LfRtE,LfRsE: this.state.LsRtE,
        LfRtE: this.state.LtRtE,LsRfE: this.state.LfRsE,LsRtE: this.state.LtRsE,LtRfE: this.state.LfRfE,
        LtRsE: this.state.LsRfE,LtRtE: this.state.LtRfE
        })
    }

    theLfunction() {
        this.setState({FfRfE: this.state.UtRfE,FsRfE: this.state.UsRfE,
        FtRfE: this.state.UfRfE,UfRfE: this.state.BfRtE,UsRfE: this.state.BsRtE,UtRfE: this.state.BtRtE,
        BfRtE: this.state.DfRfE,BsRtE: this.state.DsRfE,BtRtE: this.state.DtRfE,DfRfE: this.state.FtRfE,
        DsRfE: this.state.FsRfE,DtRfE: this.state.FfRfE,LfRfE: this.state.LtRfE,LfRsE: this.state.LsRfE,
        LfRtE: this.state.LfRfE,LsRfE: this.state.LtRsE,LsRtE: this.state.LfRsE,LtRfE: this.state.LtRtE,
        LtRsE: this.state.LsRtE,LtRtE: this.state.LfRtE
        })
    }

    theMfunction() {
        this.setState({FfRsE: this.state.UtRsE,FsRsE: this.state.UsRsE,
        FtRsE: this.state.UfRsE,UfRsE: this.state.BfRsE,UsRsE: this.state.BsRsE,UtRsE: this.state.BtRsE,
        BfRsE: this.state.DfRsE,BsRsE: this.state.DsRsE,BtRsE: this.state.DtRsE,DfRsE: this.state.FtRsE,
        DsRsE: this.state.FsRsE,DtRsE: this.state.FfRsE
        })
    }

    theM_function() {
        this.setState({FfRsE: this.state.DtRsE,FsRsE: this.state.DsRsE,
        FtRsE: this.state.DfRsE,UfRsE: this.state.FtRsE,UsRsE: this.state.FsRsE,UtRsE: this.state.FfRsE,
        BfRsE: this.state.UfRsE,BsRsE: this.state.UsRsE,BtRsE: this.state.UtRsE,DfRsE: this.state.BfRsE,
        DsRsE: this.state.BsRsE,DtRsE: this.state.BtRsE
        })
    }

    theRWfunction() {
        this.setState({FfRsE: this.state.DtRsE,FsRsE: this.state.DsRsE,
        FtRsE: this.state.DfRsE,UfRsE: this.state.FtRsE,UsRsE: this.state.FsRsE,UtRsE: this.state.FfRsE,
        BfRsE: this.state.UfRsE,BsRsE: this.state.UsRsE,BtRsE: this.state.UtRsE,DfRsE: this.state.BfRsE,
        DsRsE: this.state.BsRsE,DtRsE: this.state.BtRsE,FfRtE: this.state.DtRtE,FsRtE: this.state.DsRtE,
        FtRtE: this.state.DfRtE,UfRtE: this.state.FtRtE,UsRtE: this.state.FsRtE,UtRtE: this.state.FfRtE,
        BtRfE: this.state.UtRtE,BsRfE: this.state.UsRtE,BfRfE: this.state.UfRtE,DfRtE: this.state.BfRfE,
        DsRtE: this.state.BsRfE,DtRtE: this.state.BtRfE,RfRfE: this.state.RtRfE,RfRsE: this.state.RsRfE,
        RfRtE: this.state.RfRfE,RsRfE: this.state.RtRsE,RsRtE: this.state.RfRsE,RtRfE: this.state.RtRtE,
        RtRsE: this.state.RsRtE,RtRtE: this.state.RfRtE
        })
    }

    theRW_function() {
        this.setState({FfRsE: this.state.UtRsE,FsRsE: this.state.UsRsE,
        FtRsE: this.state.UfRsE,UfRsE: this.state.BfRsE,UsRsE: this.state.BsRsE,UtRsE: this.state.BtRsE,
        BfRsE: this.state.DfRsE,BsRsE: this.state.DsRsE,BtRsE: this.state.DtRsE,DfRsE: this.state.FtRsE,
        DsRsE: this.state.FsRsE,DtRsE: this.state.FfRsE,FfRtE: this.state.UtRtE,FsRtE: this.state.UsRtE,
        FtRtE: this.state.UfRtE,UfRtE: this.state.BfRfE,UsRtE: this.state.BsRfE,UtRtE: this.state.BtRfE,
        BfRfE: this.state.DfRtE,BsRfE: this.state.DsRtE,BtRfE: this.state.DtRtE,DfRtE: this.state.FtRtE,
        DsRtE: this.state.FsRtE,DtRtE: this.state.FfRtE,RfRfE: this.state.RfRtE,RfRsE: this.state.RsRtE,
        RfRtE: this.state.RtRtE,RsRfE: this.state.RfRsE,RsRtE: this.state.RtRsE,RtRfE: this.state.RfRfE,
        RtRsE: this.state.RsRfE,RtRtE: this.state.RtRfE
        })
    }

    theLWfunction() {
        this.setState({FfRsE: this.state.UtRsE,FsRsE: this.state.UsRsE,
        FtRsE: this.state.UfRsE,UfRsE: this.state.BfRsE,UsRsE: this.state.BsRsE,UtRsE: this.state.BtRsE,
        BfRsE: this.state.DfRsE,BsRsE: this.state.DsRsE,BtRsE: this.state.DtRsE,DfRsE: this.state.FtRsE,
        DsRsE: this.state.FsRsE,DtRsE: this.state.FfRsE,FfRfE: this.state.UtRfE,FsRfE: this.state.UsRfE,
        FtRfE: this.state.UfRfE,UfRfE: this.state.BfRtE,UsRfE: this.state.BsRtE,UtRfE: this.state.BtRtE,
        BfRtE: this.state.DfRfE,BsRtE: this.state.DsRfE,BtRtE: this.state.DtRfE,DfRfE: this.state.FtRfE,
        DsRfE: this.state.FsRfE,DtRfE: this.state.FfRfE,LfRfE: this.state.LtRfE,LfRsE: this.state.LsRfE,
        LfRtE: this.state.LfRfE,LsRfE: this.state.LtRsE,LsRtE: this.state.LfRsE,LtRfE: this.state.LtRtE,
        LtRsE: this.state.LsRtE,LtRtE: this.state.LfRtE
        })
    }

    theLW_function() {
        this.setState({FfRsE: this.state.DtRsE,FsRsE: this.state.DsRsE,
        FtRsE: this.state.DfRsE,UfRsE: this.state.FtRsE,UsRsE: this.state.FsRsE,UtRsE: this.state.FfRsE,
        BfRsE: this.state.UfRsE,BsRsE: this.state.UsRsE,BtRsE: this.state.UtRsE,DfRsE: this.state.BfRsE,
        DsRsE: this.state.BsRsE,DtRsE: this.state.BtRsE,FfRfE: this.state.DtRfE,FsRfE: this.state.DsRfE,
        FtRfE: this.state.DfRfE,UfRfE: this.state.FtRfE,UsRfE: this.state.FsRfE,UtRfE: this.state.FfRfE,
        BfRtE: this.state.UfRfE,BsRtE: this.state.UsRfE,BtRtE: this.state.UtRfE,DfRfE: this.state.BfRtE,
        DsRfE: this.state.BsRtE,DtRfE: this.state.BtRtE,LfRfE: this.state.LfRtE,LfRsE: this.state.LsRtE,
        LfRtE: this.state.LtRtE,LsRfE: this.state.LfRsE,LsRtE: this.state.LtRsE,LtRfE: this.state.LfRfE,
        LtRsE: this.state.LsRfE,LtRtE: this.state.LtRfE
        })
    }

    theYfunction() {
        let curDeg = this.state.rotateY;
        this.setState({rotateY: curDeg - 90})
    }

    theY_function() {
        let curDeg = this.state.rotateY;
        this.setState({rotateY: curDeg + 90})
    }

    theXfunction() {
        let curDeg = this.state.rotateX;
        this.setState({rotateX: curDeg - 90})
    }

    theX_function() {
        let curDeg = this.state.rotateX
        this.setState({rotateX: curDeg + 90})
    }

    theScramble() {
        function randomN(max,min) {
            let miN = Math.ceil(min),
                maX = Math.floor(max)
            return Math.floor(Math.random() * (maX - miN) + miN);
        }
        let moves = [this.theDWfunction,this.theD_function,this.theDfunction,this.theE_function,this.theEfunction,
                     this.theUfunction,this.theU_function,this.theDW_function,this.theUW_function,this.theUWfunction,
                     this.theRfunction,this.theR_function,this.theL_function,this.theLfunction,this.theMfunction,this.theM_function]        
        for(let i = 0;i < 15;i++) {
           let x = randomN(16,0)
            moves[x]()
        }
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
            </div>
            <div id="otherButtons">
             <Button className="rubiksButton" variant="success" onClick={this.theYfunction}>Y</Button>   
             <Button className="rubiksButton" variant="success" onClick={this.theY_function}>Y'</Button>        
             <Button className="rubiksButton" variant="success" onClick={this.theXfunction}>X</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theX_function}>X'</Button>
             <Button className="rubiksButton" variant="success" onClick={this.theScramble}>Scramble</Button> 
            </div>
        </div>
    </>
        )
    }
}

class Challenge1 extends React.Component {
    constructor(props) {
        super(props);
        this.state        = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputRef     = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
   
    handleSubmit() {
        let character = /*String.fromCodePoint */(this.props.number)
        if(this.state.value === character) {
            ReactDOM.render(
                <RubiksCube />,
                document.getElementById("rubiks")
            )
        }
    }
 
    render() {
        return (
            <div className="card" id="challenge1Id">
            <div className="card-body">    
                <label id="cardText" htmlFor="cardInput">C<em id="neverId">h</em>a<em id="neverId">ll</em>
                        eng<em id="neverId">e #</em>1</label> <br/>
                <input type="text" value={this.state.value} id="cardInput"
                    onChange={this.handleChange} ref={this.inputRef} />
                <button style={{outline:"none"}} type="button" className="btn-sm btn-danger" 
                 onClick={this.handleSubmit}>Next 
                </button> 
            </div>
        </div>
        )
    }
}

function clear(interval,array,number) {
     clearInterval(interval);

     var timer = 60 * 15, display = document.querySelector('#time'),minutes, seconds;
     setInterval(function () {
         minutes = parseInt(timer / 60, 10);
         seconds = parseInt(timer % 60, 10);
 
         minutes = minutes < 10 ? "0" + minutes : minutes;
         seconds = seconds < 10 ? "0" + seconds : seconds;
 
         display.textContent = minutes + ":" + seconds;
 
         if (--timer < 0) {
             timer = 60 * 15;
         }
     }, 1000);

    ReactDOM.render (
        <Challenge1 binary={array} number={number}/>,
        document.getElementById('challengeOne')
    )
}

function MainContent(number) {
   var
        numberX2  = number * 2,
        binary = Number(numberX2).toString(2),
        bit8   = ("00000000" + binary).slice(-8),
        bit8EveryLetter = [];

   for(var txt of bit8) {
        bit8EveryLetter.push(txt)
   } 

var   
      //BackColor = window.getComputedStyle( document.body ,null).getPropertyValue('background-color'),
      BackColor = 'white',
      canv      = document.getElementById('canvas'),
      ctx       = canv.getContext('2d'),
      arcRadius = 20;

      canv.height = window.innerHeight;
      canv.width  = window.innerWidth;

      ctx.strokeStyle = 'black'
      ctx.lineWidth   = 16;
      ctx.arc(canv.width / 2,canv.height / 2,arcRadius,0,Math.PI * 2);
      ctx.stroke();
      
   var animation = setInterval(function() {
        ctx.fillStyle = BackColor;
        ctx.fillRect(0,0,canv.width,canv.height);

        ctx.strokeStyle = BackColor;
        ctx.lineWidth   = 16;
        ctx.arc(canv.width / 2,canv.height / 2,arcRadius--,0,Math.PI * 2);
        ctx.stroke();

       if(arcRadius <= 1) {
           clear(animation,bit8,number);
          
       }
   },2)
}

class InputClass extends React.Component {
    constructor(props) {
        super(props);
        this.state        = {value: '',showAlert: false,showCard: true};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose  = this.handleClose.bind(this);
        this.handleShow   = this.handleShow.bind(this);
        this.inputRef     = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    handleClose() {
        this.setState({showAlert: false,value: ''})
    }

    handleShow() {
        let num   = parseFloat(this.state.value),
            value = this.state.value;

        if(value > 100 || value < 1 || Number.isNaN(num)) {
            this.setState({value: ''})
        }
    
        else {
            this.setState({showAlert: true})
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        this.setState({showAlert: false,showCard: false})
         MainContent(this.state.value)
     }

    render() {
        let skullIcon = <FontAwesomeIcon spin id="slow-spin" icon={faSkullCrossbones} />;
        if(!this.state.showCard) {
            return null
        }
        else {
        return( 
     <> 
        <div className="card" id="cardId">
            <div className="card-body">    
                <label id="cardText" htmlFor="cardInput">E<em id="neverId">n</em>t<em id="neverId">e</em>
                  r numb<em id="neverId">e</em><em id="neverId">r</em> (1-100)   {skullIcon}</label> <br/>
                <input type="text" placeholder="01110110" value={this.state.value} id="cardInput"
                    onChange={this.handleChange} ref={this.inputRef} />
                <button style={{outline:"none"}} type="button" className="btn-sm btn-danger" data-toggle="modal" data-target={"#modalConfirm"}
                 onClick={this.handleShow}>Send 
                </button> <br/>
                <label id="dontText">Don't do it <em>never</em></label>
            </div>
        </div>
        <Modal show={this.state.showAlert}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to do that?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ufe'k uf kyrk. pfl xfeer jkrik kyv ylxv gifscvd. zw pfl ivrccp nrek kf jkrik
            kyve uf zk ze kzdv! ROT17
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.handleClose}>
              No
            </Button>
            <Button variant="danger" onClick={this.handleSubmit}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
    </>
          )
        }
    }
}

ReactDOM.render(
    <InputClass />,
    document.getElementById('cardDiv')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
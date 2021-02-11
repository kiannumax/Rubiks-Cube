import React, { useContext } from 'react';
import { MovesContext } from '../hoc/contexts/Rubiks/movesContext.js';


export function RubiksCube() {
    const { actualState } = useContext(MovesContext);

    return (
        <div className="rubiks">
            <div id="wrap">
                <div id="rubiksCube" style={{ transform: `rotateY(${actualState.rotateY}deg) rotateX(${actualState.rotateX}deg)`}}>   
                        <div id="UpSide" className="Side">
                            <div id="UpfirstRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.UfRfE}} id="UfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.UfRsE}} id="UfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.UfRtE}} id="UfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="UpSecondRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.UsRfE}} id="UsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.UsRsE}} id="UsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.UsRtE}} id="UsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="UpThirdrow" className="rubiksRow">
                                 <i style={{backgroundColor: actualState.UtRfE}} id="UthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.UtRsE}} id="UthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.UtRtE}} id="UthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                        <div id="LeftSide" className="Side">
                            <div id="LeftFirstRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.LfRfE}} id="LfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.LfRsE}} id="LfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.LfRtE}} id="LfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="LeftSecondRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.LsRfE}} id="LsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.LsRsE}} id="LsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.LsRtE}} id="LsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="LeftThirdrow" className="rubiksRow">
                                 <i style={{backgroundColor: actualState.LtRfE}} id="LthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.LtRsE}} id="LthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.LtRtE}} id="LthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                        <div id="BackSide" className="Side">
                            <div id="BackFirstRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.BfRfE}} id="BfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.BfRsE}} id="BfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.BfRtE}} id="BfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="BackSecondRow" className="rubiksRow">
                                 <i style={{backgroundColor: actualState.BsRfE}} id="BsecondRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.BsRsE}} id="BsecondRsecondElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.BsRtE}} id="BsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="BackThirdrow" className="rubiksRow">
                              <i style={{backgroundColor: actualState.BtRfE}} id="BthirdRfirstElement" className="RubiksElement"></i>
                              <i style={{backgroundColor: actualState.BtRsE}} id="BthirdRfirstElement" className="RubiksElement"></i>
                              <i style={{backgroundColor: actualState.BtRtE}} id="BthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                         <div id="FrontSide" className="Side">
                            <div id="FrontfirstRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.FfRfE}} id="FfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.FfRsE}} id="FfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.FfRtE}} id="FfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="FrontSecondRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.FsRfE}} id="FsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.FsRsE}} id="FsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.FsRtE}} id="FsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="FrontThirdrow" className="rubiksRow">
                                 <i style={{backgroundColor: actualState.FtRfE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.FtRsE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.FtRtE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                        <div id="RightSide" className="Side">
                            <div id="RightFirstRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.RfRfE}} id="RfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.RfRsE}} id="RfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.RfRtE}} id="RfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="RightSecondRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.RsRfE}} id="RsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.RsRsE}} id="RsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.RsRtE}} id="RsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="RightThirdrow" className="rubiksRow">
                                 <i style={{backgroundColor: actualState.RtRfE}} id="RthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.RtRsE}} id="RthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.RtRtE}} id="RthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>

                        <div id="DownSide" className="Side">
                            <div id="DownFirstRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.DfRfE}} id="FfirstRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.DfRsE}} id="FfirstRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.DfRtE}} id="FfirstRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="DownSecondRow" className="rubiksRow">
                                <i style={{backgroundColor: actualState.DsRfE}} id="FsecondRfirstElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.DsRsE}} id="FsecondRsecondElement" className="RubiksElement"></i>
                                <i style={{backgroundColor: actualState.DsRtE}} id="FsecondRthirdElement" className="RubiksElement"></i>
                            </div>
                            <div id="DownThirdrow" className="rubiksRow">
                                 <i style={{backgroundColor: actualState.DtRfE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.DtRsE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                                 <i style={{backgroundColor: actualState.DtRtE}} id="FthirdRfirstElement" className="RubiksElement"></i>
                            </div>
                        </div>
                </div>
          </div>
        </div>
    )
}

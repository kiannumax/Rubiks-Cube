import { RIGHT, LEFT, UP, DOWN, FRONT, BACK, MIDDLE, STAND, EQUATOR, DOUBLE_RIGHT,
    DOUBLE_LEFT, DOUBLE_UP, DOUBLE_DOWN, DOUBLE_FRONT, DOUBLE_BACK, ANTI_RIGHT, ANTI_LEFT,
    ANTI_UP, ANTI_DOWN, ANTI_FRONT, ANTI_BACK, ANTI_MIDDLE, ANTI_EQUATOR, ANTI_STAND,
    ANTI_DOUBLE_RIGHT, ANTI_DOUBLE_LEFT, ANTI_DOUBLE_UP, ANTI_DOUBLE_DOWN, ANTI_DOUBLE_FRONT,
    ANTI_DOUBLE_BACK, ROTATE_X, ROTATE_Y, REFRESH } from './movesTypes'

       
const types = {
    [RIGHT]: state => {
        return {
        ...state, FfRtE: state.DfRtE, FsRtE: state.DsRtE, FtRtE: state.DtRtE, UfRtE: state.FfRtE, 
        UsRtE: state.FsRtE, UtRtE: state.FtRtE, BtRfE: state.UfRtE, BsRfE: state.UsRtE, BfRfE: state.UtRtE,
        DfRtE: state.BtRfE, DsRtE: state.BsRfE, DtRtE: state.BfRfE, RfRfE: state.RtRfE, RfRsE: state.RsRfE,
        RfRtE: state.RfRfE, RsRfE: state.RtRsE, RsRtE: state.RfRsE, RtRfE: state.RtRtE, RtRsE: state.RsRtE,
        RtRtE: state.RfRtE
        }
    },

    [LEFT]: state => {
         return {
        ...state, FfRfE: state.UfRfE, FsRfE: state.UsRfE, FtRfE: state.UtRfE, UfRfE: state.BtRtE, UsRfE: state.BsRtE,
        UtRfE: state.BfRtE, BfRtE: state.DtRfE, BsRtE: state.DsRfE, BtRtE: state.DfRfE, DfRfE: state.FfRfE,
        DsRfE: state.FsRfE, DtRfE: state.FtRfE, LfRfE: state.LtRfE, LfRsE: state.LsRfE, LfRtE: state.LfRfE,
        LsRfE: state.LtRsE, LsRtE: state.LfRsE, LtRfE: state.LtRtE, LtRsE: state.LsRtE, LtRtE: state.LfRtE 
        }
    },

    [UP]: state => {
        return {
            ...state, LfRfE: state.FfRfE, LfRsE: state.FfRsE, LfRtE: state.FfRtE, FfRfE: state.RfRfE, FfRsE: state.RfRsE,
           FfRtE: state.RfRtE, RfRfE: state.BfRfE, RfRsE: state.BfRsE, RfRtE: state.BfRtE, BfRfE: state.LfRfE,
           BfRsE: state.LfRsE, BfRtE: state.LfRtE, UfRfE: state.UtRfE, UfRsE: state.UsRfE, UfRtE: state.UfRfE,
           UsRfE: state.UtRsE, UsRtE: state.UfRsE, UtRfE: state.UtRtE, UtRsE: state.UsRtE, UtRtE: state.UfRtE
        }
    },

    [DOWN]: state => {
        return {
            ...state, LtRfE: state.BtRfE, LtRsE: state.BtRsE, LtRtE: state.BtRtE, FtRfE: state.LtRfE, FtRsE: state.LtRsE,
           FtRtE: state.LtRtE, RtRfE: state.FtRfE, RtRsE: state.FtRsE, RtRtE: state.FtRtE, BtRfE: state.RtRfE,
           BtRsE: state.RtRsE, BtRtE: state.RtRtE, DfRfE: state.DtRfE, DfRsE: state.DsRfE, DfRtE: state.DfRfE,
           DsRfE: state.DtRsE, DsRtE: state.DfRsE, DtRfE: state.DtRtE, DtRsE: state.DsRtE, DtRtE: state.DfRtE
        }
    },

    [FRONT]: state => {
        return {
            ...state, RfRfE: state.UtRfE, RsRfE: state.UtRsE, RtRfE: state.UtRtE, UtRfE: state.LtRtE, UtRsE: state.LsRtE,
            UtRtE: state.LfRtE, LfRtE: state.DfRfE, LsRtE: state.DfRsE, LtRtE: state.DfRtE, DfRfE: state.RtRfE,
            DfRsE: state.RsRfE, DfRtE: state.RfRfE, FfRfE: state.FtRfE, FfRsE: state.FsRfE, FfRtE: state.FfRfE,
            FsRfE: state.FtRsE, FsRtE: state.FfRsE, FtRfE: state.FtRtE, FtRsE: state.FsRtE, FtRtE: state.FfRtE
        }
    },

    [BACK]: state => {
        return {
            ...state, RfRtE: state.DtRtE, RsRtE: state.DtRsE, RtRtE: state.DtRfE, UfRfE: state.RfRtE, UfRsE: state.RsRtE,
           UfRtE: state.RtRtE, LfRfE: state.UfRtE, LsRfE: state.UfRsE, LtRfE: state.UfRfE, DtRfE: state.LfRfE,
           DtRsE: state.LsRfE, DtRtE: state.LtRfE, BfRfE: state.BtRfE, BfRsE: state.BsRfE, BfRtE: state.BfRfE,
           BsRfE: state.BtRsE, BsRtE: state.BfRsE, BtRfE: state.BtRtE, BtRsE: state.BsRtE, BtRtE: state.BfRtE
        }
    },

    [MIDDLE]: state => {
        return  {
            ...state, FfRsE: state.UfRsE, FsRsE: state.UsRsE, FtRsE: state.UtRsE, UfRsE: state.BtRsE, UsRsE: state.BsRsE,
           UtRsE: state.BfRsE, BfRsE: state.DtRsE, BsRsE: state.DsRsE, BtRsE: state.DfRsE, DfRsE: state.FfRsE,
           DsRsE: state.FsRsE, DtRsE: state.FtRsE
        }
    },

    [EQUATOR]: state => {
        return {
            ...state, LsRfE: state.BsRfE, LsRsE: state.BsRsE, LsRtE: state.BsRtE, FsRfE: state.LsRfE, FsRsE: state.LsRsE,
           FsRtE: state.LsRtE, RsRfE: state.FsRfE, RsRsE: state.FsRsE, RsRtE: state.FsRtE, BsRfE: state.RsRfE,
           BsRsE: state.RsRsE, BsRtE: state.RsRtE
        }
    },

    [STAND]: state => {
        return {
            ...state, RfRsE: state.UsRfE, RsRsE: state.UsRsE, RtRsE: state.UsRtE, UsRfE: state.LtRsE, UsRsE: state.LsRsE,
           UsRtE: state.LfRsE, LfRsE: state.DsRfE, LsRsE: state.DsRsE, LtRsE: state.DsRtE, DsRfE: state.RtRsE,
           DsRsE: state.RsRsE, DsRtE: state.RfRsE
        }
    },

    [DOUBLE_RIGHT]: state => {
        return {
            ...state, FfRsE: state.DfRsE, FsRsE: state.DsRsE, FtRsE: state.DtRsE, UfRsE: state.FfRsE, UsRsE: state.FsRsE,
           UtRsE: state.FtRsE, BfRsE: state.UtRsE, BsRsE: state.UsRsE, BtRsE: state.UfRsE, DfRsE: state.BtRsE,
           DsRsE: state.BsRsE, DtRsE: state.BfRsE, FfRtE: state.DfRtE, FsRtE: state.DsRtE, FtRtE: state.DtRtE,
           UfRtE: state.FfRtE, UsRtE: state.FsRtE, UtRtE: state.FtRtE, BtRfE: state.UfRtE, BsRfE: state.UsRtE,
           BfRfE: state.UtRtE, DfRtE: state.BtRfE, DsRtE: state.BsRfE, DtRtE: state.BfRfE, RfRfE: state.RtRfE,
           RfRsE: state.RsRfE, RfRtE: state.RfRfE, RsRfE: state.RtRsE, RsRtE: state.RfRsE, RtRfE: state.RtRtE,
           RtRsE: state.RsRtE, RtRtE: state.RfRtE
        }
    },

    [DOUBLE_LEFT]: state => {
        return {
            ...state, FfRsE: state.UfRsE, FsRsE: state.UsRsE, FtRsE: state.UtRsE, UfRsE: state.BtRsE, UsRsE: state.BsRsE,
           UtRsE: state.BfRsE, BfRsE: state.DtRsE, BsRsE: state.DsRsE, BtRsE: state.DfRsE, DfRsE: state.FfRsE,
           DsRsE: state.FsRsE, DtRsE: state.FtRsE, FfRfE: state.UfRfE, FsRfE: state.UsRfE, FtRfE: state.UtRfE,
           UfRfE: state.BtRtE, UsRfE: state.BsRtE, UtRfE: state.BfRtE, BfRtE: state.DtRfE, BsRtE: state.DsRfE,
           BtRtE: state.DfRfE, DfRfE: state.FfRfE, DsRfE: state.FsRfE, DtRfE: state.FtRfE, LfRfE: state.LtRfE,
           LfRsE: state.LsRfE, LfRtE: state.LfRfE, LsRfE: state.LtRsE, LsRtE: state.LfRsE, LtRfE: state.LtRtE,
           LtRsE: state.LsRtE, LtRtE: state.LfRtE
        }
    },

    [DOUBLE_UP]: state => {
        return {
            ...state, LsRfE: state.FsRfE, LsRsE: state.FsRsE, LsRtE: state.FsRtE, FsRfE: state.RsRfE, FsRsE: state.RsRsE,
           FsRtE: state.RsRtE, RsRfE: state.BsRfE, RsRsE: state.BsRsE, RsRtE: state.BsRtE, BsRfE: state.LsRfE,
           BsRsE: state.LsRsE, BsRtE: state.LsRtE, LfRfE: state.FfRfE, LfRsE: state.FfRsE, LfRtE: state.FfRtE,
           FfRfE: state.RfRfE, FfRsE: state.RfRsE, FfRtE: state.RfRtE, RfRfE: state.BfRfE, RfRsE: state.BfRsE,
           RfRtE: state.BfRtE, BfRfE: state.LfRfE, BfRsE: state.LfRsE, BfRtE: state.LfRtE, UfRfE: state.UtRfE,
           UfRsE: state.UsRfE, UfRtE: state.UfRfE, UsRfE: state.UtRsE, UsRtE: state.UfRsE, UtRfE: state.UtRtE,
           UtRsE: state.UsRtE, UtRtE: state.UfRtE
        }
    },

    [DOUBLE_DOWN]: state => {
        return {
            ...state, LsRfE: state.BsRfE, LsRsE: state.BsRsE, LsRtE: state.BsRtE, FsRfE: state.LsRfE, FsRsE: state.LsRsE,
           FsRtE: state.LsRtE, RsRfE: state.FsRfE, RsRsE: state.FsRsE, RsRtE: state.FsRtE, BsRfE: state.RsRfE,
           BsRsE: state.RsRsE, BsRtE: state.RsRtE, LtRfE: state.BtRfE, LtRsE: state.BtRsE, LtRtE: state.BtRtE, 
           FtRfE: state.LtRfE, FtRsE: state.LtRsE, FtRtE: state.LtRtE, RtRfE: state.FtRfE, RtRsE: state.FtRsE, 
           RtRtE: state.FtRtE, BtRfE: state.RtRfE, BtRsE: state.RtRsE, BtRtE: state.RtRtE, DfRfE: state.DtRfE, 
           DfRsE: state.DsRfE, DfRtE: state.DfRfE, DsRfE: state.DtRsE, DsRtE: state.DfRsE, DtRfE: state.DtRtE,
           DtRsE: state.DsRtE, DtRtE: state.DfRtE
        }
    },

    [DOUBLE_FRONT]: state => {
        return {
            ...state, RfRsE: state.UsRfE, RsRsE: state.UsRsE, RtRsE: state.UsRtE, UsRfE: state.LtRsE, UsRsE: state.LsRsE,
           UsRtE: state.LfRsE, LfRsE: state.DsRfE, LsRsE: state.DsRsE, LtRsE: state.DsRtE, DsRfE: state.RtRsE,
           DsRsE: state.RsRsE, DsRtE: state.RfRsE, RfRfE: state.UtRfE, RsRfE: state.UtRsE, RtRfE: state.UtRtE, 
           UtRfE: state.LtRtE, UtRsE: state.LsRtE, UtRtE: state.LfRtE, LfRtE: state.DfRfE, LsRtE: state.DfRsE, 
           LtRtE: state.DfRtE, DfRfE: state.RtRfE, DfRsE: state.RsRfE, DfRtE: state.RfRfE, FfRfE: state.FtRfE, 
           FfRsE: state.FsRfE, FfRtE: state.FfRfE, FsRfE: state.FtRsE, FsRtE: state.FfRsE, FtRfE: state.FtRtE,
           FtRsE: state.FsRtE, FtRtE: state.FfRtE
        }
    },

    [DOUBLE_BACK]: state => {
        return {
            ...state, RfRsE: state.DsRtE, RsRsE: state.DsRsE, RtRsE: state.DsRfE, UsRfE: state.RfRsE, UsRsE: state.RsRsE,
           UsRtE: state.RtRsE, LfRsE: state.UsRtE, LsRsE: state.UsRsE, LtRsE: state.UsRfE, DsRfE: state.LfRsE,
           DsRsE: state.LsRsE, DsRtE: state.LtRsE, RfRtE: state.DtRtE, RsRtE: state.DtRsE, RtRtE: state.DtRfE,
           UfRfE: state.RfRtE, UfRsE: state.RsRtE, UfRtE: state.RtRtE, LfRfE: state.UfRtE, LsRfE: state.UfRsE, 
           LtRfE: state.UfRfE, DtRfE: state.LfRfE, DtRsE: state.LsRfE, DtRtE: state.LtRfE, BfRfE: state.BtRfE, 
           BfRsE: state.BsRfE, BfRtE: state.BfRfE, BsRfE: state.BtRsE, BsRtE: state.BfRsE, BtRfE: state.BtRtE,
           BtRsE: state.BsRtE, BtRtE: state.BfRtE
        }
    },

    [ANTI_RIGHT]: state => {
        return {
            ...state, FfRtE: state.UfRtE, FsRtE: state.UsRtE, FtRtE: state.UtRtE, UfRtE: state.BtRfE, UsRtE: state.BsRfE, 
            UtRtE: state.BfRfE, BfRfE: state.DtRtE, BsRfE: state.DsRtE, BtRfE: state.DfRtE, DfRtE: state.FfRtE,
            DsRtE: state.FsRtE, DtRtE: state.FtRtE, RfRfE: state.RfRtE, RfRsE: state.RsRtE, RfRtE: state.RtRtE, 
            RsRfE: state.RfRsE, RsRtE: state.RtRsE, RtRfE: state.RfRfE, RtRsE: state.RsRfE, RtRtE: state.RtRfE
        }
    },

    [ANTI_LEFT]: state => {
        return {
            ...state, FfRfE: state.DfRfE, FsRfE: state.DsRfE,
           FtRfE: state.DtRfE, UfRfE: state.FfRfE, UsRfE: state.FsRfE, UtRfE: state.FtRfE,
           BfRtE: state.UtRfE, BsRtE: state.UsRfE, BtRtE: state.UfRfE, DfRfE: state.BtRtE,
           DsRfE: state.BsRtE, DtRfE: state.BfRtE, LfRfE: state.LfRtE, LfRsE: state.LsRtE,
           LfRtE: state.LtRtE, LsRfE: state.LfRsE, LsRtE: state.LtRsE, LtRfE: state.LfRfE,
           LtRsE: state.LsRfE, LtRtE: state.LtRfE
        }
    },

    [ANTI_UP]: state => {
        return {
            ...state, LfRfE: state.BfRfE, LfRsE: state.BfRsE, LfRtE: state.BfRtE, FfRfE: state.LfRfE, FfRsE: state.LfRsE, 
           FfRtE: state.LfRtE, RfRfE: state.FfRfE, RfRsE:state.FfRsE, RfRtE: state.FfRtE, BfRfE: state.RfRfE, 
           BfRsE: state.RfRsE, BfRtE:state.RfRtE, UfRfE: state.UfRtE, UfRsE: state.UsRtE, UfRtE: state.UtRtE, 
           UsRfE: state.UfRsE, UsRtE: state.UtRsE, UtRfE: state.UfRfE, UtRsE: state.UsRfE, UtRtE: state.UtRfE
        }
    },

    [ANTI_DOWN]: state => {
        return {
            ...state, LtRfE: state.FtRfE, LtRsE: state.FtRsE, LtRtE: state.FtRtE, FtRfE: state.RtRfE, FtRsE: state.RtRsE, 
           FtRtE: state.RtRtE, RtRfE: state.BtRfE, RtRsE: state.BtRsE, RtRtE: state.BtRtE, BtRfE: state.LtRfE,
           BtRsE: state.LtRsE, BtRtE: state.LtRtE, DfRfE: state.DfRtE, DfRsE: state.DsRtE, DfRtE: state.DtRtE, 
           DsRfE: state.DfRsE, DsRtE: state.DtRsE, DtRfE: state.DfRfE, DtRsE: state.DsRfE, DtRtE: state.DtRfE
        }
    },

    [ANTI_FRONT]: state => {
        return {
            ...state, RfRfE: state.DfRtE, RsRfE: state.DfRsE, RtRfE: state.DfRfE, UtRfE: state.RfRfE, UtRsE: state.RsRfE, 
           UtRtE: state.RtRfE, LfRtE: state.UtRtE, LsRtE: state.UtRsE, LtRtE: state.UtRfE, DfRfE: state.LfRtE,
           DfRsE: state.LsRtE, DfRtE: state.LtRtE, FfRfE: state.FfRtE, FfRsE: state.FsRtE, FfRtE: state.FtRtE, 
           FsRfE: state.FfRsE, FsRtE: state.FtRsE, FtRfE: state.FfRfE, FtRsE: state.FsRfE, FtRtE: state.FtRfE
        }
    },

    [ANTI_BACK]: state => {
        return {
            ...state, RfRtE: state.UfRfE, RsRtE: state.UfRsE, RtRtE: state.UfRtE, UfRfE: state.LtRfE, UfRsE: state.LsRfE, 
           UfRtE: state.LfRfE, LfRfE: state.DtRfE, LsRfE: state.DtRsE, LtRfE: state.DtRtE, DtRfE: state.RtRtE,
           DtRsE: state.RsRtE, DtRtE: state.RfRtE, BfRfE: state.BfRtE, BfRsE: state.BsRtE, BfRtE: state.BtRtE, 
           BsRfE: state.BfRsE, BsRtE: state.BtRsE, BtRfE: state.BfRfE, BtRsE: state.BsRfE, BtRtE: state.BtRfE
        }
    },

    [ANTI_MIDDLE]: state => {
        return {
            ...state, FfRsE: state.DfRsE, FsRsE: state.DsRsE, FtRsE: state.DtRsE, UfRsE: state.FfRsE, UsRsE: state.FsRsE, 
           UtRsE: state.FtRsE, BfRsE: state.UtRsE, BsRsE: state.UsRsE, BtRsE: state.UfRsE, DfRsE: state.BtRsE,
           DsRsE: state.BsRsE, DtRsE: state.BfRsE
        }
    },

    [ANTI_EQUATOR]: state => {
        return {
            ...state, LsRfE: state.FsRfE, LsRsE: state.FsRsE, LsRtE: state.FsRtE, FsRfE: state.RsRfE, FsRsE: state.RsRsE, 
           FsRtE: state.RsRtE, RsRfE: state.BsRfE, RsRsE: state.BsRsE, RsRtE: state.BsRtE, BsRfE: state.LsRfE,
           BsRsE: state.LsRsE, BsRtE: state.LsRtE
        }
    },

    [ANTI_STAND]: state => {
        return {
            ...state, RfRsE: state.DsRtE, RsRsE: state.DsRsE, RtRsE: state.DsRfE, UsRfE: state.RfRsE, UsRsE: state.RsRsE, 
           UsRtE: state.RtRsE, LfRsE: state.UsRtE, LsRsE: state.UsRsE, LtRsE: state.UsRfE, DsRfE: state.LfRsE,
           DsRsE: state.LsRsE, DsRtE: state.LtRsE
        }
    },

    [ANTI_DOUBLE_RIGHT]: state => {
        return {
            ...state, FfRsE: state.UfRsE, FsRsE: state.UsRsE, FtRsE: state.UtRsE, UfRsE: state.BtRsE, UsRsE: state.BsRsE, 
           UtRsE: state.BfRsE, BfRsE: state.DtRsE, BsRsE: state.DsRsE, BtRsE: state.DfRsE, DfRsE: state.FfRsE,
           DsRsE: state.FsRsE, DtRsE: state.FtRsE, FfRtE: state.UfRtE, FsRtE: state.UsRtE, FtRtE: state.UtRtE, 
           UfRtE: state.BtRfE, UsRtE: state.BsRfE, UtRtE: state.BfRfE, BfRfE: state.DtRtE, BsRfE: state.DsRtE, 
           BtRfE: state.DfRtE, DfRtE: state.FfRtE, DsRtE: state.FsRtE, DtRtE: state.FtRtE, RfRfE: state.RfRtE, 
           RfRsE: state.RsRtE, RfRtE: state.RtRtE, RsRfE: state.RfRsE, RsRtE: state.RtRsE, RtRfE: state.RfRfE,
           RtRsE: state.RsRfE, RtRtE: state.RtRfE
        }
    },

    [ANTI_DOUBLE_LEFT]: state => {
        return {
            ...state, FfRsE: state.DfRsE, FsRsE: state.DsRsE, FtRsE: state.DtRsE, UfRsE: state.FfRsE, UsRsE: state.FsRsE, 
           UtRsE: state.FtRsE, BfRsE: state.UtRsE, BsRsE: state.UsRsE, BtRsE: state.UfRsE, DfRsE: state.BtRsE,
           DsRsE: state.BsRsE, DtRsE: state.BfRsE, FfRfE: state.DfRfE, FsRfE: state.DsRfE, FtRfE: state.DtRfE, 
           UfRfE: state.FfRfE, UsRfE: state.FsRfE, UtRfE: state.FtRfE, BfRtE: state.UtRfE, BsRtE: state.UsRfE,
           BtRtE: state.UfRfE, DfRfE: state.BtRtE, DsRfE: state.BsRtE, DtRfE: state.BfRtE, LfRfE: state.LfRtE, 
           LfRsE: state.LsRtE, LfRtE: state.LtRtE, LsRfE: state.LfRsE, LsRtE: state.LtRsE, LtRfE: state.LfRfE,
           LtRsE: state.LsRfE, LtRtE: state.LtRfE
        }
    },

    [ANTI_DOUBLE_UP]: state => {
        return {
            ...state, LsRfE: state.BsRfE, LsRsE: state.BsRsE, LsRtE: state.BsRtE, FsRfE: state.LsRfE, FsRsE: state.LsRsE, 
           FsRtE: state.LsRtE, RsRfE: state.FsRfE, RsRsE: state.FsRsE, RsRtE: state.FsRtE, BsRfE: state.RsRfE,
           BsRsE: state.RsRsE, BsRtE: state.RsRtE, LfRfE: state.BfRfE, LfRsE: state.BfRsE, LfRtE: state.BfRtE, 
           FfRfE: state.LfRfE, FfRsE: state.LfRsE, FfRtE: state.LfRtE, RfRfE: state.FfRfE, RfRsE: state.FfRsE, 
           RfRtE: state.FfRtE, BfRfE: state.RfRfE, BfRsE: state.RfRsE, BfRtE: state.RfRtE, UfRfE: state.UfRtE, 
           UfRsE: state.UsRtE, UfRtE: state.UtRtE, UsRfE: state.UfRsE, UsRtE: state.UtRsE, UtRfE: state.UfRfE,
           UtRsE: state.UsRfE, UtRtE: state.UtRfE
        }
    },

    [ANTI_DOUBLE_DOWN]: state => {
        return {
            ...state, LsRfE: state.FsRfE, LsRsE: state.FsRsE, LsRtE: state.FsRtE, FsRfE: state.RsRfE, FsRsE: state.RsRsE, 
           FsRtE: state.RsRtE, RsRfE: state.BsRfE, RsRsE: state.BsRsE, RsRtE: state.BsRtE, BsRfE: state.LsRfE,
           BsRsE: state.LsRsE, BsRtE: state.LsRtE, LtRfE: state.FtRfE, LtRsE: state.FtRsE, LtRtE: state.FtRtE, 
           FtRfE: state.RtRfE, FtRsE: state.RtRsE, FtRtE: state.RtRtE, RtRfE: state.BtRfE, RtRsE: state.BtRsE, 
           RtRtE: state.BtRtE, BtRfE: state.LtRfE, BtRsE: state.LtRsE, BtRtE: state.LtRtE, DfRfE: state.DfRtE, 
           DfRsE: state.DsRtE, DfRtE: state.DtRtE, DsRfE: state.DfRsE, DsRtE: state.DtRsE, DtRfE: state.DfRfE,
           DtRsE: state.DsRfE, DtRtE: state.DtRfE
        }
    },

    [ANTI_DOUBLE_FRONT]: state => {
        return {
            ...state, RfRsE: state.DsRtE, RsRsE: state.DsRsE, RtRsE: state.DsRfE, UsRfE: state.RfRsE, UsRsE: state.RsRsE, 
           UsRtE: state.RtRsE, LfRsE: state.UsRtE, LsRsE: state.UsRsE, LtRsE: state.UsRfE, DsRfE: state.LfRsE,
           DsRsE: state.LsRsE, DsRtE: state.LtRsE, RfRfE: state.DfRtE, RsRfE: state.DfRsE, RtRfE: state.DfRfE, 
           UtRfE: state.RfRfE, UtRsE: state.RsRfE, UtRtE: state.RtRfE, LfRtE: state.UtRtE, LsRtE: state.UtRsE, 
           LtRtE: state.UtRfE, DfRfE: state.LfRtE, DfRsE: state.LsRtE, DfRtE: state.LtRtE, FfRfE: state.FfRtE, 
           FfRsE: state.FsRtE, FfRtE: state.FtRtE, FsRfE: state.FfRsE, FsRtE: state.FtRsE, FtRfE: state.FfRfE,
           FtRsE: state.FsRfE, FtRtE: state.FtRfE
        }
    },

    [ANTI_DOUBLE_BACK]: state => {
        return {
            ...state, RfRsE: state.UsRfE, RsRsE: state.UsRsE, RtRsE: state.UsRtE, UsRfE: state.LtRsE, UsRsE: state.LsRsE, 
           UsRtE: state.LfRsE, LfRsE: state.DsRfE, LsRsE: state.DsRsE, LtRsE: state.DsRtE, DsRfE: state.RtRsE,
           DsRsE: state.RsRsE, DsRtE: state.RfRsE, RfRtE: state.UfRfE, RsRtE: state.UfRsE, RtRtE: state.UfRtE, 
           UfRfE: state.LtRfE, UfRsE: state.LsRfE, UfRtE: state.LfRfE, LfRfE: state.DtRfE, LsRfE: state.DtRsE,
           LtRfE: state.DtRtE, DtRfE: state.RtRtE, DtRsE: state.RsRtE, DtRtE: state.RfRtE, BfRfE: state.BfRtE, 
           BfRsE: state.BsRtE, BfRtE: state.BtRtE, BsRfE: state.BfRsE, BsRtE: state.BtRsE, BtRfE: state.BfRfE,
           BtRsE: state.BsRfE, BtRtE: state.BtRfE
        }
    },

    [ROTATE_Y]: (state, action) => {
        return {
            ...state, rotateY: state.rotateY + action.payload
        }
    },

    [ROTATE_X]: (state, action) => {
        return {
            ...state, rotateX: state.rotateX + action.payload
        }
    },

    [REFRESH]: () => {
        return {
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
    },

    DEFAULT: state => state 
}

export default function movesReducer(state, action)  {
   const handler = types[action.type] || types.DEFAULT
   return handler(state, action)
}

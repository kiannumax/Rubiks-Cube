import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

export default class InputClass extends React.Component {
    constructor(props) {
        super(props);
        this.state            = {value: '',showAlert: false};
        this.handleChange     = this.handleChange.bind(this);
        this.handleClose      = this.handleClose.bind(this);
        this.handleShow       = this.handleShow.bind(this);
        this.handleSubmit     = this.handleSubmit.bind(this);
        this.handleKeyHandler = this.handleKeyHandler.bind(this);
        this.inputRef         = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    shouldComponentUpdate(nextProps, nextState) {
       if(nextState.showAlert !== this.state.showAlert) {
           return true
       } else {
           return nextState.value.trim() !== this.state.value.trim()
       }
        
    }

    handleKeyHandler(event) {
        if(event.key === 'Enter') {
            this.handleShow()
        } 
    } 

    handleClose() {
        this.setState({showAlert: false,value: ''})
    }

    handleShow() {
        if(this.state.value === '6') {
            this.setState({showAlert: true})
        }
    
        else {
            this.setState({value: ''})
        }
    }

    handleSubmit() {
        // console.log(event)
        // if(event) {
        //     console.log(event)
        //     if(event.key === 'Enter') {
        //         this.props.history.push({pathname: '/rubiks'})
        //         this.setState({showAlert: false})
        //     }
        // } else {
        this.props.history.push({pathname: '/rubiks'})
        this.setState({showAlert: false})
    //    }
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        let skullIcon = <FontAwesomeIcon spin id="slow-spin" icon={faSkullCrossbones} />;
       
        return( 
     <> 
      <div id="cardDiv">
        <div className="card" id="cardId">
            <div className="card-body">    
                <label id="cardText" htmlFor="cardInput"> How many sides does rubiks cube have? {skullIcon}</label> <br/>
                <input type="text"
                       placeholder="01110110"
                       value={this.state.value}
                       id="cardInput"
                       onChange={this.handleChange}
                       onKeyPress={this.handleKeyHandler} 
                       ref={this.inputRef} 
                    />
                <button style={{outline:"none"}} type="button" className="btn-sm btn-danger" data-toggle="modal" data-target={"#modalConfirm"}
                 onClick={this.handleShow}>Send 
                </button> <br/>
            </div>
        </div>
        </div>

        <Modal show={this.state.showAlert}>
            <div onKeyPress={this.handleSubmit}>
          <Modal.Header >
            <Modal.Title>Are you sure you want to do that?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ufe'k uf kyrk. pfl xfeer jkrik kyv ylxv gifscvd. zw pfl ivrccp nrek kf jkrik
            kyve uf zk ze kzdv! ROT17
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              No
            </Button>
            <Button variant="success" onClick={this.handleSubmit} >
              Yes
            </Button>
          </Modal.Footer>
          </div>
        </Modal>
    </>
          )
        }
    }

    InputClass.propTypes = {
        props: PropTypes.object,
    }
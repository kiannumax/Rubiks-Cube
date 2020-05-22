import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class InputClass extends React.Component {
    constructor(props) {
        super(props);
        this.state        = {value: '',showAlert: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleClose  = this.handleClose.bind(this);
        this.handleShow   = this.handleShow.bind(this);
        this.inputRef     = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState)

       if(nextState.showAlert !== this.state.showAlert) {
           return true
       } else {
           return nextState.value.trim() !== this.state.value.trim()
       }
        
    }

    handleClose() {
        this.setState({showAlert: false,value: ''})
    }

    handleShow() {
        let value = this.state.value;

        if(value === '6') {
            this.setState({showAlert: true})
        }
    
        else {
            this.setState({value: ''})
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        let skullIcon = <FontAwesomeIcon spin id="slow-spin" icon={faSkullCrossbones} />;
        console.log('kozel')
       
        return( 
     <> 
      <div id="cardDiv">
        <div className="card" id="cardId">
            <div className="card-body">    
                <label id="cardText" htmlFor="cardInput"> How many sides rubiks cube has? {skullIcon}</label> <br/>
                <input type="text" placeholder="01110110" value={this.state.value} id="cardInput"
                    onChange={this.handleChange} ref={this.inputRef} />
                <button style={{outline:"none"}} type="button" className="btn-sm btn-danger" data-toggle="modal" data-target={"#modalConfirm"}
                 onClick={this.handleShow}>Send 
                </button> <br/>
            </div>
        </div>
        </div>
        <Modal show={this.state.showAlert}>
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
            <Button variant="success" onClick={this.props.handleShow}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
    </>
          )
        }
    }

    export default InputClass
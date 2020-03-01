import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',value2: ''};
        this.handleChange = this.handleChange(this);
        this.handleSubmit = this.handleSubmit(this);
    }



    render() {
        return (
            <div class="card" id="passwordId">
                <div className="card-body">    
                <label id="cardPass" htmlFor="passwordInput"> </label> <br/>
                <input type="text" value={this.state.value} id="passwordInput"
                    onChange={this.handleChange} ref={this.inputRef} />
                <input type="password" value={this.state.value} id="passwordInput2"
                    onChange={this.handleChange2} />
                <button style={{outline:"none"}} type="button" className="btn-sm btn-danger" 
                 onClick={this.handleSubmit}>Send
                </button> 
              </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Password />,
    document.getElementById("passwordEx")
)
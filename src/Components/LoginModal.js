import React from "react";
import { Modal, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

export class LoginModal extends React.Component {
    constructor() {
        super();
        this.state={
          address: '',
          password: ''
        }
    }

    render() {
        return (<div className="static-modal">
        <Modal show={this.props.showLogin} style={{opacity:1}}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
      
          <Modal.Body>
          <form><FormGroup
          controlId="formBasicText"
            >
          <FormLabel>Public key/Address</FormLabel>
          
          <FormControl
            type="text"
            placeholder="Enter your account address"
            onChange={e => this.setState({address: e.target.value})}
          />

          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Enter your password"
            onChange={e => this.setState({password: e.target.value})}
          />
          <FormControl.Feedback />
        </FormGroup></form>
          </Modal.Body>
      
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Cancel</Button>
            <Button bsstyle="primary" onClick={() => this.props.onLoginClicked(this.state.address, this.state.password)}>Login</Button>
          </Modal.Footer>
        </Modal>
      </div>);
    }
}


  export default LoginModal;
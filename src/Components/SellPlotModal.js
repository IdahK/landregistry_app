import React from "react";
import { Modal, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

export class SellModal extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (<div className="static-modal">
        <Modal show={this.props.showSell} style={{opacity:1}}>
          <Modal.Header>
            <Modal.Title>How much do you want to list your plot for?</Modal.Title>
          </Modal.Header>
      
          <Modal.Body>
          <form><FormGroup
          controlId="formBasicText"
            >
          <FormLabel>Plot Number {this.props.plotNumber}</FormLabel>
          <FormControl
            type="number"
            placeholder="Enter your price"
            onChange={e => this.setState({price: e.target.value})}
          />
        </FormGroup></form>
          </Modal.Body>
      
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Cancel</Button>
            <Button bsStyle="primary" onClick={() => this.props.onSellClicked(this.state.plotNumber, this.state.price)}>Sell</Button>
          </Modal.Footer>
        </Modal>
      </div>);
    }
}


  export default SellModal;
import React from 'react';
import Modal from "react-bootstrap/Modal";

class Example extends React.Component {

  constructor(props){
    super(props);

    console.log(this.props.show)

    this.handleClose = this.handleClose.bind(this);

  }

  handleClose(e){

  }

  render(){
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    );
  }
}

export default Example;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faFileWord, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import DmpFormContainer from '../containers/DmpFormContainer';
import Modal from "react-bootstrap/Modal";



class ActionableIcon extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hover: false,
      showForm: false
    }

    this.handleClick = this.handleClick.bind(this);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleGenerateDoc = this.handleGenerateDoc.bind(this);
    this.handleGeneratePdf = this.handleGeneratePdf.bind(this);

    this.toggleHover = this.toggleHover.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleEdit(e){
    e.preventDefault();
    console.log("Edit DMP");
    this.setState({showForm:true})
  }

  handleClose(e){
    this.setState({showForm:false})
  }

  handleGenerateDoc(e){

  }

  handleGeneratePdf(e){

  }

  handleClick(e){
    e.preventDefault();
    console.log('The link was clicked.'+e.name);
  }

  toggleHover() {
  	this.setState({hover: !this.state.hover})
  }

  render() {
    var iconStyle;

    if (this.state.hover){
      iconStyle = {cursor:'pointer'}
    } else {
      iconStyle = {cursor:'default'}
    }
		return (
      <div>
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon style={iconStyle} icon={faPencilAlt} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.handleEdit} />
        </span>
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon style={iconStyle} icon={faFilePdf} onClick={this.handleGeneratePdf} onMouseOver={this.handleMouse} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}/>
        </span>
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon style={iconStyle} icon={faFileWord} onClick={this.handleGenerateDoc} onMouseOver={this.onHover} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}/>
        </span>
          <Modal show={this.state.showForm} onHide={this.handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Data Management Plan Form</Modal.Title>
            </Modal.Header>
            <Modal.Body><DmpFormContainer /></Modal.Body>
          </Modal>

      </div>
		);
	}
}

export default ActionableIcon;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faFileWord, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import DmpFormContainer from '../containers/DmpFormContainer';
import Modal from "react-bootstrap/Modal";

class DmpRow extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hover: false,
      showForm: false,
      dmp: props.dmp
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
    //this.setState({showForm:true})
    //this.setState({showForm:true, dmp:{description:'ttt'}})
    const token = localStorage.getItem("token");

    fetch('https://api.dmptool.actionproject.eu/dmps/'+this.state.dmp._id,{
				method: "GET",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
				},
			}).then(response => {
				response.json().then(data =>{
					console.log("Load Data Edit" + JSON.stringify(data));
					//this.setState({dmps:JSON.parse(JSON.stringify(data))})
					this.setState({showForm:true, dmp:data})
				})
		})
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

    let description = this.props.dmp.description;

    if (description == undefined){
        description = 'No description';
    }

    let name = this.props.dmp.name;

    if (name == undefined){
      name = 'Data Management Plan Form';
    }

    var iconStyle;

    if (this.state.hover){
      iconStyle = {cursor:'pointer'}
    } else {
      iconStyle = {cursor:'default'}
    }

    return(
      <tr>
        <td><span class="title" style={{fontSize:"1.5em"}}>{this.props.dmp.name}</span><br/>{description}</td>
        <td align="center" class="actionable-icons">
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
                <Modal.Title>{name}</Modal.Title>
              </Modal.Header>
              <Modal.Body scrollable="true"><DmpFormContainer dmp={this.state.dmp} action="edit" /></Modal.Body>
            </Modal>
        </div>
        </td>
      </tr>
    )
  }
}

export default DmpRow;

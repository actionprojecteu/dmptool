import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faFileWord, faPencilAlt, faTools, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import DmpFormContainer from '../containers/DmpFormContainer';
import Modal from "react-bootstrap/Modal";

class DmpRow extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hover: false,
      showForm: false,
      showMessage: false,
      message: '',
      showButtons: false,
      docx_file: '',
      pdf_file: '',
      dmp: props.dmp
    }

    this.handleClick = this.handleClick.bind(this);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleGenerateFiles = this.handleGenerateFiles.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.toggleHover = this.toggleHover.bind(this);
    this.handleClose = this.handleClose.bind(this);

    //this.timer = setInterval(()=> this.getLastTask(this.state.dmp['_id']), 1000);
    this.timer = setTimeout(()=> this.getLastTask(this.state.dmp['_id']), 1000);

  }

  getLastTask(dmp_id){

    console.log("Loading status last task");

    const token = localStorage.getItem("token");

    fetch('https://api.dmptool.actionproject.eu/tasks?id_dmp='+dmp_id,{
				method: "GET",
				headers: {
          'Authorization': 'Bearer '+token
				},
			}).then(response => {
				response.json().then(data =>{
          if (data.length > 0){
    					console.log("Task selected" + JSON.stringify(data[0]) + " with status " + data[0].status);
    					//this.setState({dmps:JSON.parse(JSON.stringify(data))})
    					//this.setState({showForm:true, dmp:data});
              if (data[0].status=="done"){
                this.setState({"docx_file":"https://api.dmptool.actionproject.eu/resources/docx/"+data[0].url_docx,"pdf_file":"https://api.dmptool.actionproject.eu/resources/pdf/"+data[0].url_pdf});
                clearInterval(this.timer);
              }
          } else {
            clearInterval(this.timer);
          }
				})
		})

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
					this.setState({showForm:true, dmp:data});

				})
		})
  }

  handleClose(e){
    this.setState({showForm:false})
  }

  getTask(id,timer){
    console.log("Get Task:"+id);
    //this.setState({showForm:true})
    //this.setState({showForm:true, dmp:{description:'ttt'}})
    const token = localStorage.getItem("token");

    fetch('https://api.dmptool.actionproject.eu/tasks/'+id,{
				method: "GET",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
				},
			}).then(response => {
				response.json().then(data =>{
					console.log("Get Task" + JSON.stringify(data));

					//this.setState({dmps:JSON.parse(JSON.stringify(data))})
					//this.setState({showForm:true, dmp:data});

				})
		}).catch(function() {
        console.log("error");
        console.log(this);
        //setTimeout(()=> this.getTask(id), 4000);
        clearInterval(timer);
        //this.state.timer=null;
    });

  }

  handleGenerateFiles(e){
    const token = localStorage.getItem("token");
    const data = {"dmp":this.state.dmp['_id']};

    fetch('https://api.dmptool.actionproject.eu/tasks',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
          console.log(this);
          this.setState({"showMessage":true,"message":"Generating files ...","task":data.id});
          this.timer = setInterval(()=> this.getTask(data.id,this.timer), 1000);
          //setTimeout(()=> this.getTask(data.id), 4000);
        })
    })
  }

  handleDelete(e){
    e.preventDefault();
    console.log("Edit DMP");
    const token = localStorage.getItem("token");

    fetch('https://api.dmptool.actionproject.eu/dmps/'+this.state.dmp._id,{
				method: "DELETE",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
				},
			}).then(response => {
				response.json().then(data =>{
					console.log("DMP deleted" + JSON.stringify(data));
				})
		})
  }

  handleClick(e){
    e.preventDefault();
    console.log('The link was clicked.'+e);
  }

  toggleHover() {
  	this.setState({hover: !this.state.hover})
  }

  render() {

    let description = this.props.dmp.purpose;

    if (description.length > 50){
      description = description.substring(1,50) + '...';
    }

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
            <FontAwesomeIcon style={iconStyle} icon={faTrashAlt} onClick={this.handleDelete} onMouseOver={this.handleMouse} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}/>
          </span>
          <span className="fa-layers fa-fw" style={(this.state.pdf_file)? {iconStyle} : { iconStyle, display: 'none' }}>
            <a href={this.state.pdf_file} download><FontAwesomeIcon  icon={faFilePdf} onMouseOver={this.onHover} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}/></a>
          </span>
          <span className="fa-layers fa-fw" style={(this.state.docx_file)? {iconStyle} : { iconStyle, display: 'none' }}>
            <a href={this.state.docx_file} download><FontAwesomeIcon icon={faFileWord} onMouseOver={this.onHover} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}/></a>
          </span>
        </div>
        <div><span style={(this.state.showMessage)? {} : { display: 'none' }}>{this.state.message}</span></div>
        <div>
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

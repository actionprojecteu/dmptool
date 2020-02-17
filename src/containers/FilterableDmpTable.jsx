import React from 'react';
import DmpTable from '../containers/DmpTable'
import Example from '../components/Example';
import Button from '../components/Button';
import DmpFormContainer from './/DmpFormContainer';
import Modal from "react-bootstrap/Modal";

class FilterableDmpTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			dmps: [],
			show: true,
			showForm: false
		}
		this.handleAddDmp = this.handleAddDmp.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose(){
		this.setState({showForm:false});
	}

	handleAddDmp(){
		this.setState({showForm:true});
	}

	componentDidMount() {
		const token = localStorage.getItem("token");

		fetch('https://api.dmptool.actionproject.eu/dmps',{
				method: "GET",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer '+token
				},
			}).then(response => {
				console.log(response);
				response.json().then(data =>{
					console.log("Load Data" + JSON.stringify(data));
					//this.setState({dmps:JSON.parse(JSON.stringify(data))})
					this.setState({dmps:data});
				})
		})
  }

  render() {
		return (
			<div>
				<DmpTable dmps={this.state.dmps} />
				<Button
							action = {this.handleAddDmp}
							type = {'primary'}
							title = {'New'}
							style={buttonStyle}
					/> { /* Add */ }
					<Modal show={this.state.showForm} onHide={this.handleClose} animation={false}>
						<Modal.Header closeButton>
							<Modal.Title>New DMP</Modal.Title>
						</Modal.Header>
						<Modal.Body scrollable="true"><DmpFormContainer action="new" /></Modal.Body>
					</Modal>
			</div>
		);
	}
}

const buttonStyle = {
  margin : '10px 10px 10px 10px',
	width: '100%'
}

export default FilterableDmpTable;

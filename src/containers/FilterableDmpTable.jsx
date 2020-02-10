import React from 'react';
import DmpTable from '../containers/DmpTable'
import Example from '../components/Example';

class FilterableDmpTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			dmps: [],
			show: true
		}
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
			</div>
		);
	}
}


export default FilterableDmpTable;

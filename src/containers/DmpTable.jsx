import React from 'react';
import DmpRow from '../components/DmpRow'

class DmpTable extends React.Component {
  render() {
    const rows = [];

		console.log("FF:"+this.props.dmps);

    this.props.dmps.forEach((dmp) => {

			console.log("DMP:"+JSON.stringify(dmp));

      rows.push(
        <DmpRow
          dmp={dmp} key={dmp._id}/>
      );
    });

    return (
      <table class="table">
        <thead class="table_head">
          <tr>
            <th style={{width:"70%"}}>Name</th>
            <th style={{"text-align":"center"}}>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default DmpTable;

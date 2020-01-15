import React from 'react';
import ActionableIcon from './ActionableIcon';

const DmpRow = (props) => {
  let description = props.dmp.description;

  if (description == undefined){
    description = 'No description';
  }

  return(
    <tr>
      <td><span class="title">{props.dmp.name}</span><br/>{description}</td>
      <td align="center" class="actionable-icons">

      </td>
    </tr>
  )
}

export default DmpRow;

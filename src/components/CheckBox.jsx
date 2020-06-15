import React from 'react';


const CheckBox = (props) => {
	var helpButton;
	if (props.help_assistant== "yes") {
		helpButton = <button class="btn btn-primary" style={{marginLeft:'3em'}} onClick= {props.action}>Help</button>;
	}

	return( <div className="form-group">
    <label for={props.name} className="form-label" {...props}>{props.title}</label>
    <div className="checkbox">
      {props.options.map(option => {
        return (
          <label key={option} className="checkbox-inline" {...props}>
            <input
              id = {props.name}
              name={props.name}
              onChange={props.handleChange}
              value={option}
              checked={ props.selectedOptions.indexOf(option) > -1 }
              type="checkbox"
							{...props}/> {option}
          </label>
        );
      })}
			{helpButton}
    </div>
  </div>
);

}

export default CheckBox;

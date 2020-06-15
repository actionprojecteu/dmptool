import React from 'react';


const Select = (props) => {
	//const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
	//const help_button = props.help_assistant === "yes" ?  <button class="btn btn-primary">Help</button>;
	//const help_button = (props.help_assitant== "yes") ? <button class="btn btn-primary">Help</button>;
	var helpButton;
	if (props.help_assistant== "yes") {
	  helpButton = <button class="btn btn-primary" onClick= {props.action}>Help</button>;
	}

	return(<div className="form-group">
			<label for={props.name}> {props.title} </label>
				<div>
			    <select
			      id = {props.name}
			      name={props.name}
			      value={props.value}
			      onChange={props.handleChange}
			      className="form-control" style={{display:'inline-block',width:'80%',marginRight:'1em'}}>
			      <option value="" disabled >{props.placeholder}</option>
			      {props.options.map(option => {
			        return (
			          <option
			            key={option}
			            value={option}
			            label={option}>{option}</option>
			        );
			      })}
			    </select>
					{helpButton}
				</div>
  </div>)
}

export default Select;

import React, {Component} from 'react';

/* Import Components */
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Button from '../components/Button';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class DmpFormContainer extends Component {
  constructor(props) {
    super(props);

    //console.log("Props:"+props.dmp.description);

    if (props.action == 'edit'){
      console.log("Edit action2:" +props.action+" "+props.dmp.reuse);

      const reuse_checkbox = (props.dmp.reuse == undefined) ? '' : props.dmp.reuse;
      const use_data_checkbox = (props.dmp.use_data == undefined) ? '' : props.dmp.use_data;
      const interest_checkbox = (props.dmp.interest == undefined) ? '' : props.dmp.interest;
      const sharing_checkbox = (props.dmp.sharing == undefined) ? '' : props.dmp.sharing;
      const embargo_checkbox = (props.dmp.embargo == undefined) ? '' : props.dmp.embargo;
      const vocabulary_checkbox = (props.dmp.vocabulary == undefined) ? '' : props.dmp.vocabulary;
      const data_used_checkbox = (props.dmp.data_used == undefined) ? '' : props.dmp.data_used;
      const license_checkbox = (props.dmp.license == undefined) ? '' : props.dmp.license;
      const quality_checkbox = (props.dmp.quality == undefined) ? '' : props.dmp.quality;
      const personal_checkbox = (props.dmp.personal == undefined) ? '' : props.dmp.personal;
      const geolocation_checkbox = (props.dmp.protected_geolocation == undefined) ? '' : props.dmp.protected_geolocation;



      this.state = {
        newDMP: {
          user: props.dmp.user,
          name: props.dmp.name,
          project: props.dmp.project,
          project_description: props.dmp.project_description,
          purpose: props.dmp.purpose,
          description: props.dmp.description,
          reuse: reuse_checkbox,
          reuse_url: props.dmp.reuse_url,
          use_data: use_data_checkbox,
          use_data_url: props.dmp.use_data_url,
          contribution_size: props.dmp.contribution_size,
          number_contributions: props.dmp.number_contributions,
          interest: interest_checkbox,
          community: props.dmp.community,
          sharing: sharing_checkbox,
          keywords: props.dmp.keywords,
          tags: [],
          embargo: embargo_checkbox,
          embargo_date: props.dmp.embargo_date,
          reason: props.dmp.reason,
          license: props.dmp.license,
          conditions: props.dmp.conditions,
          vocabulary: vocabulary_checkbox,
          vocabulary_text: props.dmp.vocabulary_text,
          data_used: data_used_checkbox,
          list_projects: props.dmp.list_projects,
          quality: quality_checkbox,
          quality_text: props.dmp.quality_text,
          personal: personal_checkbox,
          personal_text: props.dmp.personal_text,
          protected_geolocation: geolocation_checkbox,
          protected_geolocation_text: props.dmp.protected_geolocation_text,
          size_dataset: props.dmp.size_dataset
        },
        genderOptions: ['Male', 'Female', 'Others'],
        skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
        yesandnoOptions: ['Yes','No'],
        licenseOptions: ['CC BY','CC BY-SA','CC0','CC BY-NC','CC BY-NC-SA','CC-BY-ND','CC BY-NC-ND','Others'],
        sizeOptions:  ['Small size (less than 100MB)','Medium size (from 100MB to 1GB)', 'Big size(more than 1GB)'],
        showReuse: false,
        loading: false,
        submitted: false

      }

    } else {
      this.state = {
        newDMP: {
          user: localStorage.getItem("username"),
          name: '',
          purpose: '',
          description: '',
          project:localStorage.getItem("project"),
          project_description: localStorage.getItem("project_description"),
          reuse: '',
          reuse_url: '',
          use_data: '',
          use_data_url: '',
          contribution_size: '',
          number_contributions: '',
          interest: '',
          community: '',
          sharing: '',
          keywords: '',
          tags: [],
          embargo: '',
          embargo_date: '',
          reason: '',
          license: '',
          conditions: '',
          vocabulary: '',
          vocabulary_text:'',
          data_used: '',
          list_projects: '',
          quality: '',
          quality_text: '',
          personal: '',
          personal_text: '',
          protected_geolocation: '',
          protected_geolocation_text: '',
          size_dataset: ''
        },

        genderOptions: ['Male', 'Female', 'Others'],
        skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
        yesandnoOptions: ['Yes','No'],
        licenseOptions: ['CC BY','CC BY-SA','CC0','CC BY-NC','CC BY-NC-SA','CC-BY-ND','CC BY-NC-ND','Others'],
        sizeOptions:  ['Small (less than 100MB)','Medium (more than 100MB to 1GB)', 'Big (more than 1GB)'],
        showReuse: false,
        loading: false,
        submitted: false

      }
    }

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleNumber = this.handleNumber.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
   this.handleAddition = this.handleAddition.bind(this);
   this.handleDrag = this.handleDrag.bind(this);
   this.handleTagClick = this.handleTagClick.bind(this);

   this.handleClose = this.handleClose.bind(this);

   this.handleConey = this.handleConey.bind(this);


  }

  handleConey(e){
    e.preventDefault();

    //help_assistant_link = {'https://bit.ly/38E7q43'}

    window.open('https://bit.ly/38E7q43', '_blank');

  }

  handleClose(e){
    e.preventDefault();

    window.location.reload(true);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
   this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  handleTagClick(index) {
    console.log('The tag at index ' + index + ' was clicked');
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newDMP :
        {...prevState.newDMP, name: value
        }
      }), () => console.log(this.state.newDMP))
  }

  handleAge(e) {
       let value = e.target.value;
   this.setState( prevState => ({ newDMP :
        {...prevState.newDMP, age: value
        }
      }), () => console.log(this.state.newDMP))
  }

  handleNumber(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newDMP :
        {...prevState.newDMP, [name]: value
        }
      }), () => console.log(this.state.newDMP))
  }

  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;

       console.log("Select:"+name+" "+value);
   this.setState( prevState => ({ newDMP :
        {...prevState.newDMP, [name]: value
        }
      }), () => console.log(this.state.newDMP))

  }

  handleUrl(e) {
       let value = e.target.value;
       let name = e.target.name;

   this.setState( prevState => ({ newDMP :
        {...prevState.newDMP, [name]: value
        }
      }), () => console.log(this.state.newDMP))


      //this.setState( prevState => ({ showReuse : true}), () => console.log(this.state))

  }

  handleTextArea(e) {
    let value = e.target.value;
    let name = e.target.name;

    console.log(name+" "+value);

    this.setState(prevState => ({
      newDMP: {
        ...prevState.newDMP, [name]: value
      }
      }), ()=>console.log(this.state.newDMP))
  }

  handleCheckBox(e) {


    const newSelection = e.target.value;
    const newNameSelection = e.target.name;
    let newSelectionArray;

    console.log(newNameSelection+":"+newSelection);

    /*

    if(this.state.newDMP.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newDMP.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newDMP.skills, newSelection];
    }
*/
    this.setState( prevState => ({ newDMP:
      {...prevState.newDMP, [newNameSelection]: newSelection }
    })
    )
}

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newDMP;

    const token = localStorage.getItem("token");

    this.setState({ loading: true });

    if (this.props.action == 'edit'){
      console.log(this.props.dmp._id);
      fetch('https://api.dmptool.actionproject.eu/dmps/'+this.props.dmp._id,{
          method: "PUT",
          body: JSON.stringify(userData),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
          },
        }).then(response => {
          response.json().then(data =>{
            console.log("Update Successful" + data);
            this.setState({submitted:true});
            this.setState({loading:false});
            this.createTask(data.id);
            //const { from } = this.props.location.state || { from: { pathname: "/" } };
            //this.props.history.push({ from: { pathname: "/" }});
          })
      })
    }else{
      fetch('https://api.dmptool.actionproject.eu/dmps',{
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
          },
        }).then(response => {
          response.json().then(data =>{
            console.log("Successful" + data);
            this.setState({submitted:true});
            this.setState({loading:false});
            this.createTask(data.id);
          })
      })
    }

  }

  createTask(dmp_id){
    const data = {"dmp":dmp_id};
    const token = localStorage.getItem("token");

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
        })
    })
  }

  handleClearForm(e) {

      e.preventDefault();
      this.setState({
        newDMP: {
          name: '',
          age: '',
          gender: '',
          skills: [],
          about: ''
        },
      })
  }

  render() {
    return (


        <form className="container-fluid" onSubmit={this.handleFormSubmit}>

          <Input inputType={'text'}
                name={'name'}
                title= {'[1] Write the name of your DMP'}
                value={this.state.newDMP.name}
                placeholder = {''}
                handleChange={this.handleTextArea}
            />

          <TextArea
              title={'[2] What is the purpose of the data collected / generated?'}
              rows={10}
              name={'purpose'}
              value={this.state.newDMP.purpose}
              handleChange={this.handleTextArea}
              placeholder={'Describe the purpose of your data'}
              />

          <TextArea
              title={'[3] Could you provide us with a description of the data you are going to generate?'}
              rows={10}
              name={'description'}
              value={this.state.newDMP.description}
              handleChange={this.handleTextArea}
              placeholder={'Describe the fields of your data'}
          />

        <CheckBox title={'[4] Will you re-use any existing data?'}
                name={'reuse'}
                options={this.state.yesandnoOptions}
                selectedOptions = { this.state.newDMP.reuse }
                handleChange={this.handleCheckBox}
            />


          <Input inputType={'url'}
              name={'reuse_url'}
              title= {'[4a] Please, specify where it can be found'}
              value={this.state.newDMP.reuse_url}
              placeholder = {'Enter the url where the system can find the data reused'}
              handleChange={this.handleUrl}
              style={(this.state.newDMP.reuse === 'Yes')? {} : { display: 'none' }}
          />

        <CheckBox title={'[5] At this moment, is your project collecting data?'}
                name={'use_data'}
                options={this.state.yesandnoOptions}
                selectedOptions = { this.state.newDMP.use_data }
                handleChange={this.handleCheckBox}
          />

          <Input inputType={'url'}
              name={'use_data_url'}
              title= {'[5a] Could you specify the link of the data?'}
              value={this.state.newDMP.use_data_url}
              placeholder = {'Enter the url where the system can find the data used'}
              handleChange={this.handleUrl}
              style={(this.state.newDMP.use_data === 'Yes')? {} : { display: 'none' }}
          />

        <CheckBox title={'[6] Do you want that ACTION publish and share your data on behalf you?'}
                name={'sharing'}
                options={this.state.yesandnoOptions}
                selectedOptions = { this.state.newDMP.sharing}
                handleChange={this.handleCheckBox}
            />

            <Input inputType={'text'}
                title={'[6a] Could you provide us some keywords that describe your data?'}
                rows={5}
                name={'keywords'}
                value={this.state.newDMP.keywords}
                handleChange={this.handleTextArea}
                placeholder={'Describe the community that can be interested in using your data'}
                style={(this.state.newDMP.sharing === 'Yes')? {} : { display: 'none' }}
            />

          <CheckBox title={'[6b] If not, do you think in future you will change your mind?'}
                  name={'embargo'}
                  options={this.state.yesandnoOptions}
                  selectedOptions = { this.state.newDMP.embargo}
                  handleChange={this.handleCheckBox}
                  style={(this.state.newDMP.sharing === 'No')? {} : { display: 'none' }}
              />

            <Input inputType={'date'}
                  title={'[6c] Could you establish a date to release the data, please?'}
                  rows={5}
                  name={'embargo_date'}
                  value={this.state.newDMP.embargo_date}
                  handleChange={this.handleTextArea}
                  style={(this.state.newDMP.embargo === 'Yes')? {} : { display: 'none' }}
              />

              <TextArea
                  title={'[6d] Please, explain the reason'}
                  rows={3}
                  name={'reason'}
                  value={this.state.newDMP.reason}
                  handleChange={this.handleTextArea}
                  placeholder={'Please, specify the reason for not sharing your data'}
                  style={(this.state.newDMP.embargo === 'No')? {} : { display: 'none' }}
              />

              <Select title={'[7] Please, specify the license of your data'}
                  name={'license'}
                  options = {this.state.licenseOptions}
                  value = {this.state.newDMP.license}
                  placeholder = {'Select your license'}
                  handleChange = {this.handleInput}
                  help_assistant = {'yes'}
                  action = {this.handleConey}
                />

              <TextArea
                  title={'[7a] Please, write the terms and conditions to use your data'}
                  rows={3}
                  name={'conditions'}
                  value={this.state.newDMP.conditions}
                  handleChange={this.handleTextArea}
                  placeholder={'Please, specify the terms and conditions to use your data '}
                  style={(this.state.newDMP.license === 'Others')? {} : { display: 'none' }}
              />

            <CheckBox title={'[8] Does your data follow an specific vocabulary or standard to describe it?'}
                  name={'vocabulary'}
                  options={this.state.yesandnoOptions}
                  selectedOptions = { this.state.newDMP.vocabulary}
                  handleChange={this.handleCheckBox}
              />

              <TextArea
                  title={'[8a] Provide the vocabularies, standards or methodologies'}
                  rows={3}
                  name={'vocabulary_text'}
                  value={this.state.newDMP.vocabulary_text}
                  handleChange={this.handleTextArea}
                  placeholder={'Please, provide the vocabulary, standards or methodologies used'}
                  style={(this.state.newDMP.vocabulary === 'Yes')? {} : { display: 'none' }}
              />
            <CheckBox title={'[9] Are you using any methodology or process to assure the quality of the data?'}
                  name={'quality'}
                  options={this.state.yesandnoOptions}
                  selectedOptions = { this.state.newDMP.quality}
                  handleChange={this.handleCheckBox}
              />
              <TextArea
                  title={'[9a] Please, describe it'}
                  rows={3}
                  name={'quality_text'}
                  value={this.state.newDMP.quality_text}
                  handleChange={this.handleTextArea}
                  placeholder={'Describe it'}
                  style={(this.state.newDMP.quality=== 'Yes')? {} : { display: 'none' }}
              />

            <CheckBox title={'[10] Are you using personal information in your data (name, emails, telephone, etc ...) ?'}
                  name={'personal'}
                  options={this.state.yesandnoOptions}
                  selectedOptions = { this.state.newDMP.personal}
                  handleChange={this.handleCheckBox}
              />
              <TextArea
                  title={'[10a] Named if you apply an anonymization process to the data'}
                  rows={3}
                  name={'personal_text'}
                  value={this.state.newDMP.personal_text}
                  handleChange={this.handleTextArea}
                  placeholder={'Describe the anonymization process'}
                  style={(this.state.newDMP.personal=== 'Yes')? {} : { display: 'none' }}
              />

            <CheckBox title={'[11] Are you using sensitive data for protected species (as geolocation) '}
                  name={'protected_geolocation'}
                  options={this.state.yesandnoOptions}
                  selectedOptions = { this.state.newDMP.protected_geolocation}
                  handleChange={this.handleCheckBox}
              />
              <TextArea
                  title={'[11a] Describe the process to avoid this possibility'}
                  rows={3}
                  name={'protected_geolocation_text'}
                  value={this.state.newDMP.protected_geolocation_text}
                  handleChange={this.handleTextArea}
                  placeholder={'Describe it'}
                  style={(this.state.newDMP.protected_geolocation=== 'Yes')? {} : { display: 'none' }}
              />

            <Select title={'[12] Please, select the estimated size of your datasets'}
                  name={'size_dataset'}
                  options = {this.state.sizeOptions}
                  value = {this.state.newDMP.size_dataset}
                  placeholder = {'Select the size of your dataset'}
                  handleChange = {this.handleInput}
                />

              {/*
        <Input inputType={'number'}
              name={'contribution_size'}
              title= {'What is the estimated size of each citizen contribution (in MB)?'}
              value={this.state.newDMP.contribution_size}
              placeholder = {''}
              handleChange={this.handleNumber}
          />

        <Input inputType={'number'}
              name={'number_contributions'}
              title= {'How many contributions do you expect per day?'}
              value={this.state.newDMP.number_contributions}
              placeholder = {''}
              handleChange={this.handleNumber}
          />
*/}

        <CheckBox title={'[13] Could be this data interesting for any community?'}
            name={'interest'}
            options={this.state.yesandnoOptions}
            selectedOptions = { this.state.newDMP.interest}
            handleChange={this.handleCheckBox}
        />

      <TextArea
          title={'[13a] To Whom'}
          rows={5}
          name={'community'}
          value={this.state.newDMP.community}
          handleChange={this.handleTextArea}
          placeholder={'Describe the community that can be interested in using your data'}
          style={(this.state.newDMP.interest === 'Yes')? {} : { display: 'none' }}
      />

      {this.state.loading &&
          <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
      }

      {!this.state.submitted &&
          <Button
              action = {this.handleFormSubmit}
              type = {'primary'}
              title = {'Submit'}
            style={buttonStyle}
          />
      }

        {!this.state.submitted &&
          <Button
            action = {this.handleClearForm}
            type = {'primary'}
            title = {'Clear'}
            style={buttonStyle}
          />
        }

        {this.state.submitted &&
          <div className="help-block">DMP successfully created</div>
        }
        {this.state.submitted &&
          <Button
            action = {this.handleClose}
            type = {'secondary'}
            title = {'Close'}
            style={buttonStyle}
          />
        }

        </form>

    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default DmpFormContainer;

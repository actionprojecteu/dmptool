import React from 'react';
import Input from './Input';

class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username:'',password:'',access_token:''};
    this.handleTextArea = this.handleTextArea.bind(this);

  }

  handleTextArea(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(prevState => ({

        ...prevState, [name]: value

      }), ()=>console.log(this.state))


  }
  //https://api.dmptool.actionproject.eu/login

  test(e) {
    console.log("Test");
    fetch('https://api.dmptool.actionproject.eu/dmps',{
        method: "GET",
        headers : {
          "Authorization":"Bearer "+this.state.access_token
        },
      }).then(response => {
        response.json().then(data =>{
          console.log(data);

        })
    })
  }

  submitLogin(e) {
    var auth = "Basic "+btoa(this.state.username+":"+this.state.password);
    fetch('https://api.dmptool.actionproject.eu/login',{
				method: "GET",
        mode: 'cors',
        headers : {
    			"Authorization" : auth
    		},
			}).then(response => {
				response.json().then(data =>{
					console.log("Login:" + JSON.stringify(data));
          console.log("Status:"+response.status);
          if (response.status == 200){
            console.log("Log in the system");
            //this.setState({access_token:data.access_token});
            this.setState(data);
            localStorage.setItem("token",data.access_token);
            localStorage.setItem("username",data.username);
          }
					//this.setState({dmps:JSON.parse(JSON.stringify(data))})
					//this.setState({dmps:data});
				})
		})
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

          <Input inputType={'text'}
              name={'username'}
              title= {'Username'}
              value={this.state.username}
              handleChange={this.handleTextArea}
          />

        <Input inputType={'password'}
              name={'password'}
              title= {'Password'}
              value={this.state.password}
              handleChange={this.handleTextArea}
          />

          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>

            <button
              type="button"
              className="login-btn"
              onClick={this
              .test
              .bind(this)}>Test</button>
        </div>
      </div>
    );
  }

}
export default LoginBox;

import React from "react";
//import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          redirect: false
      }

  }
  logout = () => {
      localStorage.clear();
      this.setState({ redirect: true });
      window.location.reload(true);
  }

  render() {

    return (
        <nav class="navbar navbar-light">
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="https://actionproject.eu/wp-content/uploads/2019/05/actiON.png"
              height="50px"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <span style={{textAlign:"center", fontSize:"2em"}}> DMPT - Data Management Plan Tool </span>
          <button className="btn btn-primary" onClick={this.logout}>Logout</button>

        </nav>
    )
  }

}

export default Header;

import React from "react";
//import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";


function Header() {
  return (

    <Navbar class="header">
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src="https://actionproject.eu/wp-content/uploads/2019/05/actiON.png"
          height="50px"
          className="d-inline-block align-top"
        />{' '}
        <span style={{textAlign:"center", fontSize:"2em"}}> DMPT - Data Management Plan Tool </span>
      </Navbar.Brand>
    </Navbar>
  );
}
export default Header;

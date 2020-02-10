import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableDmpTable from './containers/FilterableDmpTable'

function AppHome() {
  return (
        <div>
          <div  className="col-md-3"></div>
          <div  className="col-md-6">
            <center><h3> List of Data Management Plan </h3></center>
            <FilterableDmpTable />
          </div>
          <div  className="col-md-3"></div>
        </div>
  );
}

export default AppHome;

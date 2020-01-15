import React from 'react';
import logo from './logo.svg';
import './App.css';
import DmpFormContainer from './containers/DmpFormContainer';
import Modal from "react-bootstrap/Modal";



function App() {



  return (
    <div className="col-md-6">
      <h3> Sample Form Container </h3>
      <Modal show={true} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><DmpFormContainer /></Modal.Body>
      </Modal>
    //  <DmpFormContainer />
    </div>
  );
}

export default App;

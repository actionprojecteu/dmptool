import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppHome from './AppHome';
import LoginBox from './components/LoginBox';
import * as serviceWorker from './serviceWorker';
import Header from "./header";
import Footer from "./footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const routing = (
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/login" component={LoginBox} />
        <Route exact path="/" component={AppHome} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<AppHome />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

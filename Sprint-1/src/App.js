import React, { Component } from 'react';
import './Styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/UniversalComponent/NavBar/NavBar.js';
import HomePage from './Pages/HomePage/HomePage.js';
import UploadPage from './Pages/UploadPage/UploadPage.js';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={HomePage} />;
            <Route path='upload' component={UploadPage} />;
          </Switch>
        </Router>
      </>
    )
  }
}


import React, { Component } from 'react';
import {  Switch, Route  } from 'react-router-dom';
import Home from './Pages/Home'
import Header from './components/Header/Header'
import Upload from './Pages/upload';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
     <>
     <Route path='/' component={Header} />
      <Switch>
        <Route path='/' exact component={Home} />;
        <Route path="/upload" component={Upload} />
        <Route path="/videos/:id" component = {Home} />
        <Route path='/videos' component={Home} />;
      </Switch>
     </>
    );
  }
}

export default App;

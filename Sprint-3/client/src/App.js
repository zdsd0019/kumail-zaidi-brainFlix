import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Header from './components/Header/Header';
import Upload from './Pages/UploadPage/Upload';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
     <>
     <Router>
     <Header />
      <Switch>
        <Route path='/' exact component={Home} />;
        <Route path="/upload" component={Upload} />
        <Route path="/videos/:id" component = {Home} />
        {/* <Route path='/videos' component={Home} />; */}
      </Switch>
      </Router>
     </>
    );
  }
}

export default App;

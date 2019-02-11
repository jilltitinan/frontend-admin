import React, { Component } from 'react';
import {Router ,Route, browserHistory} from 'react-router';
import Home from './components/Home';
import Activity from './components/jillkuy';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
           <Route path="/" component={Home}/>     
           <Route path="Activity" component={Activity}/>

      </Router>

    );
  }
}

export default App;

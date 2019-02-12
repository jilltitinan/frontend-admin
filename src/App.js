import React, { Component } from 'react';
import {Router ,Route, browserHistory} from 'react-router';
import Home from './components/Home';
import Activity from './components/Activity';
import Noti from './components/Noti'
import './App.css';
import Member from './components/Member';
import Overview from './components/Overview';
import Insight from './components/Insight';
import Logout from './components/Logout';

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
           <Route path="/" component={Home}>     
              <Route path="activity" component={Activity}/>
              <Route path="noti" component={Noti}/>
              <Route path="member" component={Member} />
              <Route path="overview" component={Overview} />
              <Route path="insight" component={Insight} />
              <Route path="logout" component={Logout} />
            </Route>
      </Router>

    );
  }
}

export default App;

import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Activity from './components/Activity';
import Noti from './components/Noti'
import './App.css';
import Member from './components/Member';
import Overview from './components/Overview';
import Insight from './components/Insight';
import Logout from './components/Logout';
import Home from './components/Home';
import admin from './components/Admin';
import Locker from './components/Locker';
import LockerDetail from './components/LockerDetail';
import Login from './components/Login';
import AddAdmin from './components/AddAdmin';
import Axios from 'axios';
import { login } from '../src/actions';
import { connect } from 'react-redux';
import AddLocker from './components/AddLocker';
import AddVacancy from './components/AddVacancy';

class App extends Component {

  componentDidMount = async () => {
    const value = await localStorage.getItem('token');
    if (value !== null) {
      console.log("Before axios useraccount    ", value)
      await Axios.post('https://locker54.azurewebsites.net/api/Account/checkToken', {
        "_Token": value
      }).then(res => {
        if (res.status === 200) {
          const information = res.data
          this.setState({ accountInformation: information })
          console.log("check token :  ", this.state.accountInformation)
          this.props.login(this.state.accountInformation)
          browserHistory.push('/activity')
        }
        else {
          console.log("check token : broke")
        }
      })
        .catch(err => {
          alert("Error Admin localstorage : ", err.data);
        });
    }
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Login} />
          <Route path='/home' component={Home} >
            <Route path="/activity" component={Activity} />
            <Route path="/noti" component={Noti} />
            <Route path="/member" component={Member} />
            <Route path="/overview/:form" component={Overview} />
            <Route path="/insight/:form2" component={Insight} />
            <Route path="/logout" component={Logout} />
            <Route path="/admin" component={admin} />
            <Route path="/locker" component={Locker} />
            <Route path='/lockerDetail/:form3' component={LockerDetail} />
            <Route path="/addadmin" component={AddAdmin} />
            <Route path="/addlocker" component={AddLocker} />
            <Route path="/addvacancy" component={AddVacancy} />
          </Route>
        </Router>

      </div>


    );
  }
}

export default connect(null, { login })(App);

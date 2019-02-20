import React, { Component } from 'react';
import kendal from '../images/kendal.jpg';
import iconPresent from '../images/present.png';
import Activity from './Activity.js';
import Noti from './Noti';
import Member from './Member';
import Logout from './Logout';
import { Link, Router, Route, } from 'react-router';
import Overview from './Overview';
import Insight from './Insight';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.location.pathname,
    }
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <div className="App">
        <div className='greenHeader' />
        {/* <div> */}
          {this.props.children}
        {/* </div> */}
        
        
        {/* <div className='content'>
          {this.state.selected==='/activity' }
          {this.state.selected==='/noti' &&<Noti />}
          {this.state.selected==='/member' &&<Member />}
          {this.state.selected==="/overview" &&<Overview />}
          {this.state.selected==="/insight" &&<Insight />}
          {this.state.selected==="/logout" &&<Logout />}
        </div> */}
        <div className='grayBorder'>


          <img src={kendal} height="105" width="105" />
          <h1>Kendall </h1>
          <h2>ID : 555555</h2>

          <ul className='sidebar'>
            <li onClick={() => this.setState({ selected: 'activity2' })}><Link to='/activity' className={this.state.selected === 'activity2' ? 'active' : 'a:hover:not(.active)'} >Activity</Link></li>
            <li onClick={() => this.setState({ selected: 'noti' })}><Link to="/noti" className={this.state.selected === 'noti' ? 'active' : 'a:hover:not(.active)'} >Notification</Link></li>
            <li onClick={() => this.setState({ selected: 'member' })}><Link to="/member" className={this.state.selected === 'member' ? 'active' : 'a:hover:not(.active)'}>Members</Link></li>
            <li onClick={() => this.setState({ selected: "overview" })}><Link to="/overview" className={this.state.selected === "overview" ? 'active' : 'a:hover:not(.active)'}>Overview</Link></li>
            <li onClick={() => this.setState({ selected: "insight" })}><Link to="/insight" className={this.state.selected === "insight" ? 'active' : 'a:hover:not(.active)'}>Insight</Link></li>
            <li onClick={() => this.setState({ selected: "logout" })}><Link to="/logout" className={this.state.selected === "logout" ? 'active' : 'a:hover:not(.active)'}>Logout</Link></li>
          </ul>


        </div>



      </div>
    );
  }
}

export default Header;

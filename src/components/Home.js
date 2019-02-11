import React, { Component } from 'react';
import kendal from '../images/kendal.jpg';
import iconPresent from '../images/present.png';
import Activity from './Activity.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <div className='greenHeader' />
        <div className='content'>
          <Activity />
        </div>
        <div className='grayBorder'>

          <img src={kendal} height="105" width="105" />
          <h1>Kendall </h1>
          <h2>ID : 555555</h2>

          <ul className='sidebar'>
            <li onClick={() => this.setState({ selected: 0 })}><a className={this.state.selected === 0 ? 'active' : 'a:hover:not(.active)'} >Activity</a></li>
            <li onClick={() => this.setState({ selected: 1 })}><a className={this.state.selected === 1 ? 'active' : 'a:hover:not(.active)'}>Notification</a></li>
            <li onClick={() => this.setState({ selected: 2 })}><a className={this.state.selected === 2 ? 'active' : 'a:hover:not(.active)'}>Members</a></li>
            <li onClick={() => this.setState({ selected: 3 })}><a className={this.state.selected === 3 ? 'active' : 'a:hover:not(.active)'}>Overview</a></li>
            <li onClick={() => this.setState({ selected: 4 })}><a className={this.state.selected === 4 ? 'active' : 'a:hover:not(.active)'}>Insight</a></li>
            <li onClick={() => this.setState({ selected: 5 })}><a className={this.state.selected === 5 ? 'active' : 'a:hover:not(.active)'}>Logout</a></li>
          </ul>

          {/* <div className='whiteBorder'>
            <div className={this.state.selected === 0 ? 'selected menu' : 'menu select'} onClick={() => this.setState({ selected: 0 })}><a><img src={iconPresent} height="25" width="25" /><b> Activities</b></a></div>
          </div>
          <div className='whiteBorder'>
            <div className='menu'><a className={this.state.selected === 1 ? 'selected' : 'select'} onClick={() => this.setState({ selected: 1 })}>Notification</a></div>
          </div>
          <div className='whiteBorder'>
            <div className='menu'><p className={this.state.selected === 2 ? 'selected' : 'select'} onClick={() => this.setState({ selected: 2 })}>Members</p></div>
          </div>
          <div className='whiteBorder'>
            <div className='menu'><p>Overview</p></div>
          </div>
          <div className='whiteBorder'>
            <div className='menu'><p>Insight</p></div>
          </div>
          <div className='whiteBorder'>

            <div className='menu'><p>Logout</p></div>
          </div> */}
        </div>
        

      </div>
    );
  }
}

export default Home;

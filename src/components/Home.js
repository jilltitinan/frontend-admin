import React, { Component } from 'react';
import kendal from '../images/kendal.jpg';
import iconPresent from '../images/present.png';
import Activity from './Activity.js';
import Noti from './Noti';
import Member from './Member';
import Logout from './Logout';
import { Link, Router, Route, browserHistory } from 'react-router';
import Overview from './Overview';
import Insight from './Insight';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
// import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import { connect } from 'react-redux';
import { login } from '../actions';

const responseGoogle = (response) => {
  console.log(response);
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.location.pathname,
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000000';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  responseLogout() {
    // console.log("respen logout : ", response)
    // this.setState({ modalIsOpen: false });
    browserHistory.push('/')

  }

  render() {

    // const { id_reserve, code, status} = this.props.data.login;

    console.log(this.props.location.pathname);

    console.log("result : ", this.props.data);

    return (
      <div className="App">
        <div className='greenHeader' />
        {this.props.children}

        <div className='grayBorder'>
          <img src={kendal} height="105" width="105" />
          <h1>{this.props.data.w3.ig} </h1>
          <h2>{this.props.data.w3.Eea}</h2>

          <ul className='sidebar'>
            <li onClick={() => this.setState({ selected: 'activity2' })}><Link to='/activity' className={this.state.selected === 'activity2' ? 'active' : 'a:hover:not(.active)'} >Activity</Link></li>
            <li onClick={() => this.setState({ selected: 'noti' })}><Link to="/noti" className={this.state.selected === 'noti' ? 'active' : 'a:hover:not(.active)'} >Notification</Link></li>
            <li onClick={() => this.setState({ selected: 'member' })}><Link to="/member" className={this.state.selected === 'member' ? 'active' : 'a:hover:not(.active)'}>Members</Link></li>
            <li onClick={() => this.setState({ selected: "locker" })}><Link to="/locker" className={this.state.selected === "locker" ? 'active' : 'a:hover:not(.active)'}>Locker</Link></li>
            <li onClick={() => this.setState({ selected: "admin" })}><Link to="/admin" className={this.state.selected === "admin" ? 'active' : 'a:hover:not(.active)'}>Administrator</Link></li>
            <li onClick={this.openModal}><Link className={this.state.selected === "logout" ? 'active' : 'a:hover:not(.active)'}>Logout</Link></li>
          </ul>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"

          >
            <div className='modalLogout'>
              <h2 ref={subtitle => this.subtitle = subtitle}>Are you sure to logout?</h2>
              <div className='loginout' >
                <button className='modalYes' onClick={this.responseLogout}>Yes</button>
                <button className='modalNo' onClick={this.closeModal}>No</button>
              </div>
            </div>

          </Modal>
        </div>
      </div>


    );
  }
}

const mapStateToProps = ({ login }) => {
  const { data } = login;
  return { data };
};

export default connect(mapStateToProps, { login })(Header)

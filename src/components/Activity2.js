import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import { member } from '../actions';
import { Link } from "react-router";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: [],
    }
  }

  componentDidMount() {

    axios.get('https://locker54.azurewebsites.net/web/UserAccountAll')
      .then(response => this.setState({ reserve: response.data }));

  }

  handleClick(id_account) {
    console.log("handle clickkkk");
    console.log('booking ' + id_account);
    this.props.member(id_account);
    // this.props.member(this.state.reserve);
  }

  render() {

    return (
      <div className='contentActivity'>
        <div className='activity'><p><b>MEMBERS</b></p></div>
        <div className='yellowHeader flex-container'>
          <div className='flex1 headerTable'><p><b>User ID</b></p></div>
          <div className='flex1 headerTable'><p><b>Name</b></p></div>
          <div className='flex1 headerTable'><p><b>Using</b></p></div>
          <div className='flex1 headerTable'><p><b>Booked</b></p></div>
          <div className='flex1 headerTable'><p><b>Time up</b></p></div>
        </div>

        {this.state.reserve.map(reserve => (
          // <div className='whiteHeader flex-container' onClick={() => this.handleClick(reserve.id_account)} key={reserve.id_account}>
          <Link to={`overview/${reserve.id_account}`} className='linkClick' key={reserve.id_account}>
            <div className='whiteHeader flex-container' key={reserve.id_account} >
              <div className='flex1 dataTable'><p><b>{reserve.id_account}</b></p></div>
              <div className='flex1 dataTable'><p><b>{reserve.name}</b></p></div>
              <div className='flex1 dataTable'><p><b>{reserve.using}</b></p></div>
              <div className='flex1 dataTable'><p><b>{reserve.booked}</b></p></div>
              <div className='flex1 dataTable'><p><b>{reserve.timeUp}</b></p></div>
            </div>
          </Link>
        ))}
      </div>


    );
  }
}


const mapDispatchToProps = dispatch => ({
  member: (result) => dispatch(member(result))
})
// const mapStateToProps = state => {
//   console.log('state', state.history)
//   return {
//       people: state.history
//   }
// }
export default connect(null, { member })(Member)

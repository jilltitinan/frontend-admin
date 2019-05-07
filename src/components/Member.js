import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import { member } from '../actions';
import { Link, browserHistory } from "react-router";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: [],
    }
  }

  componentDidMount = async () => {
    const value = await localStorage.getItem('token')
    if(value===null){
      browserHistory.push('/')
    }
  
    axios.get('https://lockerce54.azurewebsites.net/web/UserAccountAll',
      { headers: { "Authorization": `Bearer ${value}` } }
    )
      .then(response => this.setState({ reserve: response.data }));

  }

  handleClick(id_account) {
    // console.log("handle clickkkk");
    // console.log('booking ' + id_account);
    this.props.member(id_account);
    // this.props.member(this.state.reserve);
  }

  render() {

    return (
      <div className="main-display">


        <table className="width-80per">
          <p className="header-text"><b>MEMBERS</b></p>
          <tr className="display-flex header-table">
            <th className="flex-1">User ID</th>
            <th className="flex-1">Name</th>
            <th className="flex-1">Using</th>
            <th className="flex-1">Booked</th>
            <th className="flex-1">Time up</th>
          </tr>
          {this.state.reserve.length === 0 &&
            <h2>No Member</h2>
          }
          {this.state.reserve.map(reserve => (
            <Link to={`overview/${reserve.id_account}`} className='linkClick' >
              <tr className="display-flex data-table">
                <td className="flex-1">{reserve.id_account}</td>
                <td className="flex-1">{reserve.name}</td>
                <td className="flex-1">{reserve.using}</td>
                <td className="flex-1">{reserve.booked}</td>
                <td className="flex-1">{reserve.timeUp}</td>
              </tr>
            </Link>
          ))}

        </table>
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

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
      <div className="main-display">
        <p className="header-text"><b>MEMBERS</b></p>

        <table className="width-80per">

          <tr className="display-flex header-table">
            <th className="flex-1">User ID</th>
            <th className="flex-1">Name</th>
            <th className="flex-1">Using</th>
            <th className="flex-1">Booked</th>
            <th className="flex-1">Time up</th>
          </tr>

          {this.state.reserve.map(reserve => (
            <Link to={`overview/${reserve.id_account}`} className='linkClick'>
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

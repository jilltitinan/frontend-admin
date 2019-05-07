import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { Link } from "react-router";
import Home from './Home'

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: [],
    }
  }

  componentDidMount = async () => {
    const value = await localStorage.getItem('token')
    axios.get('https://lockerce54.azurewebsites.net/web/Activity',
      { headers: { "Authorization": `Bearer ${value}` } }
    )
      .then(res => {
        this.setState({ reserve: res.data });
      })
  }

  render() {

    return (
      <div className="main-display">

        <table className="width-80per">

          <p className="header-text"><b>ACTIVITY</b></p>
          <tr className="display-flex header-table">
            <th className="flex-1">Status</th>
            <th className="flex-1">Booking ID</th>
            <th className="flex-1">User ID</th>
            <th className="flex-1">Place</th>
            <th className="flex-1">Date Requested</th>
          </tr>
          {this.state.reserve.length === 0 &&
            <h2>No Activity</h2>
          }
          {this.state.reserve.map(reserve => (
            <Link to={`insight/${reserve.id_booking}`} className='linkClick' key={reserve.id_booking}>

              <tr className="display-flex data-table">
                <td className={`${reserve.status == 'Use' ? 'flex-1 useStatus' : reserve.status == 'Unuse' ? 'flex-1 bookedStatus' : ' flex-1 rejectStatus'}`}>{reserve.status}</td>
                <td className="flex-1">{reserve.id_booking}</td>
                <td className="flex-1">{reserve.id_user}</td>
                <td className="flex-1">{reserve.location}</td>
                <td className="flex-1">{moment(reserve.dateModified).format('DD MMM YYYY')}</td>
              </tr>

            </Link>
          ))}

        </table>
      </div>


    );
  }
}

export default Activity;
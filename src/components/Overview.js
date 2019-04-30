import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link, browserHistory } from "react-router";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {},
      bookList: [],
    }
  }

  componentDidMount = async () => {
    const value = await localStorage.getItem('token')
    axios.get(`https://lockerce54.azurewebsites.net/web/UserOverview?id_account=${parseInt(_.last(window.location.pathname.split('/')))}`,
      { headers: { "Authorization": `Bearer ${value}` } }
    )
      .then(res => {
        const person = res.data
        this.setState({ people: person })
        this.setState({ bookList: this.state.people.bookingList })
        console.log('tttttt', this.state.bookList);
      })
  }

  render() {

    return (
      <div className="main-display">
        <div className='insightButton' onClick={browserHistory.goBack}>
          <a className="previous">&laquo; Previous</a>
        </div>

        <table className="width-80per">
          <p className="header-text"><b>USER OVERVIEW</b></p>
          <tr className="display-flex overview-header-table">
            <th className="flex-1">Overview</th>
            <th className="flex-1"></th>
          </tr>

          <tr className="display-flex overview-data-table">
            <td className="flex-1">Using</td>
            <td className="flex-1">{this.state.people.using}</td>
          </tr>
          <tr className="display-flex overview-data-table">
            <td className="flex-1">Time up</td>
            <td className="flex-1">{this.state.people.timeUp}</td>
          </tr>
          <tr className="display-flex overview-LastContent">
            <td className="flex-1">Coin Left</td>
            <td className="flex-1">{this.state.people.point}</td>
          </tr>
        </table>
        <br />
        <table className="width-80per">

          <tr className="display-flex header-table">
            <th className="flex-1">Status</th>
            <th className="flex-1">Booking ID</th>
            <th className="flex-1">User ID</th>
            <th className="flex-1">Place</th>
            <th className="flex-1">Date Requested</th>
          </tr>

          {this.state.bookList.map(bookList => (
            <Link to={`insight/${bookList.id_booking}`} className='linkClick' key={bookList.id_booking}>
              <tr className="display-flex data-table">
                <td className={`${bookList.status == 'Use' ? 'flex-1 useStatus' : bookList.status == 'Unuse' ? 'flex-1 bookedStatus' : ' flex-1 rejectStatus'}`}>{bookList.status}</td>
                <td className="flex-1">{bookList.id_booking}</td>
                <td className="flex-1">{bookList.id_user}</td>
                <td className="flex-1">{bookList.location}</td>
                <td className="flex-1">{bookList.dateModified}</td>
              </tr>
            </Link>
          ))}

          {
            (this.state.people.timeUp === 0) && (this.state.people.using === 0) && <h3> no data</h3>
          }

        </table>

      </div>


    );
  }
}

export default Overview;
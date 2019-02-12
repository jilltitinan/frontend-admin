import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: [],
      status: 'booked',
      bookingId: '1',
      userId: '580103126',
      place: 'ecc',
      dateRequested: '17/06/2018',
      startDate: '29/06/2018',
    }
  }

  componentDidMount() {
    axios.get('https://locker54.azurewebsites.net/api/Reservation/ReserveAll')
      // .then(response =>
      //   response.data.map(p => {
      //      this.setState({ reserve: p })
      //      return this.state.reserve;
      //   })
      // )
      .then(res => {
        this.setState({ reserve: res.data });
      })

  }


  render() {

    return (
      <div className='contentActivity'>
        <div className='activity'><p><b>ACTIVITY</b></p></div>
        <div className='yellowHeader flex-container'>
          <div className='flex1 headerTable'><p><b>status</b></p></div>
          <div className='flex1 headerTable'><p><b>Booking ID</b></p></div>
          <div className='flex1 headerTable'><p><b>User ID</b></p></div>
          <div className='flex1 headerTable'><p><b>Place</b></p></div>
          <div className='flex1 headerTable'><p><b>Date Requested</b></p></div>
          <div className='flex2 headerTable'><p><b>Start Date</b></p></div>
        </div>

        {this.state.reserve.map(reserve => (
          <div className='whiteHeader flex-container'>

            <div className={`${this.state.reserve.status == 'using' ? 'usingStatus flex1 whiteHeader' : this.state.reserve.status == 'booked' ? 'bookedStatus flex1 whiteHeader' : 'rejectStatus flex1 whiteHeader'}`}>
              <div ><p><b>{reserve.status}</b></p></div>
            </div>
            <div className='flex1 dataTable'><p><b>{reserve.id_reserve}</b></p></div>
            <div className='flex1 dataTable'><p><b>{reserve.id_account}</b></p></div>
            <div className='flex1 dataTable'><p><b>{reserve.location}</b></p></div>
            <div className='flex1 dataTable'><p><b>{moment(reserve.startDay).format('DD-MM-YYYY')}</b></p></div>
            <div className='flex2 dataTable'><p><b>{moment(reserve.endDay).format('DD-MM-YYYY')}</b></p></div>
          </div>))}
      </div>


    );
  }
}

export default Activity;
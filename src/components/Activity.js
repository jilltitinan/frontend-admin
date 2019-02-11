import React, { Component } from 'react';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'booked',
      bookingId: '1',
      userId: '580103126',
      place: 'ecc',
      dateRequested: '17/06/2018',
      startDate: '29/06/2018',
    }
  }
  render() {

    return (
      <div>
        <div className='activity'><p><b>ACTIVITY</b></p></div>
        <div className='yellowHeader flex-container'>
          <div className='flex1 headerTable'><p><b>status</b></p></div>
          <div className='flex1 headerTable'><p><b>Booking ID</b></p></div>
          <div className='flex1 headerTable'><p><b>User ID</b></p></div>
          <div className='flex1 headerTable'><p><b>Place</b></p></div>
          <div className='flex1 headerTable'><p><b>Date Requested</b></p></div>
          <div className='flex2 headerTable'><p><b>Start Date</b></p></div>
        </div>
        <div className='whiteHeader flex-container'>
          <div className={`${this.state.status == 'using' ? 'usingStatus flex1' : this.state.status == 'booked' ? 'bookedStatus flex1' : 'rejectStatus flex1'}`}><p><b>{this.state.status}</b></p></div>
          <div className='flex1 dataTable'><p><b>{this.state.bookingId}</b></p></div>
          <div className='flex1 dataTable'><p><b>{this.state.userId}</b></p></div>
          <div className='flex1 dataTable'><p><b>{this.state.place}</b></p></div>
          <div className='flex1 dataTable'><p><b>{this.state.dateRequested}</b></p></div>
          <div className='flex2 dataTable'><p><b>{this.state.startDate}</b></p></div>
        </div>
      </div>


    );
  }
}

export default Activity;
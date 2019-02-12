import React, { Component } from 'react';

class Noti extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'jill',
      surname: 'sss',
      userId: '555',
      using: '10',
      timeUp: '2',
      coin: '100',
    }
  }

  render() {
    return (
      <div className='contentActivity'>
        <div className='activity'><p><b>Notification</b></p></div>
        <div className='yellowHeader flex-container'>
          <div className='flex1 headerTable'><p><b>status</b></p></div>
          <div className='flex1 headerTable'><p><b>Booking ID</b></p></div>
          <div className='flex1 headerTable'><p><b>User ID</b></p></div>
          <div className='flex1 headerTable'><p><b>Place</b></p></div>
          <div className='flex1 headerTable'><p><b>Date Requested</b></p></div>
          <div className='flex2 headerTable'><p><b>Start Date</b></p></div>
        </div>
      </div>
    );
  }
}

export default Noti;

import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

class Noti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: [],
    }
  }

  componentDidMount() {
    axios.get('https://locker54.azurewebsites.net/web/Notification')
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
        <div className='activity'><p><b>NOTIFICATION</b></p></div>
        <div className='yellowHeader flex-container'>
          <div className='flex1 headerTable'><p><b>status</b></p></div>
          <div className='flex1 headerTable'><p><b>Booking ID</b></p></div>
          <div className='flex1 headerTable'><p><b>User ID</b></p></div>
          <div className='flex1 headerTable'><p><b>Place</b></p></div>
          <div className='flex1 headerTable'><p><b>Date Requested</b></p></div>
        </div>

        {this.state.reserve.map(reserve => (
          <div className='whiteHeader flex-container'>

            <div className={`${reserve.status == 'Use' ? 'usingStatus flex1 whiteHeader' : reserve.status == 'Unuse' ? 'bookedStatus flex1 whiteHeader' : 'rejectStatus flex1 whiteHeader'}`}>
              <div ><p><b>{reserve.status}</b></p></div>
            </div>
            <div className='flex1 dataTable'><p><b>{reserve.id_booking}</b></p></div>
            <div className='flex1 dataTable'><p><b>{reserve.id_user}</b></p></div>
            <div className='flex1 dataTable'><p><b>{reserve.location}</b></p></div>
            <div className='flex1 dataTable'><p><b>{moment(reserve.startDay).format('DD-MM-YYYY')}</b></p></div>
          </div>
        ))}
      </div>


    );
  }
}



export default Noti;
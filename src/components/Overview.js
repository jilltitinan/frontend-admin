import React, { Component } from 'react';
import axios from 'axios';

class Overview extends Component {
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

  render() {


    return (
      <div>
        <button type="submit" value="back" className="backButton">Back</button>
        <div className='container'>
          <div className='overview'>
            <p className='text-header'><b>User Overview</b></p>
          </div>
          <div className="flex-container row">
            <div className='width-200'>
              <p className="text-left"><b>Name</b> TITINAN </p>
            </div>
            <div className='width-200'>
              <p className="text-left"><b>Surname</b> TITINAN </p>
            </div>
          </div>
          <div className="flex-container row">
            <div className='width-200'>
              <p className="text-left"><b>User ID: </b> 580103216 </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex-container">
            <div className="overviewHead flex4 headerTable">Overview</div>
            <div className="overviewHead flex3 headerTable"></div>
          </div>
          <div className="flex-container">
            <div className="overviewContent flex4">Using</div>
            <div className="overviewContent flex3">11 Times</div>
          </div>
          <div className="flex-container">
            <div className="overviewContent flex4">Time up</div>
            <div className="overviewContent flex3">3 Times</div>
          </div>
          <div className="flex-container">
            <div className="overviewLastContent flex4">Coin left</div>
            <div className="overviewLastContent flex3">28 coins</div>
          </div>

        </div>

        <div className="container">
        <br></br>
          <div className='yellowHeader flex-container'>
            <div className='flex1 headerTable'><p><b>status</b></p></div>
            <div className='flex1 headerTable'><p><b>Booking ID</b></p></div>
            <div className='flex1 headerTable'><p><b>User ID</b></p></div>
            <div className='flex1 headerTable'><p><b>Place</b></p></div>
            <div className='flex2 headerTable'><p><b>Date Requested</b></p></div>
            <div className='flex2 headerTable'><p><b>Start Date</b></p></div>
          </div>


          <div className='whiteHeader flex-container'>
            <div className={`${this.state.reserve.status == 'using' ? 'usingStatus flex1 whiteHeader' : this.state.reserve.status == 'booked' ? 'bookedStatus flex1 whiteHeader' : 'rejectStatus flex1 whiteHeader'}`}>
              <div ><p><b>using</b></p></div>
            </div>
            <div className='flex1 dataTable'><p><b>hghdfgh</b></p></div>
            <div className='flex1 dataTable'><p><b>sss</b></p></div>
            <div className='flex1 dataTable'><p><b>sfad</b></p></div>
            <div className='flex2 dataTable'><p><b>fdsffsdfs</b></p></div>
            <div className='flex2 dataTable'><p><b>fsadfasd</b></p></div>
          </div>
        </div>
      </div>



    );
  }
}

export default Overview;
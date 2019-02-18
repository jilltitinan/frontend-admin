import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {},
      bookList: [],
    }
  }

  componentDidMount() {

    axios.get(`https://locker54.azurewebsites.net/web/UserOverview?id=${parseInt(_.last(window.location.pathname.split('/')))}`)
      .then(res => {
        const person = res.data
        this.setState({ people: person })
        this.setState({bookList: this.state.people.bookingList})
        console.log('tttttt', this.state.bookList);
      })
  }

  render() {


    return (
      <div>
       
          <div className='overviewBiggest'>
            <button type="submit" value="back" className="backButton">Back</button>
            <div className='container'>
              <div className='overview'>
                <p className='text-header'><b>User Overview</b></p>
              </div>
              <div className="flex-container row">
                <div className='width-200'>
                  <p className="text-left"><b>Name: </b>{this.state.people.name} </p>
                </div>
                
              </div>
              <div className="flex-container row">
                <div className='width-200'>
                  <p className="text-left"><b>User ID: </b> {this.state.people.userID} </p>
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
                <div className="overviewContent flex3">{this.state.people.using} Times</div>
              </div>
              <div className="flex-container">
                <div className="overviewContent flex4">Time up</div>
                <div className="overviewContent flex3">{this.state.people.timeUp} Times</div>
              </div>
              <div className="flex-container">
                <div className="overviewLastContent flex4">Coin left</div>
                <div className="overviewLastContent flex3">{this.state.people.point} coins</div>
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
              </div>

            { this.state.bookList.map( bookList => (

               <div className='whiteHeader flex-container'>
                {/* <div className={`${this.state.reserve.status == 'using' ? 'usingStatus flex1 whiteHeader' : this.state.reserve.status == 'booked' ? 'bookedStatus flex1 whiteHeader' : 'rejectStatus flex1 whiteHeader'}`}>
              <div ><p><b>using</b></p></div>
            </div> */}
                <div className='flex1 dataTable'><p><b>{bookList.status}</b></p></div>
                <div className='flex1 dataTable'><p><b>{bookList.id_booking}</b></p></div>
                <div className='flex1 dataTable'><p><b>{bookList.id_user}</b></p></div>
                <div className='flex2 dataTable'><p><b>{bookList.location}</b></p></div>
                <div className='flex2 dataTable'><p><b>{bookList.dateModified}</b></p></div>
              </div>
            ))}
             
            </div>
          </div>
      </div>



    );
  }
}

export default Overview;
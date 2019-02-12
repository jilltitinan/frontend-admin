import React, { Component } from 'react';
import axios from 'axios';

class Insight extends Component {

  render() {

    return (

      <div>
        <button type="submit" value="back" className="backButton">Back</button>
        <div className='container'>
          <div className='overview'>
            <p className='text-header'><b>Detail</b></p>
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
        <hr />
        <div className='container'>
          <div className="flex-container row">
            <div className='width-200'>
              <p className="text-left"><b>Leave ID:</b> 123456 </p>
            </div>
            <div className='width-200'>
              <p className="text-left"><b>Place: </b> ECC </p>
            </div>
          </div>
          <div className="flex-container row">
            <div className='width-200'>
              <p className="text-left"><b>Day Start: </b> 01/07/2018 </p>
            </div>
          </div>
          <div className="flex-container row">
            <div className='width-200'>
              <p className="text-left"><b>Day End: </b> 01/08/2018 </p>
            </div>
          </div>
          <div className="flex-container row">
            <div>
              <p className="text-left"><b>Requested Date: </b> 01/07/2018 </p>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Insight;
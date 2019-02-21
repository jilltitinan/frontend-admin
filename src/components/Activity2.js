import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from "react-router";

class Insight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: {},
    }
  }

  componentDidMount() {
    axios.get(`https://locker54.azurewebsites.net/web/ReserveDetail?id_reserve=${parseInt(_.last(window.location.pathname.split('/')))}`)
      .then(res => {
        const info = res.data
        this.setState({ detail: info })
        console.log('detailll ' + this.state.detail);
      })
  }

  render() {

    return (

      <div className='overviewBiggest font20'>
        <button type="submit" value="back" className="backButton">Back</button>
        <div className='container'>
          <div className='overview'>
            <p className='text-header'><b>Detail</b></p>
          </div>
          <div className="flex-container row">
            <div className='width-200'>
              <p className="text-left"><b>Name</b> {this.state.detail.name} </p>
            </div>
          </div>
          <div className="flex-container row">
            <div className='width-600'>
              <p className="text-left"><b>User ID: </b> {this.state.detail.id_user} </p>
            </div>
          </div>
        </div>

        <hr className='lineDesign' />

        <div className='container'>

          <div className="flex-container row">
            <div className='width-200'>
              <p className="text-left"><b>Leave ID:</b> {this.state.detail.bookingID} </p>
            </div>
          </div>

          <div className="flex-container row">
            <div className='width-200'>
              <p className="text-left"><b>Place: </b> {this.state.detail.location} </p>
            </div>
            <div className='width-200'>
              <p className="text-left"><b>Size: </b> {this.state.detail.size} </p>
            </div>
          </div>

          <div className="flex-container row">
            <div className='width-600'>
              <p className="text-left"><b>Day Start: </b> {this.state.detail.startDate} </p>
            </div>
          </div>

          <div className="flex-container row">
            <div className='width-600'>
              <p className="text-left"><b>Day End: </b> {this.state.detail.endDate}</p>
            </div>
          </div>

          <div className="flex-container row">
            <div className='width-600'>
              <p className="text-left"><b>Requested Date: </b> {this.state.detail.dateModified}</p>
            </div>
          </div>

          <div className="flex-container row">
            <div className='width-600'>
              <p className="text-left"><b>Number Vacancy: </b> {this.state.detail.numberVacancy}</p>
            </div>
          </div>


        </div>

      </div >
    );
  }
}

export default Insight;
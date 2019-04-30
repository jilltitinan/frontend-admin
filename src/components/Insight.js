import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link, browserHistory } from "react-router";
import { withRouter } from 'react-router-dom';

class Insight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: {},
    }
  }

  componentDidMount = async () => {
    const value = await localStorage.getItem('token')
    axios.get(`https://lockerce54.azurewebsites.net/web/ReserveDetail?id_reserve=${parseInt(_.last(window.location.pathname.split('/')))}`,
      { headers: { "Authorization": `Bearer ${value}` } })
      .then(res => {
        const info = res.data
        this.setState({ detail: info })
        console.log('detailll ' + this.state.detail);
      })
  }

  render() {

    return (
      <div className="main-display">

        <div className='insightButton' onClick={browserHistory.goBack}>
          <a class="previous">&laquo; Previous</a>
        </div>

        <div className='insightDetail width-80per'>
          <p className="header-text"><b>DETAIL</b></p>

          <p className='pInsight'><b>Name: </b>  {this.state.detail.name}</p>
          <p className='pInsight'><b>User ID: </b>  {this.state.detail.id_user}</p>

          <hr className='hrInsight' />

          <p className='pInsight'><b>Leave ID:</b> {this.state.detail.bookingID} </p>
          <p className='pInsight'><b>Place: </b> {this.state.detail.location}</p>
          <p className='pInsight'><b>Size: </b> {this.state.detail.size}</p>
          <p className='pInsight'><b>Day Start: </b> {this.state.detail.startDate}</p>
          <p className='pInsight'><b>Day End: </b> {this.state.detail.endDate}</p>
          <p className='pInsight'><b>Requested Date: </b> {this.state.detail.dateModified}</p>
          <p className='pInsight'><b>Number Vacancy: </b> {this.state.detail.numberVacancy}</p>
        </div>

      </div>

    );
  }
}

export default Insight;
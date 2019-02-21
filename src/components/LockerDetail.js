import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { Link, browserHistory } from "react-router";

class LockerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserve: [],
        }
    }

    componentDidMount() {
        axios.get(`https://locker54.azurewebsites.net/api/LockerMetadata/LockerMac?mac_address=${parseInt(_.last(window.location.pathname.split('/')))}`)
            .then(res => {
                this.setState({ reserve: res.data });
            })
    }

    render() {

        return (
            <div className="main-display">
                <div className='insightButton' onClick={browserHistory.goBack}>
                    <a class="previous">&laquo; Previous</a>
                </div>

                <table className="width-80per">
                    <p className="header-text"><b>LOCKER DETAIL</b></p>
                    <p>Locker ID:  Location: </p>
                    <div className="addLocker">
                        <a className='addStuff'>+ add locker</a>
                    </div>
                    <tr className="display-flex header-table">
                        <th className="flex-1">Locker ID</th>
                        <th className="flex-1">Location</th>
                        <th className="flex-1">Status</th>
                    </tr>

                    {this.state.reserve.map(reserve => (
                        <Link to={`insight/${reserve.location}`} className='linkClick'>
                            <tr className="display-flex data-table">
                                <td className="flex-1">{reserve.mac_address}</td>
                                <td className="flex-1">{reserve.location}</td>
                                <td className="flex-1">{reserve.isActive}</td>
                            </tr>
                        </Link>
                    ))}

                </table>
            </div>


        );
    }
}

export default LockerDetail;
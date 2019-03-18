import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { Link } from "react-router";

class Locker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserve: [],
        }
    }

    componentDidMount() {
        axios.get('https://locker54.azurewebsites.net/web/Locker')
            .then(res => {
                this.setState({ reserve: res.data });
            })
    }

    render() {

        return (
            <div className="main-display">
                <table className="width-80per">
                    <p className="header-text"><b>LOCKERS</b></p>
                    <div className="addLocker">
                         <a className='addStuff'>+ add locker</a>
                    </div>
                   
                    <tr className="display-flex header-table">
                        <th className="flex-1">Locker ID</th>
                        <th className="flex-1">Location</th>
                        <th className="flex-1">Status</th>
                    </tr>

                    {this.state.reserve.map(reserve => (
                        <Link to={`lockerDetail/${reserve.mac_address}`} className='linkClick' key={reserve.mac_address}>
                            <tr className="display-flex data-table">
                                <td className="flex-1">{reserve.mac_address}</td>
                                <td className="flex-1">{reserve.location}</td>
                                <td className="flex-1">{reserve.isActive.toString()}</td>
                            </tr>
                        </Link>
                    ))}

                </table>
            </div>


        );
    }
}

export default Locker;
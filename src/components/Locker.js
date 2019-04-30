import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { Link } from "react-router";
import { locker } from '../actions';
import { connect } from 'react-redux';



class Locker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserve: [],
        }
    }
    componentDidMount = async () => {
        const value = await localStorage.getItem('token')
        axios.get('https://lockerce54.azurewebsites.net/web/Locker',
            { headers: { "Authorization": `Bearer ${value}` } })
            .then(res => {
                this.setState({ reserve: res.data });
            })
    }

    handleClick(data) {
        this.props.locker(data);
    }

    render() {

        return (
            <div className="main-display">
                <table className="width-80per">
                    <p className="header-text"><b>LOCKERS</b></p>
                    <div className="addLocker">
                        <Link to='/addlocker' className='addStuff'>+ add locker</Link>
                        <Link to='/removelocker' className='removeStuff'>- remove locker</Link>
                    </div>

                    <tr className="display-flex header-table">
                        <th className="flex-1">Locker ID</th>
                        <th className="flex-1">Location</th>
                        <th className="flex-1">Status</th>
                    </tr>
                    {this.state.reserve.length === 0 &&
                        <h2>No Locker</h2>
                    }
                    {this.state.reserve.map(reserve => (
                        <Link to={`lockerDetail/${reserve.mac_address}`} className='linkClick' key={reserve.mac_address} onClick={() => this.handleClick(reserve.mac_address)}>
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


export default connect(null, { locker })(Locker)
import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment, { parseZone } from 'moment';
import { Link, browserHistory } from "react-router";
import { parse } from 'querystring';
import { connect } from 'react-redux';
import { locker } from '../actions';

class LockerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserve: [],
            vacancieslist: [],
        }
    }

    componentDidMount = async () => {
        const value = await localStorage.getItem('token')
        axios.get(`https://locker54.azurewebsites.net/web/lockerDetail?mac_address=${this.props.mac_address}`,
            { headers: { "Authorization": `Bearer ${value}` } })
            .then(res => {
                this.setState({ reserve: res.data, vacancieslist: res.data.vacancieslist });
                console.log("locker detail ", this.state.reserve)
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
                    <p><b>Locker ID  :</b> {this.state.reserve.lockerID} <b>Location  :</b> {this.state.reserve.location}  </p>
                    <div className="addLocker">
                    <Link to='/addvacancy' className='addStuff'>+ add vacancy</Link>
                    </div>
                    <tr className="display-flex header-table">
                        <th className="flex-1">Locker ID</th>
                        <th className="flex-1">Location</th>
                        <th className="flex-1">Status</th>
                    </tr>
                    {this.state.vacancieslist.length === 0 &&
                        <h2>No Vacancy</h2>
                    }
                    {this.state.vacancieslist.map(vacancieslist => (
                        <tr className="display-flex data-table">
                            <td className="flex-1" >{vacancieslist.no_vacancy}</td>
                            <td className="flex-1" >{vacancieslist.size}</td>
                            <td className="flex-1" >{vacancieslist.isActive.toString()}</td>
                        </tr>
                    ))}
                </table>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    const { mac_address } = state.locker;
    return { mac_address };
};

export default connect(mapStateToProps, { locker })(LockerDetail);


// {vacancieslist: Array(2), lockerID: "181.1.1.2", location: "twv"}
// location: "twv"
// lockerID: "181.1.1.2"
// vacancieslist: Array(2)
// 0: {vacancyID: 3, no_vacancy: "01", size: "S", isActive: true}
// 1: {vacancyID: 4, no_vacancy: "02", size: "L", isActive: true}
// length: 2
// __proto__: Array(0)
// __proto__: Object
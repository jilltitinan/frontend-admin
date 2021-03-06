import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { Link, browserHistory } from "react-router";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserve: [],
        }
    }

    componentDidMount = async () => {
        const value = await localStorage.getItem('token')
        if(value===null){
            browserHistory.push('/')
          }    
        axios.get('https://celocker54.azurewebsites.net/web/Admin',
            { headers: { "Authorization": `Bearer ${value}` } })
            .then(res => {
                this.setState({ reserve: res.data });
            })
    }

    render() {

        return (
            <div className="main-display">


                <table className="width-80per">
                    <p className="header-text"><b>ADMINISTRATOR</b></p>
                    <div className="addLocker">
                        <Link to='/addadmin' className='addStuff'>+ add administrator</Link>
                    </div>
                    <tr className="display-flex header-table">
                        <th className="flex-1">Name</th>
                        <th className="flex-1">Email</th>
                    </tr>
                    {this.state.reserve.length === 0 &&
                        <h2>No Administrator</h2>
                    }
                    {this.state.reserve.map(reserve => (
                        <tr className="display-flex data-table">
                            <td className="flex-1">{reserve.name}</td>
                            <td className="flex-1">{reserve.email}</td>
                        </tr>

                    ))}

                </table>
            </div>


        );
    }
}

export default Admin;
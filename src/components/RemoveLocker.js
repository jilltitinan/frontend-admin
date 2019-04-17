import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link, browserHistory } from "react-router";


class RemoveLocker extends Component {
    constructor(props) {
        super(props);
        this.state = { mac_address: '', location: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ mac_address: event.target.value });
    }

    handleLocation(event) {
        this.setState({ location: event.target.value });
    }

    handleSubmit = async (event) => {

        if (this.state.mac_address.length === 0) {
            alert('Please fill in the form');
            event.preventDefault();
            this.setState({
                mac_address: '',
            });
        } else {
            const value = await localStorage.getItem('token')
            axios.post('https://locker54.azurewebsites.net/web/DeleteLocker', {
                "mac_address": this.state.mac_address,               
            },
                // { headers: { "Authorization": `Bearer ${value}` } }
            ) 
            .then(res => {
                if (res.status === 200) {                   
                    alert('Remove successful.');  
                    event.preventDefault();           
                    this.setState({
                        mac_address: '',
                    });                 
                } 
            }).catch(err => {
          
                alert("Something went wrong. Please try again.", err.data);
      
              });
        }
    }

    render() {

        return (
            <div className="main-display">
                <div className='insightButton' onClick={browserHistory.goBack}>
                    <a className="previous">&laquo; Previous</a>
                </div>
                <p className="header-text"><b>REMOVE LOCKER</b></p>

                <form onSubmit={this.handleSubmit} >
                    <div className="containerAddadmin">
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Mac Address
                                </label>
                            </div>
                            <div className="col-75">
                                <input type="text" value={this.state.mac_address} onChange={this.handleChange} />
                            </div>
                        </div>
                        
                        <br></br>
                        <div className='row' >
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default RemoveLocker;
import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link, browserHistory } from "react-router";
import { connect } from 'react-redux';
import { locker } from '../actions';

class AddVacancy extends Component {
    constructor(props) {
        super(props);
        this.state = { mac_address: '', no_vacancy: '', size: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleNo_vacancy = this.handleNo_vacancy.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ mac_address: event.target.value });
    }

    handleNo_vacancy(event) {
        this.setState({ no_vacancy: event.target.value });
    }

    handleSize(event) {
        this.setState({ size: event.target.value });
    }

    handleSubmit = async (event) => {

        if (this.state.size.length === 0 || this.state.no_vacancy.length === 0 || this.state.mac_address === 0) {
            alert('Please fill in the form');
            event.preventDefault();
            this.setState({
                mac_address: `${this.props.mac_address}`,
                no_vacancy: '',
                size: '',
            });
        } else {
            const value = await localStorage.getItem('token')
            axios.post('https://lockerce54.azurewebsites.net/web/AddVacant', {
                "id_vacancy": 0,
                "no_vacancy": this.state.no_vacancy,
                "size": this.state.size,
                "isActive": true,
                "mac_address": this.props.mac_address,
            },
                { headers: { "Authorization": `Bearer ${value}` } }
            )
                .then(res => {
                    if (res.status === 200) {
                        alert('An information was submitted');
                        event.preventDefault();
                        this.setState({
                            mac_address: `${this.props.mac_address}`,
                            no_vacancy: '',
                            size: '',
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
                <p className="header-text"><b>ADD VACANCY</b></p>

                <form onSubmit={this.handleSubmit} >
                    <div className="containerAddadmin">
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Mac Address :
                                </label>
                            </div>
                            <div className="col-75">
                                <input type="text" value={this.props.mac_address} onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Number Vacancy :
                                </label>
                            </div>
                            <div className="col-75">
                                <input type="text" value={this.state.no_vacancy} onChange={this.handleNo_vacancy} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Size (Upper Letter) :
                                </label>
                            </div>
                            <div className="col-75">
                                <input type="text" value={this.state.size} onChange={this.handleSize} />
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

const mapStateToProps = (state) => {
    const { mac_address } = state.locker;
    return { mac_address };
};

export default connect(mapStateToProps, { locker })(AddVacancy);
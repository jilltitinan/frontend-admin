import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link, browserHistory } from "react-router";

class AddAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {

        if (this.state.name.length === 0 || this.state.email.length === 0) {
            alert('Please fill in the form');
            event.preventDefault();
            this.setState({
                name: '',
                email: ''
            });
        } else {
            axios.post('https://lockerce54.azurewebsites.net/web/AddAdminAccount', {
                "id_account": "string",
                "name": this.state.name,
                "phone": "string",
                "email": this.state.email,
                "role": "string",
                "point": 0
            })
            alert('An information was submitted: ' + this.state.value);
            event.preventDefault();
            this.setState({
                name: '',
                email: ''
            });
        }
    }

    render() {

        return (
            <div className="main-display">
                <div className='insightButton' onClick={browserHistory.goBack}>
                    <a className="previous">&laquo; Previous</a>
                </div>
                <p className="header-text"><b>ADMINISTRATOR</b></p>

                <form onSubmit={this.handleSubmit} >
                    <div className="containerAddadmin">
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Name - Surname:
                                </label>
                            </div>
                            <div className="col-75">
                                <input type="text" value={this.state.name} onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Email:
                                </label>
                            </div>
                            <div className="col-75">
                                <input type="text" value={this.state.email} onChange={this.handleEmail} />
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

export default AddAdmin;
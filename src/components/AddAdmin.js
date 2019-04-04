import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { Link } from "react-router";

class AddAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }



    render() {

        return (
            <div className="main-display">
                <p className="header-text"><b>ADMINISTRATOR</b></p>

                <form onSubmit={this.handleSubmit} >
                    <label>
                        Name - Surname:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default AddAdmin;
import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class AddAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: ''};

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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }



    render() {

        return (
            <div className="main-display">
                <p className="header-text"><b>ADMINISTRATOR</b></p>
                <div className='field'>
                    <form onSubmit={this.handleSubmit} >
                        <label>
                            Name - Surname:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <br></br>
                        <label>
                            Email:
          <input type="text" value={this.state.email} onChange={this.handleEmail} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>


            </div>
        );
    }
}

export default AddAdmin;
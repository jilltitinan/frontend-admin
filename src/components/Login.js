import React, { Component } from 'react';
import logo from '../images/LOGOOOOO.png';
import { Link, Router, Route, Redirect, browserHistory } from 'react-router';
import GoogleLogin from 'react-google-login';
import { login } from '../actions';
import { connect } from 'react-redux';



// const responseGoogle = (response) => {
    
//     console.log("google response :", response);
//     this.props.login(response);
// }

class Login extends Component {

    responseGoogle(response) {
        console.log("google response :", response);
        this.props.login(response);
        browserHistory.push('/activity')
    }

    render() {

        return (
            <div className="App">
                <div className='login'>
                    <img src={logo} />
                    <br />
                    <GoogleLogin
                        clientId="367051335006-3ibce4jslddaibdincs9t267vmpgjkob.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle.bind(this)}
                        onFailure={(response) => this.responseGoogle(response)}
                        redirectUri='http://localhost:3000/home'
                    />
                </div>
            </div>
        );
    }
}


export default connect(null, { login })(Login);

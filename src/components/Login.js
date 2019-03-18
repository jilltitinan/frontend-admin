import React, { Component } from 'react';
import logo from '../images/LOGOOOOO.png';
import { Link, Router, Route, Redirect, browserHistory } from 'react-router';
import GoogleLogin from 'react-google-login';
import { login } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reserve: [],

        }
    }
    responseGoogle(response) {
        (async () => {
            let apiRes = null;
            try {
                apiRes = await axios.get(`https://locker54.azurewebsites.net/web/IsAdmin?accountID=${response.El}`)
                    .then(res => {
                        this.setState({ reserve: res.data });
                        console.log("id admin : ", res.data)
                        this.props.login(response);
                        browserHistory.push('/activity')
                    })
            } catch (err) {
                console.error("Error response:");
                console.error(err.response.data);    // ***
                console.error(err.response.status);  // ***
                console.error(err.response.headers); // ***
                this.successShow(err);
            }
            // finally {
            //     console.log("finally :     ", apiRes);
            //     this.props.login(response);
            //     browserHistory.push('/activity')
            // }
        })();



        // console.log("google response :", response);
        // this.props.login(response);
        // browserHistory.push('/activity')

        // axios.get(`https://locker54.azurewebsites.net/api/Account/AdminAccount?id_account=${response.El}`)
        //     .then(res => {
        //         this.setState({ reserve: res.data });
        //         console.log("id admin : ", res.data)
        //     })
    }

    successShow(err) {
        this.setState({
            person: err.data
        });

    }

    responseGoogleFail(response) {
        console.log("google response :", response);

    }

    componentDidMount() {

    }


    render() {

        return (
            <div className="App">
                <div className='login'>
                    <br /><br />
                    <img src={logo} />
                    <br /><br />
                    <h1 className='quoteWhite'>Locker mangement system on a mobile application</h1>
                    <GoogleLogin
                        clientId="367051335006-3ibce4jslddaibdincs9t267vmpgjkob.apps.googleusercontent.com"
                        buttonText="Login with Google account"
                        onSuccess={this.responseGoogle.bind(this)}
                        onFailure={(response) => this.responseGoogleFail(response)}
                        redirectUri='http://localhost:3000/home'
                    />
                </div>
            </div>
        );
    }
}


export default connect(null, { login })(Login);

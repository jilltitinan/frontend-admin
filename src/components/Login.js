import React, { Component } from 'react';
import logo from '../images/LOGOOOOO.png';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

class Login extends Component {
    render() {
        console.log(this.props.location.pathname);
        return (
            <div className="App">
                <div className='login'>
                    <img src={logo} />
                    <br />
                    <GoogleLogin
                        clientId="367051335006-3ibce4jslddaibdincs9t267vmpgjkob.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        ux_mode='redirect'
                        redirectUri='http://localhost:3000/activity'
                    />
                </div>
            </div>


        );
    }
}


export default Login;

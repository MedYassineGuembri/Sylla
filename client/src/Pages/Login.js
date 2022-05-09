import React from 'react';
import Navigation from '../components/Navigation';
import Log from '../components/Log';

const Login = () => {
    return (
        <div className="login-page">
          <div className="Log-container">
              <Navigation />
              <Log />
            </div>
        </div>
    );
};
export default Login;

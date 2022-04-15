import React from 'react';
import Navigation from '../components/Navigation';

const Login = () => {
    return (
        <div className="login">
          <Navigation />
           <body>
            <form>
                <h1>Administrateur Estiam</h1>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Password"/>
                <input type="submit" placeholder="log-in"/>
            </form>
            </body> 
        </div>
    );
};
export default Login;

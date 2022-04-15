import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Recherche from '../../Pages/Recherche'
import Devis from '../../Pages/Devis'
import Cours from '../../Pages/Cours'


const index = () => {
    return (
        <div>
            <Router>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/recherche' exact component={Recherche} />
                <Route path='/cours' exact component={Cours} />
                <Route path='/devis' exact component={Devis} />              
              </Switch>  
            </Router>
        </div>
    );
};

export default index;
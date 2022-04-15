import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink excat to ='/' activeClassName='nav-active'>
                Acceuil
            </NavLink>
            <NavLink excat to ='/recherche' activeClassName='nav-active'>
                Recherche
            </NavLink>
            <NavLink excat to ='/cours' activeClassName='nav-active'>
                Cours
            </NavLink>
            <NavLink excat to ='/login' activeClassName='nav-active'>
                Login
            </NavLink>
        </div>
    );
};

export default Navigation;
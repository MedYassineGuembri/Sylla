import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

const Navigation = () => {
    return (
        <div className="navbar">
            <img src="/img/icons/icon.jpg" width="50" height="50"></img>
            <div className="links">
                
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
        </div>
    );
};

export default Navigation;
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/Home.css";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

const Navigation = () => {
  return (
    <div className="navbar">
      <img src="/img/icons/icon.jpg" width="50" height="50"></img>
      <div className="links">
        <NavLink excat to="/" activeClassName="nav-active">
          Acceuil
        </NavLink>
        <NavLink excat to="/recherche" activeClassName="nav-active">
          Recherche
        </NavLink>
        <NavLink excat to="/cours" activeClassName="nav-active">
          Cours
        </NavLink>
      </div>
      <button className="white_btn" onClick={handleLogout}>
        <img src="./img/icons/logout.svg" width="20" height="20" />
        Logout
      </button>
    </div>
  );
};

export default Navigation;

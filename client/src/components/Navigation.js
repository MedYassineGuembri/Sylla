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
    <div className="x-bar">
      <div className="x-bar-content">
        <div className="x-bar-container-logo">
          <img src="/img/logo_estiam_blanc.png" width="150" height="29"></img>
        </div>
        <div className="links">
          <NavLink excat to="/" activeClassName="nav-active">
            <span className="x-text">Acceuil</span>
          </NavLink>
          <NavLink excat to="/recherche" activeClassName="nav-active">
            <span className="x-text">Recherche</span>
          </NavLink>
          <NavLink excat to="/cours" activeClassName="nav-active">
            <span className="x-text">Cours</span>
          </NavLink>
        </div>
        <img src="/img/happy-at-school.png" width="150" height="75"></img>
      </div>
      <button className="white_btn" onClick={handleLogout}>
        <img src="./img/icons/logout.svg" width="20" height="20" />
        Se déconnecter
      </button>
    </div>
  );
};

export default Navigation;

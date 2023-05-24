import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const NavBarTabs: React.FC = () => {

  return (
    <div className="navbarLinks">
        <Link to="/events">
            <span className="nav-bar__tabs-text">Eventos</span>
        </Link>
        <Link to="/solicitudes">
            <span className="nav-bar__tabs-text">Solicitudes</span>
        </Link>
    </div>
  );
};
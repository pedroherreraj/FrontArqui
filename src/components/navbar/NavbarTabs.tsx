import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import "./Navbar.css";

export const NavBarTabs: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="navbarLinks">
      { user && (
        <>
        <Link to="/events">
            <span className="nav-bar__tabs-text">Eventos</span>
        </Link>
        <Link to="/requests">
            <span className="nav-bar__tabs-text">Solicitudes</span>
        </Link>
        </>
        )}
    </div>
  );
};
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const NavBarLogo: React.FC = () => {
  return (
    <div className="navbarLogo">
      <Link to="/">
        <span className="">Grupo 25</span>
      </Link>
    </div>
  );
};
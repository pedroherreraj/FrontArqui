import React from "react";
import { NavBarLogo } from "./NavbarLogo";
import { NavBarButtons } from "./NavbarButtons";
import { NavBarTabs } from "./NavbarTabs";
import "./Navbar.css";

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
        <NavBarLogo />
        <div className="navbarLinks">
            <NavBarTabs />
            <NavBarButtons />
        </div>
    </nav>
  );
};

import React, { useState } from "react";
import LogInButton from "../Buttons/LoginButton";
import { LogOutButton } from "../Buttons/LogoutButton";
import SignUpButton from "../Buttons/SignupButton";
import { useUser } from "../../context/userContext";
import "./Navbar.css";


export const NavBarButtons: React.FC = () => {

    const { user } = useUser();
  return (
    <div className="navbarActions">
      {!user && (
        <>
          <LogInButton />
          <SignUpButton />
        </>
       )}
      {user && (
        <>
          <LogOutButton />
        </>
      )}
    </div>
  );
};

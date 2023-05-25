import React, { useState } from "react";
import { LogInButton } from "../Buttons/LoginButton";
import { LogOutButton } from "../Buttons/LogoutButton";
import { SignUpButton } from "../Buttons/SignupButton";
import "./Navbar.css";


export const NavBarButtons: React.FC = () => {

    const [user, setUser ] = useState<boolean>(false);
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

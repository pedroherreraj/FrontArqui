import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/userContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './Button.css';

export const LogOutButton = () => {
  const { user, setUser } = useUser();
  const router = useNavigate();

  const handleClick = async () => {
    await axios.delete('https://api.pdesolmi.me/users/logout', {
        headers: { JwtToken: user?.token },
      });
      setUser(null);
      router("/");

  };

  return (
    <a className="button" onClick={ handleClick }>
      Log Out
    </a>
  );
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/navbar/Navbar';

const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;

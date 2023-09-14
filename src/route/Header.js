import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { RouteContext } from './contexts/RouteContext';

const Header = () => {
  const {header} = useContext(RouteContext);
  return (
    <div>
      <header style={header}>
        <ul style={{listStyle: "none"}}>
          <li>헤더</li>
          <li><Link to="/admin">관리자 페이지</Link></li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
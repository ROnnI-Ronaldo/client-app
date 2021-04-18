import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };
  return (
    <nav className='nav'>
      <Link to='/'>Logo</Link>
      <ol>
        <li>
          {localStorage.getItem(token) ? (
            <button onClick={logout}>LogOut</button>
          ) : (
            <NavLink to='/auth'>Login</NavLink>
          )}
        </li>
      </ol>
    </nav>
  );
};

export default Nav;

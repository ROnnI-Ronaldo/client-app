import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/User/userAction";

import "./Nav.css";

const Nav = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <nav className='nav'>
      <Link to='/'>Logo</Link>
      <ol>
        <li>
          {token ? (
            <button onClick={logoutUser}>LogOut</button>
          ) : (
            <NavLink to='/auth'>Login</NavLink>
          )}
        </li>
      </ol>
    </nav>
  );
};

export default Nav;

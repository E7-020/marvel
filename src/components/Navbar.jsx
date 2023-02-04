import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  const Active = ({ isActive }) => (isActive ? "active-link" : "n-active-link");

  return (
    <div className="menu">
      <p>
        <span className="menu-span">Marvel</span> information portal
      </p>
      <div></div>
      <div className="menu-link">
        <NavLink to="/" style={{ textDecoration: "none" }} className={Active}>
          <span className="menu-link-first-span">Characters </span>
        </NavLink>
        <div className="menu-link-slash">/</div>
        <NavLink
          to="/Comics"
          style={{ textDecoration: "none" }}
          className={Active}
        >
          <span className="menu-link-second-span">Comics</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = props => {
  const isActiveFunc = (match, location) => {
    return location.pathname === props.to;
  };
  return (
    <NavLink
      to={props.to}
      isActive={isActiveFunc}
      activeClassName="active"
      className="nav-item"
    >
      {props.children}
    </NavLink>
  );
};

export default NavItem;

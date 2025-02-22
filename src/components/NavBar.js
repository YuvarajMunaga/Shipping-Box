import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import CONSTANTS from "../Atoms/Constants";

const NavBar = () => {
  const location = useLocation();
  const {
    ROUTES: { ADD_BOX, BOX_LIST },
    NAV_ITEMS: { ADD, LIST },
  } = CONSTANTS;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            to={ADD_BOX}
            className={location.pathname === ADD_BOX ? "active-link" : ""}
          >
            {ADD}
          </Link>
        </li>
        <li>
          <Link
            to={BOX_LIST}
            className={location.pathname === BOX_LIST ? "active-link" : ""}
          >
            {LIST}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

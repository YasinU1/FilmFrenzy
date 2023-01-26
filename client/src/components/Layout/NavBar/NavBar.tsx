import React from "react";
import NavBarStyles from "./NavBarStyles";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const NavBar = () => {
  return (
    <NavBarStyles>
      <div>
        {/*Display Logo top right */}
        <Logo className="header-logo" />
        {/*When screen size is less than 767px then show Mobile toolbar with hamburger icon */}
        {/*<nav className="mobile-header">*/}
        {/*  <DrawerToggle clicked={drawerToggleClicked} />*/}
        {/*</nav>*/}
      </div>
      {/*When screen size is greater than 767px then show Desktop toolbar */}
      <nav>
        {/*Display site's title*/}
        <h1>Film Frenzy</h1>
        <ul>
          {/*When Home is clicked redirect to the Home page */}
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          {/*When Films is clicked redirect to the Products page */}
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
          {/*When login is clicked redirect to the login page */}
          <li>
            <NavLink to="/log-in">Login</NavLink>
          </li>
          {/*When signup is clicked redirect to the signup page */}
          <li>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </NavBarStyles>
  );
};
export default NavBar;

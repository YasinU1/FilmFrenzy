import React from "react";
import { NavLink } from "react-router-dom";
import FooterStyles from "./FooterStyles";
import Logo from "../../Logo/Logo";

const Footer = () => {
  return (
    <FooterStyles>
      <nav className="Footer">
        <ul>
          <li>
            {/*When Home is clicked redirect to the Home page */}
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            {/*When Films is clicked redirect to the Products page */}
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
        <p>©FilmFrenzy 2023</p>
      </nav>
    </FooterStyles>
  );
};
export default Footer;

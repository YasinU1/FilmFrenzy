import React, { FC } from "react";
import ButtonStyles from "./ButtonStyles";
import { NavLink } from "react-router-dom";

//Typed properties of the component
interface ButtonProps {
  buttonClick?: any;
  buttonText?: string;
}
/*Button accepts an onClick, title and className
Used to across the site as a standardised button
Uses styled component for styling*/
const Button: FC<ButtonProps> = ({ buttonClick, buttonText }) => {
  return <ButtonStyles onClick={buttonClick}>{buttonText}</ButtonStyles>;
};
export const NavButton: FC<ButtonProps> = ({ buttonClick, buttonText }) => (
  <NavLink to={buttonClick}>
    <Button buttonText={buttonText} />
  </NavLink>
);

export default Button;

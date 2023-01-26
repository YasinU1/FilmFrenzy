import React, { FC } from "react";
import LogoImage from "../../../public/assets/logo.svg";

//Typed properties
interface LogoProps {
  className: string;
}
//Logo component used to display the site's logo through the website
const Logo: FC<LogoProps> = ({ className }) => (
  //When clicked the Logo will redirect to the Home page
  <div onClick={() => window.open("/home", "_self")}>
    {/*Logo accepts className properties to allow custom styling and the Logo Image from the Image folder */}
    <img className={className} src={LogoImage} alt="Logo" />
  </div>
);
export default Logo;

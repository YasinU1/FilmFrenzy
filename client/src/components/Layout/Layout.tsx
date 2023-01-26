import React, {FC} from "react"; 
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

 interface LayoutProps {
    children: React.ReactNode; 
 }
const Layout = ({children}: LayoutProps)=>{
    return (
        <>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}; 
export default Layout; 
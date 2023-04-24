import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";

const Header = () => {
    return (
        <header className="head">
            <NavBar/>
            <HeroSection/> 
        </header>
    )
}

export default Header;
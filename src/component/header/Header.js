import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";

const Header = (props) => {
    return (
        <header className="head">
            <NavBar openSignInForm={props.onOpenSign} />
            {!props.signIn && <HeroSection />}
        </header>
    )
}

export default Header;
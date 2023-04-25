import React, { useRef } from "react";
import logo from "../img/icon-logo.svg"
import NavigationLink from "./NavigationLink";

const NavBar = () => {
    const checkboxRef = useRef(null)
    
    const closeNavHandler = (e) => {
        e.preventDefault();
        if (checkboxRef.checked) checkboxRef.checked = false;
    }
    

    return (
        <div className="nav-bar">
            <div className="logo">
                <img className="w-full" src={logo} alt="logo" />
            </div>    
            
            <input ref={checkboxRef} type="checkbox"  class="checkbox" id="checkbox" />
            
            <nav className="navigation-small">
                <div className="navigation__items-small">
                    <ul>
                        <NavigationLink onCloseNavHandler={closeNavHandler} className="navigation__item font-bold" content="Home" />
                        <NavigationLink onCloseNavHandler={closeNavHandler} className="navigation__item" content="About us" />
                        <NavigationLink onCloseNavHandler={closeNavHandler} className="navigation__item" content="Properties" />
                        <NavigationLink onCloseNavHandler={closeNavHandler} className="navigation__item" content="Contact us" />                      
                    </ul>
                    <div className="log">
                        <button className="btn-signin">Sign in</button>
                        <button className="btn-fill">Sign up</button>
                    </div>
                </div>
            </nav>

            <label for="checkbox" class="navigation__button">
                <span className="hand-burger"></span>
            </label>
        </div>
    )
}

export default NavBar;
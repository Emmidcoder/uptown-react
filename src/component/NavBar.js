import React from "react";

const NavBar = () => {
    
    return (
        <div className="nav-bar">
            <div className="logo">
                <img className="w-full" src={require('../img/logo.png')} alt="logo" />
            </div>

            <nav className="small-nav">
                <div className="hand-burger">&nbsp;</div>
                <div className="hand-burger">&nbsp;</div>
                <div className="hand-burger">&nbsp;</div>
            </nav>

            <nav className="big-nav">
                <ul className="big-nav-items">
                    <li className="font-bold">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About us</a>
                    </li>
                    <li>
                        <a href="/">Properties</a>
                    </li>
                    <li>
                        <a href="/">Contact us</a>
                    </li>
                </ul>
            </nav>

            <div className="log">
                <button className="btn-signin">Sign in</button>
                <button className="btn-fill">Sign up</button>
            </div>
        </div>
    )
}

export default NavBar;
import React from "react";

const NavBar = () => {
    
    return (
        <div class="nav-bar">
            <div class="logo">
                <img class="w-full" src={require('../img/logo.png')} alt="logo" />
            </div>

            <nav class="small-nav">
                <div class="hand-burger">&nbsp;</div>
                <div class="hand-burger">&nbsp;</div>
                <div class="hand-burger">&nbsp;</div>
            </nav>

            <nav class="big-nav">
                <ul class="big-nav-items">
                    <li class="font-bold">
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

            <div class="log">
                <button class="btn-signin">Sign in</button>
                <button class="btn-fill">Sign up</button>
            </div>
        </div>
    )
}

export default NavBar;
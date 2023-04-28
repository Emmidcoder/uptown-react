import React, { useRef, useState } from "react";
import logo from "../img/icon-logo.svg"
import NavigationLink from "./NavigationLink";

const NavBar = () => {
    const [checked, setChecked] = useState(null)
    const checkbox = useRef()

    const toggleNavHandler = () => {
        setChecked(checkbox.current.checked)
    }

    const closeNavHandler = (e) => {
        e.preventDefault()
        checkbox.current.checked = false
        setChecked(checkbox.current.checked)
    }

    return (
        <div className="nav-bar">
            <div className="logo">
                <img className="w-36 " src={logo} alt="logo" />
            </div>

            <div className="overlay"></div>
            <nav className="navigation">
                <div className="flex justify-between">
                    <ul className="navigation__items">
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

            <div>
                <input ref={checkbox} className="checkbox" defaultChecked={checked} onChange={toggleNavHandler} type="checkbox" id="checkbox" />

                <label htmlFor="checkbox">
                    <div className="nav__btn">
                        <div>
                            <span className={`hand-burger__top ${checked === true ? 'cross-top' : ''}`}>&nbsp;</span>
                            <span className={`hand-burger__center ${checked === true ? 'cross-center' : ''}`}>&nbsp;</span>
                            <span className={`hand-burger__bottom ${checked === true ? 'cross-bottom' : ''}`}>&nbsp;</span>
                        </div>
                    </div>
                </label>
            </div>
            {/* <label htmlFor="checkbox" className="navigation__button">
            </label> */}
        </div>
    )
}

export default NavBar;
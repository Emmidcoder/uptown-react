import React, { useRef, useState } from "react";
import logo from "../../img/icon-logo.svg"
import NavigationLink from "./NavigationLink";

const NavBar = (props) => {
    const [checked, setChecked] = useState(null)
    const checkbox = useRef()

    const toggleNavHandler = () => {
        setChecked(checkbox.current.checked)
    }

    const closeNavHandler = (e) => {
        e?.preventDefault()
        checkbox.current.checked = false
        setChecked(checkbox.current.checked)
    }

    const openFormAndCloseNav = () =>{
        props.onOpenSignInForm()
        closeNavHandler()
    }

    return (
        <div className="nav-bar">
            <div className="logo">
                <img className="w-36 " src={logo} alt="logo" />
            </div>

            {/* small screens overlay */}
            <div className={`overlay ${checked === true ? 'toggle-overlay' : '' }`} onClick={closeNavHandler} ></div>
            {/* small screens overlay */}
            
            <nav className={`navigation ${checked === true ? 'toggle-navigation' : '' }`}>
                <div className="w-full flex flex-col md:flex-row md:justify-between gap-6">
                    <ul className="navigation__items">
                        <NavigationLink onCloseNavHandler={closeNavHandler} className="navigation__item font-bold" content="Home" />
                        <NavigationLink onCloseNavHandler={closeNavHandler} className="navigation__item" content="About us" />
                        <NavigationLink onCloseNavHandler={closeNavHandler} className="navigation__item" content="Properties" />
                        <NavigationLink onCloseNavHandler={closeNavHandler} className="navigation__item" content="Contact us" />
                    </ul>

                    <div className="log">
                        <button onClick={openFormAndCloseNav} className="btn-signin">Sign in</button>
                        <button className="btn-fill">Sign up</button>
                    </div>
                </div>
            </nav>

            {/* small screens handbugge */}
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
        </div>
    )
}

export default NavBar;
import React from "react";
import { Link } from "react-router-dom";


const NavigationLink = (props) => {
    return (
        <li className={props.className} onClick={props.onCloseNavHandler} >
            <Link to={props.href}>{props.content}</Link>
        </li>
    )
}

export default NavigationLink
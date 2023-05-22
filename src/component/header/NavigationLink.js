import React from "react";


const NavigationLink = (props) => {
    return (
        <li className={props.className} onClick={props.onCloseNavHandler} >
            <a href="/">{props.content}</a>
        </li>
    )
}

export default NavigationLink
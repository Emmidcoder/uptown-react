import React from "react";


const NavigationLink = (props) => {
    return (
        <li className={props.className}>
            <a onClick={props.onCloseNavHandler} href="/">{props.content}</a>
        </li>
    )
}

export default NavigationLink
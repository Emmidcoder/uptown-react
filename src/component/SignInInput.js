import React from "react";


const SignInInput = (props) => {
    return (
        <div>
            <label htmlFor={props.html}>{props.name}</label>
            <input
                type={props.type}
                id={props.id}>
            </input>
        </div>
    )
}

export default SignInInput;
import React, { useState } from "react";


const SignInInput = (props) => {
    const [inputState, setInputState] = useState('')

    const inputChangeHandler = (e) => {
        setInputState(e.target.value)
        console.log("Hello");

        props.onEmailChangeHandler(inputState)
    }

    return (
        <div className="p-2 flex items-center border-[1px] border-secondary-200 rounded-md">
            <label htmlFor={props.htmlFor}>
                <img src={props.src} alt={props.alt} />
            </label>
            <input className="w-full outline-none"
                type={props.type} id={props.id}
                placeholder={props.placeholder}
                value={inputState}
                onChange={inputChangeHandler}
            />
        </div>
    )
}

export default SignInInput;
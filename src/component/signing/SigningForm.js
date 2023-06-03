import React, {useState} from "react";

import emailIcon from "../../img/icon-email.svg"
import passwordIcon from "../../img/icon-password.svg"



const SigningForm = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value)
        console.log("hello");
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value)
        console.log("hi");
    }

    const submitHandler = () =>{
        props.onSignIn(enteredEmail, enteredPassword)
    }


    return (
        <form className="signin__form--content" onSubmit={submitHandler}>
            
            <div className="signin__form__input">
                <label htmlFor="email">
                    <img src={emailIcon} alt="email-icon" />
                </label>
                <input className="w-full outline-none"
                    type="email" id="email"
                    placeholder="Enter your email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                />
            </div>
            
            <div className="signin__form__input">
                <label htmlFor="password">
                    <img src={passwordIcon} alt="password-icon" />
                </label>
                <input className="w-full outline-none"
                    type="password" id="password"
                    placeholder="Enter your password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                />
            </div>
            
            {props.signingUp && <div className="signin__form__input">
                <label htmlFor="password">
                    <img src={passwordIcon} alt="password-icon" />
                </label>
                <input className="w-full outline-none"
                    type="password" id="password"
                    placeholder="Enter your password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                />
            </div>}

            <button className="signing__btn" type="submit">
                {props.signingUp && <span>Sign in</span>}
                {props.signingIn && <span>Sign up</span>}
            </button>
        </form>
    )
}

export default SigningForm
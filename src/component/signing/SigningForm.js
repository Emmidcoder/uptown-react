import React, {useState} from "react";

import emailIcon from "../../img/icon-email.svg"
import passwordIcon from "../../img/icon-password.svg"



const SigningForm = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword1, setEnteredPassword1] = useState('')
    const [enteredPassword2, setEnteredPassword2] = useState('')

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value)
    }

    const password1ChangeHandler = (e) => {
        setEnteredPassword1(e.target.value)
    }
    
    const password2ChangeHandler = (e) => {
        setEnteredPassword2(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.onSignIn(enteredEmail, enteredPassword1)
        
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
                <label htmlFor="password1">
                    <img src={passwordIcon} alt="password-icon" />
                </label>
                <input className="w-full outline-none"
                    type="password" id="password1"
                    placeholder="Enter your password"
                    value={enteredPassword1}
                    onChange={password1ChangeHandler}
                />
            </div>
            
            {props.signingUp && <div className="signin__form__input">
                <label htmlFor="password2">
                    <img src={passwordIcon} alt="password-icon" />
                </label>
                <input className="w-full outline-none"
                    type="password" id="password2"
                    placeholder="Enter your password"
                    value={enteredPassword2}
                    onChange={password2ChangeHandler}
                />
            </div>}

            <button className="signing__btn" type="submit">
                {props.signingUp && <span>Sign up</span>}
                {props.signingIn && <span>Sign in</span>}
            </button>
        </form>
    )
}

export default SigningForm
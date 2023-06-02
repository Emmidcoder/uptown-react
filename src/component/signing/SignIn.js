import React from "react";
import SignInInput from "./SignInInput";
import logo from "../../img/logo-signing.svg"
import emailIcon from "../../img/icon-email.svg"
import googleLogo from "../../img/logos_google-icon.svg"
import facebookLogo from "../../img/logos_facebook.svg"
import appleLogo from "../../img/ic_baseline-apple.svg"
import passwordIcon from "../../img/icon-password.svg"

import lineIcon from "../../img/icon-Line.svg"

import 'react-lazy-load-image-component/src/effects/blur.css';
import SigningNetwork from "./SigningNetwork";



const SignIn = (props) => {
   
    return (
        <div className="signing">
            <div className="signing__content">
                <div className="signing__logo" >
                    <img src={logo} alt='logo' onClick={props.onCloseSigningHandler}/>
                </div>

                <div className="signing__form">
                    <h2 className="sub-heading2">Welcome</h2>
                    <form className="signin__form--content">

                        <SignInInput
                            htmlFor="email"
                            type="email"
                            id="email"
                            name="Email"
                            placeholder="Enter your email"
                            src={emailIcon}
                        />

                        <SignInInput
                            htmlFor="password"
                            type="password"
                            id="password"
                            name="Password"
                            placeholder="Enter your password"
                            src={passwordIcon}
                        />

                        {props.signingUp && <SignInInput
                            htmlFor="password"
                            type="password"
                            id="password"
                            name="Password"
                            placeholder="Enter your password"
                            src={passwordIcon}
                        />}

                        <button className="signing__btn" type="submit">
                            {props.signingUp && <span>Sign in</span>}
                            {props.signingIn && <span>Sign up</span>}
                        </button>
                    </form>

                    <div className="signing__or">
                        <div>
                            <img src={lineIcon} alt="line-icon" />
                        </div>
                        <div>
                            <p>Or</p>
                        </div>
                        <div>
                            <img src={lineIcon} alt="line-icon" />
                        </div>
                    </div>

                    <div className="signing__networks">
                        <SigningNetwork src={googleLogo} alt="google icon" text="Sign in Google" />
                        <SigningNetwork src={appleLogo} alt="apple icon" text="Sign in Facebook" />
                        <SigningNetwork src={facebookLogo} alt="facebook icon" text="Sign in Apple" />
                    </div>

                    <div className="signing__option">
                        {props.signingIn && <span>Don't have an account?</span>}
                        {props.signingUp && <span>Already have an account?</span>}
                        <span className="text-primary">Sign up</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
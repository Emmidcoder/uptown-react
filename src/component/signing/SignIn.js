import React,{useState} from "react";
import logo from "../../img/logo-signing.svg"

import googleLogo from "../../img/logos_google-icon.svg"
import facebookLogo from "../../img/logos_facebook.svg"
import appleLogo from "../../img/ic_baseline-apple.svg"

import lineIcon from "../../img/icon-Line.svg"

import 'react-lazy-load-image-component/src/effects/blur.css';
import SigningNetwork from "./SigningNetwork";
import SigningForm from "./SigningForm";



const SignIn = (props) => {
    const signIn = (email, password) => {
        props.onSignIn(email, password)
    }
    
    const [signingUp, setSigningUp] = useState(true)
    const [signingIn, setSigningIn] = useState(false)

    const openSignInHandler = () => {
        setSigningIn(true)
        setSigningUp(false)
    }

    const openSignUpHandler = () => {
        setSigningUp(true)
        setSigningIn(false)
    }

    return (
        <div className="signing">
            <div className="signing__content">
                <div className="signing__logo" >
                    <img src={logo} alt='logo' />
                </div>

                <div className="signing__form">
                    <h2 className="sub-heading2">Welcome</h2>

                    <SigningForm signingUp={signingUp} signingIn={signingIn} onSignIn={signIn} />

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
                        {signingIn && <span>Don't have an account? <span className="text-primary cursor-pointer" onClick={openSignUpHandler}>Sign up</span></span>}
                        {signingUp && <span>Already have an account?<span className="text-primary cursor-pointer" onClick={openSignInHandler}>Sign in</span></span>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
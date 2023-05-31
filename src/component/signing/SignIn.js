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
        <div className="signin">

            <div className="w-full h-full">
                <img
                    
                    className="w-full h-full block object-fill"
                    src={require('../../img/Signing-bg-img.png')}
                    placeholdersrc={require('../../img/Signing-bg-img-small.png')}
                    alt="House"
                    effect="blur"
                />
            </div>

            <div className="absolute top-0 left-0 z-20 w-full h-full grid grid-cols-2 grid-rows-1">
                <div className="justify-self-center self-center" >
                    <img src={logo} alt='logo' onClick={props.onCloseSigningHandler}/>
                </div>

                <div className="signin__form">
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

                        {props.signingIn && <button className="p-2 text-white bg-primary flex justify-center rounded-md" type="submit">Sign in</button>}
                        {props.signingUp && <button className="p-2 text-white bg-primary flex justify-center rounded-md" type="submit">Sign up</button>}
                    </form>

                    <div className="mt-8 flex justify-center items-center gap-x-7 text-[#A6A6A6;] text-xl">
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

                    <div className="mt-8 flex flex-col gap-y-3">
                        <SigningNetwork src={googleLogo} alt="google icon" text="Sign in Google" />
                        <SigningNetwork src={appleLogo} alt="apple icon" text="Sign in Facebook" />
                        <SigningNetwork src={facebookLogo} alt="facebook icon" text="Sign in Apple" />
                    </div>

                    {props.signingIn && <div className=" mt-8 text-center text-lg font-semibold">Don't have an account? <span className="text-primary">Sign in</span></div>}
                    {props.signingUp && <div className=" mt-8 text-center text-lg font-semibold">Already have an account? <span className="text-primary">Sign up</span></div>}
                </div>
            </div>
        </div>
    )
}

export default SignIn;
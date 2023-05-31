import React from "react";
import SignInInput from "./SignInInput";
import emailIcon from "../img/icon-email.svg"
import passwordIcon from "../img/icon-password.svg"
// import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';



const SignInForm = () => {
    return (
        <div className="signin">

            <div className="w-full h-full">
                {/* <LazyLoadImage */}
                <img
                    className="w-full h-full block object-fill"
                    src={require('../img/signup-img.png')}
                    placeholderSrc={require('../img/signup-img-small.png')}
                    alt="House"
                    effect="blur"
                />
            </div>

            <div className="">
                <form className="signin__form">
                    <h2 className="sub-heading2">Welcome</h2>

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

                    <button className="p-3 text-white bg-primary flex justify-center rounded-md">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm;
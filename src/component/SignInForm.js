import React from "react";
import SignInInput from "./SignInInput";


const SignInForm = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-secondary-100">
            <form className="p-4 bg-secondary-200">
                <SignInInput html="firstname" type="text" id="firstname" name="Firstname" />

                <SignInInput html="lastname" type="text" id="lastname" name="Lastname" />
                
                <SignInInput html="email" type="email" id="email" name="Email" />
                

                <SignInInput html="password" type="password" id="password" name="Password" />
            </form>
        </div>
    )
}

export default SignInForm;
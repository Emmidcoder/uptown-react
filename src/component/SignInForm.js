import React from "react";


const SignInForm = () => {
    return (
        <div className="max-w-xl bg-">
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email">   
                    </input>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
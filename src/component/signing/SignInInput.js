import React from "react";


const SignInInput = (props) => {
    

    return (
        <div className="p-2 flex items-center border-[1px] border-secondary-200 rounded-md">
            <label htmlFor={props.htmlFor}>
                <img src={props.src} alt={props.alt} />
            </label>
            <input className="w-full outline-none" type={props.type} id={props.id} placeholder={props.placeholder} />
        </div>
    )
}

export default SignInInput;
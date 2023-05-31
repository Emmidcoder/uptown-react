import React from "react";


const SigningNetwork = (props) => {
    return (
        <div className="p-2 flex justify-center items-center gap-x-4 text-lg font-semibold text-[#646464;] border-[1px] border-secondary-200 rounded-md">
            <div>
                <img src={props.src} alt={props.alt} />
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default SigningNetwork;
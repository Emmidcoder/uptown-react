import React from "react";


const SectionHeading = (props) => {
    return (
        <div className="sect-heading">
            <div>
                <h4 className="heading2">{props.heading}</h4>
                <h2 className="sub-heading2">{props.subHeading}</h2>
            </div>

            <div className="slide-btns">
                <button className="btn-round"><i className="fa-solid fa-chevron-left"></i></button>
                <button className="btn-round-fill"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default SectionHeading;
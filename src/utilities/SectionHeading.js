import React from "react";


const SectionHeading = () => {
    return (
        <div className="sect-heading">
            <div>
                <h4 className="heading2">Listed Apartment</h4>
                <h2 className="sub-heading2">Over 1000 homes</h2>
            </div>

            <div className="slide-btns">
                <button className="btn-round"><i className="fa-solid fa-chevron-left"></i></button>
                <button className="btn-round-fill"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default SectionHeading;
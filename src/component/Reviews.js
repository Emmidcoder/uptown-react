import React from "react";
import iconLeft from "../img/icon-quote-left.svg"
import iconRight from "../img/icon-quote-right.svg"
import SectionHeading from "../utilities/SectionHeading";

const Reviews = () => {
    return (
        <section className="reviews">
           <SectionHeading/>

            <div className="reviewer">
                <div className="w-80">
                    <img className="w-full" src={require('../img/reviewer.png')} alt="man" />
                    <h5 className="reviewer__name--small">Blacmeek Jaybee</h5>
                </div>

                <blockquote className="reviewer__qoute">
                    <img className="self-start" src={iconLeft} alt="qoute" />
                    <p className="reviewer__text">Shopping for furniture online allows customers to browse and purchase
                        items
                        from the comfort
                        of their own home. Shopping
                        for furniture online allows customers to browse and purchase items from the comfort of their
                        own home. Shopping for
                        furniture online allows customers to browse and purchase items from the comfort of their own
                        home.</p>
                    <h5 className="reviewer__name--big">Blacmeek Jaybee</h5>
                    <img className="mt-5 self-end" src={iconRight} alt="qoute" />
                </blockquote>
            </div>
        </section>
    )
}

export default Reviews;
import React from "react";
import iconLeft from "../img/icon-quote-left.svg"
import iconRight from "../img/icon-quote-right.svg"
import SectionHeading from "../utilities/SectionHeading";

const Reviews = () => {
    return (
        <section class="reviews">
           <SectionHeading/>

            <div class="reviewer">
                <div class="w-80">
                    <img class="w-full" src={require('../img/reviewer.png')} alt="man" />
                    <h5 class="reviewer__name--small">Blacmeek Jaybee</h5>
                </div>

                <blockquote class="reviewer__qoute">
                    <img class="self-start" src={iconLeft} alt="qoute" />
                    <p class="reviewer__text">Shopping for furniture online allows customers to browse and purchase
                        items
                        from the comfort
                        of their own home. Shopping
                        for furniture online allows customers to browse and purchase items from the comfort of their
                        own home. Shopping for
                        furniture online allows customers to browse and purchase items from the comfort of their own
                        home.</p>
                    <h5 class="reviewer__name--big">Blacmeek Jaybee</h5>
                    <img class="mt-5 self-end" src={iconRight} alt="qoute" />
                </blockquote>
            </div>
        </section>
    )
}

export default Reviews;
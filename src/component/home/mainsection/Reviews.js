import React from "react";
import iconLeft from "../../../img/icon-quote-left.svg"
import iconRight from "../../../img/icon-quote-right.svg"
import SectionHeading from "../../../utilities/SectionHeading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Reviews = () => {
    return (
        <section className="reviews">
            <SectionHeading heading="Clients Review" subHeading="What our clients say" />

            <div className="reviewer">
                <div className="w-80">
                    <LazyLoadImage
                        className="w-full"
                        src={require('../../../img/reviewer.png')}
                        placeholderSrc={require('../../../img/reviewer-small.png')}
                        alt="man"
                        effect="blur"/>
                    
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
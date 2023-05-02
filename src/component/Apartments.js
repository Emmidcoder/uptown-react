import React from "react";
import SectionHeading from "../utilities/SectionHeading";
import Apartment from "./Apartment";

const Apartments = () => {
    return (
        <section className="apartment-sect">
            <SectionHeading heading="Listed Apartment" subHeading="Our 1000 homes"/>

            <div className="apartments">       
                <Apartment img={require('../img/house2.png')} lazyImg={require('../img/house2-small.png')} price="5,500,000"/>
                <Apartment img={require('../img/house3.png')} lazyImg={require('../img/house3-small.png')} price="12,500,000"/>
                <Apartment img={require('../img/house4.png')} lazyImg={require('../img/house4-small.png')} price="4,500,000"/>
                <Apartment img={require('../img/house5.png')} lazyImg={require('../img/house5-small.png')} price="6,000,000"/>
            </div>
        </section>
    )
}

export default Apartments;
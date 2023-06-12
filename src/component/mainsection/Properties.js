import React from "react";
import SectionHeading from "../../utilities/SectionHeading";
import Property from "./Property";

const Properties = () => {
    return (
        <section className="properties-sect">
            <SectionHeading heading="Listed Apartment" subHeading="Our 1000 homes"/>

            <div className="properties">       
                <Property img={require('../../img/house2.png')} lazyImg={require('../../img/house2-small.png')} price="5,500,000"/>
                <Property img={require('../../img/house3.png')} lazyImg={require('../../img/house3-small.png')} price="12,500,000"/>
                <Property img={require('../../img/house4.png')} lazyImg={require('../../img/house4-small.png')} price="4,500,000"/>
                <Property img={require('../../img/house5.png')} lazyImg={require('../../img/house5-small.png')} price="6,000,000"/>
            </div>
        </section>
    )
}

export default Properties;
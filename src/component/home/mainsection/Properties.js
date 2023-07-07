import React from "react";
import Property from "./Property";
import { Link } from "react-router-dom";

const Properties = () => {
    return (
        <section className="properties-sect">
            {/* <NavBar /> */}

            <div className="mt-28">
                <div className="sect-heading">
                    <div>
                        <h4 className="heading2">Listed Apartment</h4>
                        <h2 className="sub-heading2">Our 1000 homes</h2>
                    </div>


                    <button className="btn-fill self-end">
                        <Link to='/Properties'>See more</Link>
                    </button>

                </div>
            </div>
            
            {/* <SectionHeading heading="Listed Apartment" subHeading="Our 1000 homes"/> */}

            <div className="properties">       
                <Property img={require('../../../img/house2.png')} lazyImg={require('../../../img/house2-small.png')} price="5,500,000"/>
                <Property img={require('../../../img/house3.png')} lazyImg={require('../../../img/house3-small.png')} price="12,500,000"/>
                <Property img={require('../../../img/house4.png')} lazyImg={require('../../../img/house4-small.png')} price="4,500,000"/>
                <Property img={require('../../../img/house5.png')} lazyImg={require('../../../img/house5-small.png')} price="6,000,000"/>
            </div>
        </section>
    )
}

export default Properties;
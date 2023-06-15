import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Services = () => {
    return (
        <section className= "services">
            <div className="">
                <LazyLoadImage
                    className="w-full"
                    src={require('../../../img/house6.png')}
                    placeholderSrc={require('../../../img/house6-small.png')}
                    alt="house" />
            </div>

            <div className="max-w-md">
                <div>
                    <h4 className="heading2">Our services</h4>
                    <h2 className="sub-heading2">What we do</h2>
                </div>

                <p className="mt-3">Creating the Future, re-inventing the Present. We make real estate investments
                    accessible to everyone
                    in a way that is
                    simple, secure and profitable</p>

                <ul
                    className="service__details">
                    <li><span className="dot">&nbsp;</span>Buy House</li>
                    <li><span className="dot">&nbsp;</span>Sell Your House</li>
                    <li><span className="dot">&nbsp;</span>Rent House</li>
                    <li><span className="dot">&nbsp;</span>Legal Services</li>
                </ul>

                <button className="services__btn">See more</button>
            </div>
        </section>

    )
}

export default Services;
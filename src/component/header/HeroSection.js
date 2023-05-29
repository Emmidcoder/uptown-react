import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const HeroSection = () => {
    return (
        <section
            className="hero">
            <div className="hero__heading">
                <h1 className="hero__heading--1">Find Your Perfect Future Home</h1>
                <p>We are award winning Real Estate company, Get started with us
                    today and Let us help you find your dream home
                </p>

                <button className="get-btn">Get started</button>
            </div>

            <div className="self-end w-full">
                <LazyLoadImage
                    className="w-full"
                    src={require('../../img/house.png')}
                    placeholderSrc={require('../../img/house-small.png')}
                    alt="House"
                    effect="blur"
                />
            </div>
        </section>
    )
}

export default HeroSection;
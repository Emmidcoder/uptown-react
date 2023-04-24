import React from "react";


const HeroSection = () => {
    return (
        <section
            className="header">
            <div className="heading1-sect">
                <h1 className="heading1">Find Your Perfect Future Home</h1>
                <p className="heading1-p">We are award winning Real Estate company, Get started with us
                    today and Let us help you find your dream home</p>

                <button className="get-btn">Get started</button>
            </div>

            <div className="self-end">
                <img className="h-full" src={require('../img/house.png')} alt="House" />
            </div>
        </section>
    )

}

export default HeroSection;
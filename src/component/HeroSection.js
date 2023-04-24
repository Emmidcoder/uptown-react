import React from "react";


const HeroSection = () => {
    return (
        <section
            class="header">
            <div class="heading1-sect">
                <h1 class="heading1">Find Your Perfect Future Home</h1>
                <p class="heading1-p">We are award winning Real Estate company, Get started with us
                    today and Let us help you find your dream home</p>

                <button class="get-btn">Get started</button>
            </div>

            <div class="self-end">
                <img class="h-full" src={require('../img/house.png')} alt="House" />
            </div>
        </section>
    )

}

export default HeroSection;
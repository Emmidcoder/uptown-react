import React from "react";


const Services = () => {
    return (
        <section class = "services">
            <div>
                <img src={require('../img/house6.png')} alt="house" />
            </div>

            <div class="max-w-md">
                <div>
                    <h4 class="heading2">Our services</h4>
                    <h2 class="sub-heading2">What we do</h2>
                </div>

                <p class="mt-3">Creating the Future, re-inventing the Present. We make real estate investments
                    accessible to everyone
                    in a way that is
                    simple, secure and profitable</p>

                <ul
                    class="service__details">
                    <li><span class="dot">&nbsp;</span>Buy House</li>
                    <li><span class="dot">&nbsp;</span>Sell Your House</li>
                    <li><span class="dot">&nbsp;</span>Rent House</li>
                    <li><span class="dot">&nbsp;</span>Legal Services</li>
                </ul>

                <button class="services__btn">See more</button>
            </div>
        </section>

    )
}

export default Services;
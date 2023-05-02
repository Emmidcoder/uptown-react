import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Subscription = () => {
    return (
        <section className="subscription">
            <div className="pr-4 sm:pr-0">
                <h2 className=" subscription__heading">Subscribe for News and Updates on our properties.</h2>

                <div className="mt-4">
                    <label htmlFor="email">Email</label>
                    <form className="subscription__form">
                        <input className="min-w-0" type="text" id="email" placeholder="Enter your email" />
                        <button className="btn-fill" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="max-w-lg self-end">
                <LazyLoadImage
                    className="h-full"
                    src={require('../img/house.png')}
                    placeholderSrc={require('../img/house-small.png')}
                    alt="house"
                    effect="blur"
                />
            </div>
        </section>
    )
}

export default Subscription 
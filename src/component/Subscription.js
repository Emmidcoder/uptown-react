import React from "react";


const Subscription = () => {
    return (
        <section className="subscription">
            <div className="pr-4 sm:pr-0">
                <h2 className=" subscription__heading">Subscribe for News and Updates on our properties.</h2>

                <div className="mt-4">
                    <label for="email">Email</label>
                    <form className="subscription__form">
                        <input className="min-w-0" type="text" id="email" placeholder="Enter your email" />
                        <button className="btn-fill" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="max-w-lg self-end">
                <img className="h-full " src={require('../img/house.png')} alt="house" />
            </div>
        </section>
    )
}

export default Subscription 
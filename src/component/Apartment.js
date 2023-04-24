import React from "react";
import SectionHeading from "../utilities/SectionHeading";


const Apartment = () => {
    return (
        <section class="apartment-sect">
            <SectionHeading/>

            <div
                class="apartments">
                <div class=" ">
                    <div>
                        <img src={require('../img/house2.png')} alt="house"/>
                    </div>

                    <div class="apartment__details">
                        <h5 class="font-bold">Lekki Ajah, Lagos</h5>
                        <p>Bed: 4 | Bath: 5 | SqFt: 120</p>
                        <div>
                            <button>Book now</button>
                            <p>5,500,000</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={require('../img/house3.png')} alt="house"/>
                    </div>

                    <div class="apartment__details">
                        <h5 class="font-bold">Lekki Ajah, Lagos</h5>
                        <p>Bed: 4 | Bath: 5 | SqFt: 120</p>
                        <div>
                            <button>Book now</button>
                            <p>12,500,000</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={require('../img/house4.png')} alt="house"/>
                    </div>

                    <div class="apartment__details">
                        <h5 class="font-bold">Lekki Ajah, Lagos</h5>
                        <p>Bed: 4 | Bath: 5 | SqFt: 120</p>
                        <div>
                            <button>Book now</button>
                            <p>4,500,000</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={require('../img/house5.png')} alt="house"/>
                    </div>

                    <div class="apartment__details">
                        <h5 class="font-bold">Lekki Ajah, Lagos</h5>
                        <p>Bed: 4 | Bath: 5 | SqFt: 120</p>
                        <div>
                            <button>Book now</button>
                            <p>6,000,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apartment;
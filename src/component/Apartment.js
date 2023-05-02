import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Apartment = (props) => {
    return (
        <div className="w-72">
            <div className="w-full">
                <LazyLoadImage
                    className="w-full"
                    src={props.img}
                    placeholderSrc={props.lazyImg}
                    alt="house" />
            </div>

            <div className="apartment__details">
                <h5 className="font-bold">Lekki Ajah, Lagos</h5>
                <p>Bed: 4 | Bath: 5 | SqFt: 120</p>
                <div>
                    <button>Book now</button>
                    <p>props.price</p>
                </div>
            </div>
        </div>
    )
}

export default Apartment;
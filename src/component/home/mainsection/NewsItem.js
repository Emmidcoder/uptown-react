import React from "react";
import eyeIcon from "../../../img/icon-eye.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const NewsItem = (props) => {
    return (
        <div>
            <div><LazyLoadImage
                src={props.img}
                placeholderSrc={props.lazyImg}
                alt="news-image"
                effect="blur"
            /></div>

            <p className="news__date"><span className="dot">&nbsp;</span> 31 Jan, 2023
            </p>
            <h5 className="news__headline">Asuu: Higher Instition strikes continues</h5>

            <div className="news__views">
                <span className="news__views--icon">
                    <img className="inline" src={eyeIcon} alt="eye-icon" />
                    <p className="inline">546</p>
                </span>
                <button className="news__views--btn">Read more</button>
            </div>
        </div>
    )
}

export default NewsItem;
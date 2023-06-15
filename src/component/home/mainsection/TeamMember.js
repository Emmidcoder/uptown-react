import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const TeamMember = (props) => {
    return (
        <div className="text-center">
            <div><LazyLoadImage
                src={props.img}
                placeholderSrc={props.lazyImg}
                alt="team-member"
                effect="blur"/>
                
            </div>

            <p className="mt-3">{props.title}</p>
            <h5 className="font-semibold">{props.name}</h5>
        </div>
    )
}
export default TeamMember
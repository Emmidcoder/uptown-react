import React from "react";
import SectionHeading from "../utilities/SectionHeading";


const TeamMembers = () => {
    return (
        <section className="team-members">
            <div>
                <SectionHeading/>

                <div
                    className="team-members__detail">
                    <div className="text-center">
                        <div><img src={require('../img/ceo1.png')} alt="team-member"/></div>
                        <p className="mt-3">CEO/Managing Director</p>
                        <h5 className="font-semibold">Mr Olayode Ajibola</h5>
                    </div>
                    <div className="text-center">
                        <div><img src={require('../img/ceo2.png')} alt="team-member"/></div>
                        <p className="mt-3">CEO/Managing Director</p>
                        <h5 className="font-semibold">Mr Olayode Ajibola</h5>
                    </div>
                    <div className="text-center">
                        <div><img src={require('../img/ceo3.png')} alt="team-member"/></div>
                        <p className="mt-3">CEO/Managing Director</p>
                        <h5 className="font-semibold">Mr Olayode Ajibola</h5>
                    </div>
                    <div className="text-center">
                        <div><img src={require('../img/ceo4.png')} alt="team-member"/></div>
                        <p className="mt-3">CEO/Managing Director</p>
                        <h5 className="font-semibold">Mr Olayode Ajibola</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMembers;
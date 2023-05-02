import React from "react";
import SectionHeading from "../utilities/SectionHeading";
import TeamMember from "./TeamMember";


const TeamMembers = () => {
    return (
        <section className="team-members">
            <div>
                <SectionHeading heading="Our Team" subHeading="Meet our team" />

                <div className="team-members__detail">
                    <TeamMember
                        img={require('../img/ceo1.png')}
                        lazyImg={require('../img/ceo1-small.png')}
                        title="CEO/Managing Director"
                        name="Mr Olayode Ajibola"
                    />
                    <TeamMember
                        img={require('../img/ceo2.png')}
                        lazyImg={require('../img/ceo2-small.png')}
                        title="CEO/Managing Director"
                        name="Mr Olayode Ajibola"
                    />
                    <TeamMember
                        img={require('../img/ceo3.png')}
                        lazyImg={require('../img/ceo3-small.png')}
                        title="CEO/Managing Director"
                        name="Mr Olayode Ajibola"
                    />
                    <TeamMember
                        img={require('../img/ceo4.png')}
                        lazyImg={require('../img/ceo4-small.png')}
                        title="CEO/Managing Director"
                        name="Mr Olayode Ajibola"
                    />
                </div>
            </div>
        </section>
    )
}

export default TeamMembers;
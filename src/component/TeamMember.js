import React from "react";
import SectionHeading from "../utilities/SectionHeading";


const TeamMembers = () => {
    return (
        <section class="team-members">
            <div>
                <SectionHeading/>

                <div
                    class="team-members__detail">
                    <div class="text-center">
                        <div><img src={require('../img/ceo1.png')} alt="team-member"/></div>
                        <p class="mt-3">CEO/Managing Director</p>
                        <h5 class="font-semibold">Mr Olayode Ajibola</h5>
                    </div>
                    <div class="text-center">
                        <div><img src={require('../img/ceo2.png')} alt="team-member"/></div>
                        <p class="mt-3">CEO/Managing Director</p>
                        <h5 class="font-semibold">Mr Olayode Ajibola</h5>
                    </div>
                    <div class="text-center">
                        <div><img src={require('../img/ceo3.png')} alt="team-member"/></div>
                        <p class="mt-3">CEO/Managing Director</p>
                        <h5 class="font-semibold">Mr Olayode Ajibola</h5>
                    </div>
                    <div class="text-center">
                        <div><img src={require('../img/ceo4.png')} alt="team-member"/></div>
                        <p class="mt-3">CEO/Managing Director</p>
                        <h5 class="font-semibold">Mr Olayode Ajibola</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMembers;
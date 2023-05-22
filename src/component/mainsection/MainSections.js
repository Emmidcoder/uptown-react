import React from "react";
import PropertiesDetails from './PropertieDetails';
import TrusteeCompanies from './TrusteeCompanies';
import Apartments from './Apartments';
import Services from './Services';
import TeamMembers from './TeamMembers';
import Reviews from './Reviews';
import News from './News';
import Subscription from './Subscription';
import Footer from '../Footer';

const MainSections = () => {
    return (
        <main>
            <PropertiesDetails />

            <TrusteeCompanies />

            <Apartments />

            <Services />

            <TeamMembers />

            <Reviews />

            <News />

            <Subscription />

            <Footer />

        </main>
    )
}

export default MainSections;
import React from "react";
import PropertiesDetails from './Cathegories';
import TrusteeCompanies from './TrusteeCompanies';
import Properties from './Properties';
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

            <Properties />

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
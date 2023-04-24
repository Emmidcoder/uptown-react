import React, {useEffect} from 'react';
import Header from './component/Header';
import PropertiesDetails from './component/PropertieDetails';
import TrusteeCompanies from './component/TrusteeCompanies';
import Apartment from './component/Apartment';
import Services from './component/Services';
import TeamMembers from './component/TeamMember';
import Reviews from './component/Reviews';
import News from './component/News';
import Subscription from './component/Subscription';
import Footer from './component/Footer';

function App() {
  useEffect(() => {
    document.body.classList.add('body')
  },[])


  return (
    <React.Fragment>
      <Header />

      <PropertiesDetails />
      
      <TrusteeCompanies />
      
      <Apartment />
      
      <Services />
      
      <TeamMembers />
      
      <Reviews />
      
      <News />

      <Subscription />
      
      <Footer/>
    </React.Fragment>
  );
}

export default App;

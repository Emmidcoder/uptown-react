import React, {useEffect} from 'react';
import Header from './component/Header';
import PropertiesDetails from './component/PropertieDetails';
import TrusteeCompanies from './component/TrusteeCompanies';
import Apartment from './component/Apartment';
import Services from './component/Services';
import TeamMembers from './component/TeamMember';
import Reviews from './component/Reviews';

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
      
      <Reviews/>
    </React.Fragment>
  );
}

export default App;

import React, { useEffect, useState} from 'react';
import Header from './component/header/Header';
import MainSections from './component/mainsection/MainSections';
import SignInForm from './component/SignInForm';

function App() {
  useEffect(() => {
    document.body.classList.add('body')
  }, [])

  const [signingIn, setSigningIn] = useState(false)
  
  const openSignInHandler = () => {
    setSigningIn(true)
  }



  return (
    <React.Fragment>
      <Header signIn={signingIn} onOpenSign={openSignInHandler} />

      {!signingIn && <MainSections />} 

      {signingIn && <SignInForm />}
      
    </React.Fragment>
  );
}

export default App;

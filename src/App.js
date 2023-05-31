import React, { useEffect, useState } from 'react';
import Header from './component/header/Header';
import MainSections from './component/mainsection/MainSections';
import SignInForm from './component/SignInForm';
import NavBar from './component/header/NavBar';

function App() {
  useEffect(() => {
    document.body.classList.add('body')
  }, [])

  const [signingIn, setSigningIn] = useState(false)

  const [home, setHome] = useState(false)



  const openSignInHandler = () => {
    setSigningIn(true)
  }

  const openHomeHandler = () => {
    setHome(true)
  }

  return (
    <React.Fragment>

      {!signingIn && <NavBar onOpenSignInForm={openSignInHandler} onOpenHomeHandler={openHomeHandler} home={home} />}
      {!signingIn && <Header />}

      {!signingIn && <MainSections />}

      {signingIn && <SignInForm />}

    </React.Fragment>
  );
}

export default App;

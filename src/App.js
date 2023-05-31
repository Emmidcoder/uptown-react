import React, { useEffect, useState } from 'react';
import Header from './component/header/Header';
import MainSections from './component/mainsection/MainSections';
import SignIn from './component/signing/SignIn';
import NavBar from './component/header/NavBar';

function App() {
  useEffect(() => {
    document.body.classList.add('body')
  }, [])

  const [signing, setSigning] = useState(false)
  const [signingIn, setSigningIn] = useState(false)
  const [signingUp, setSigningUp] = useState(false)

  const openSignInHandler = () => {
    setSigning(true)
    setSigningIn(true)
  }

  const openSignUpHandler = () => {
    setSigning(true)
    setSigningUp(true)
  }

  const closeSigningHandler = () => {
    setSigning(false)
    setSigningIn(false)
    setSigningUp(false)
  }

  return (
    <React.Fragment>

      {!signing && <NavBar
        onOpenSignInForm={openSignInHandler}
        onOpenSignUpForm={openSignUpHandler}
      />}

      {!signing && <Header />}

      {!signing && <MainSections />}

      {signing && <SignIn
        signingIn={signingIn}
        signingUp={signingUp}

        onCloseSigningHandler={closeSigningHandler}
      />}

    </React.Fragment>
  );
}

export default App;

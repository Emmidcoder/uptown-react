import React, { useEffect, useState } from 'react';
import Header from './component/header/Header';
import MainSections from './component/mainsection/MainSections';
import SignIn from './component/signing/SignIn';
import NavBar from './component/header/NavBar';

function App() {
  useEffect(() => {
    document.body.classList.add('body')

    // const logins = []
  }, [])

  const [signing, setSigning] = useState(true)
  const [signingUp, setSigningUp] = useState(true)
  const [signingIn, setSigningIn] = useState(false)

  const openSignInHandler = () => {
    setSigningIn(true)
    setSigningUp(false)
  }

  const openSignUpHandler = () => {
    setSigningUp(true)
    setSigningIn(false)
  }

  const closeSigningHandler = () => {
    setSigning(false)
    setSigningIn(false)
    setSigningUp(false)
  }


  

  
  const loginHandler = (email, password) => {
    const signUpDetails = {
      email: email,
      password: password
    }
    
    logins.push(signUpDetails)
    console.log(logins);
    
    localStorage.setItem("signUpObj", JSON.stringify(logins))

    closeSigningHandler()
  }


  return (
    <React.Fragment>
      {!signing && <NavBar />}

      {!signing && <Header />}

      {!signing && <MainSections />}

      {signing && <SignIn
        signingIn={signingIn}
        signingUp={signingUp}

        onOpenSignInForm={openSignInHandler}
        onOpenSignUpForm={openSignUpHandler}
        onSignIn={loginHandler}
      />}
    </React.Fragment>
  );
}

export default App;

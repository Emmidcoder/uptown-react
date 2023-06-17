import React, { useEffect, useRef, useState } from 'react';
import Header from './component/home/header/Header';
import MainSections from './component/home/mainsection/MainSections';
import SignIn from './component/signing/SignIn';
import NavBar from './component/NavBar'
import LoadingSpinner from './component/LoadingSpinner';


function App() {
  useEffect(() => {
    document.body.classList.add('body')
  }, [])

  const [loggedIn, setLoggedIn] = useState(false)

  const closeSigningHandler = () => {
    setLoggedIn(true)
  }

  const logins = []
  const login = useRef(logins)

  useEffect(() => {
    const getLocalStorage = function () {
      const data = JSON.parse(localStorage.getItem('signUpObj'))
      if (!data) return

      login.current = data

      setLoggedIn(true)
    }
    getLocalStorage()
  }, [])

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

  const [pageOpen, setPageOpen] = useState(false)


  const openPageHandler = () => {
    setPageOpen(true)
    console.log("Hello");
    console.log(pageOpen);
  }


  return (
    <React.Fragment>
      {!loggedIn && <SignIn
        onSignIn={loginHandler}
      />}

      {loggedIn && <Header />}
      {loggedIn && <MainSections pageOpen={pageOpen} />}

      {loggedIn && <NavBar onPageOpenHandler={openPageHandler} />}

      <LoadingSpinner/>

    </React.Fragment>
  );
}

export default App;

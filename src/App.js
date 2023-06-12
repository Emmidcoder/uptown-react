import React, { useEffect, useState } from 'react';
import Header from './component/header/Header';
import MainSections from './component/mainsection/MainSections';
import SignIn from './component/signing/SignIn';
import NavBar from './component/header/NavBar';
// import axios from 'axios';


// const options = {
//   method: 'POST',
//   url: 'https://realty-in-us.p.rapidapi.com/properties/v3/list',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': 'dc0e7d7af5msh0d3af07996a02e0p182a86jsn2d27590b7e5b',
//     'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
//   },
//   data: {
//     limit: 200,
//     offset: 0,
//     postal_code: '90004',
//     status: [
//       'for_sale',
//       'ready_to_build'
//     ],
//     sort: {
//       direction: 'desc',
//       field: 'list_date'
//     }
//   }
// };




function App() {
  useEffect(() => {
    document.body.classList.add('body')
  }, [])

  // useEffect(() => {
  //   const propertiesAPI = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  
  //   propertiesAPI()
  // }, [])

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

  let logins = []

  const getLocalStorage = function () {
    const data = JSON.parse(localStorage.getItem('signUpObj'))
    if (!data) return

    logins = data
  }
  getLocalStorage()

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

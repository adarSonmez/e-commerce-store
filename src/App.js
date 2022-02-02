import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Header from './components/header/Header';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/userAuth';
import { getDocByID } from './firebase/controller';
import './App.scss';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [userInfo, setUserInfo] = useState();

  // Listen user's current status.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user !== null) {
        getDocByID('users', user?.uid, setUserInfo);
      } else {
        setUserInfo(null);
      }
    });
    return unsub;
  }, [auth]);

  return (
    <div className="App">
      <Header listenUser={currentUser} />
      <div>{userInfo?.name}</div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

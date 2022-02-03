import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Header from './components/header/Header';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/userAuth';
import { getDocByID } from './firebase/controller';
import './App.scss';

function App({ setCurrentUser, userInfo }) {
  useEffect(() => {
    // Listen user's current status.
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth !== null) {
        getDocByID('users', userAuth, setCurrentUser);
      } else {
        setCurrentUser({
          userAuth: null,
          userInfo: {
            id: null,
            name: null,
            email: null,
          },
        });
      }
    });
    return unsub;
  }, [auth]);

  return (
    <div className="App">
      <Header />
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

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

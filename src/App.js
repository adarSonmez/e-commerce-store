import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/userAuth';
import { getDocByID } from './firebase/controller';
import { selectUserAuth, selectUserInfo } from './redux/user/user.selectors';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Header from './components/header/Header';

function App({ setCurrentUser, userInfo, userAuth }) {
  useEffect(() => {
    // Listen user's current status. (Observable pattern)
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth !== null) {
        getDocByID('users', userAuth, (snapshot) => {
          let userInfo = { ...snapshot.data(), id: snapshot.id };
          setCurrentUser({ userAuth, userInfo });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return unsub;
  }, [setCurrentUser]);

  return (
    <>
      <Header userName={userInfo?.name} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route
          path="/checkout"
          element={
            userAuth ? <CheckoutPage /> : <Navigate replace to="/signup" />
          }
        />
        <Route
          path="/signin"
          element={userAuth ? <Navigate replace to="/" /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={userAuth ? <Navigate replace to="/" /> : <SignUp />}
        />
        {/** No match route approach */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  userInfo: selectUserInfo,
  userAuth: selectUserAuth,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

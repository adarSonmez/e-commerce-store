import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Header from './components/header/Header';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/userAuth';
import { getDocByID } from './firebase/controller';
import './App.scss';
import { selectUserAuth, selectUserInfo } from './redux/user/user.selectors';
import CollectionPage from './pages/collection/CollectionPage';
import CollectionOverview from './components/collection-overview/CollectionOverview';

function App({ setCurrentUser, userInfo, userAuth }) {
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
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header userName={userInfo?.name} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />}>
          <Route path="" element={<CollectionOverview />} />
          <Route path=":collectionId" element={<CollectionPage />} />
        </Route>
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
    </div>
  );
}

/*
With createStructuredSelector you don't need to send state as a argument
like shown below:
const mapStateToProps = state => ({userAuth: selectUserAuth(state)})
*/
const mapStateToProps = createStructuredSelector({
  // Memoized selectors
  userInfo: selectUserInfo,
  userAuth: selectUserAuth,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

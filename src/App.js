import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './store/features/auth/auth.slice';

import { auth } from './firebase/userAuth';
import { selectUserInfo } from './store/features/auth/auth.selectors';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Header from './components/header/Header';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (auth) => {
      dispatch(setCurrentUser(auth));
    });
  }, [dispatch]);

  return (
    <>
      <Header userName={userInfo?.name} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route
          path="/checkout"
          element={
            userInfo.id ? <CheckoutPage /> : <Navigate replace to="/signup" />
          }
        />
        <Route
          path="/signin"
          element={userInfo.id ? <Navigate replace to="/" /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={userInfo.id ? <Navigate replace to="/" /> : <SignUp />}
        />
        {/** No match route approach */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import './App.scss';
import Header from './components/header/Header';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import { currentUser } from './firebase/auth';

function App() {
  // Listen user's current status.
  const [user, setUser] = useState(null);
  const listenUser = currentUser(user, setUser);

  return (
    // Define elements corresponding to each path.
    <div className="App">
      <Header listenUser={listenUser} />
      <div>{user?.displayName}</div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignIn listenUser={user} />} />
        <Route path="/signup" element={<SignUp listenUser={listenUser} />} />
      </Routes>
    </div>
  );
}

export default App;

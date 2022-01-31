import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import './App.scss';
import Header from './components/header/Header';
import SignIn from './pages/sign-in/SignIn';

function App() {
  return (
    // Define elements corresponding to each path.
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hats" element={'Hats'} />
        <Route path="/jackets" element={'Jackets'} />
        <Route path="/sneakers" element={'Sneakers'} />
        <Route path="/womens" element={'Womens'} />
        <Route path="/mens" element={'Mens'} />
      </Routes>
    </div>
  );
}

export default App;

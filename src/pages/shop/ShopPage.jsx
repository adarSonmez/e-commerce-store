import React from 'react';
import { Outlet } from 'react-router-dom';

function ShopPage() {
  // Map through each collection (hats, sneaker...) and display them.
  return (
    <div className="shop-page">
      <Outlet />
    </div>
  );
}

export default ShopPage;

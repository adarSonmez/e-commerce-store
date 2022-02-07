import React from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';

function ShopPage() {
  // Map through each collection (hats, sneaker...) and display them.
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
}

export default ShopPage;

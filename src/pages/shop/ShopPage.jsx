import React, { useState } from 'react';
import CollectionSlider from '../../components/collection_slider/CollectionSlider';
import { SHOP_DATA } from './shop.data';

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);

  // Map through each collection (hats, sneaker...) and display them.
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionSlider key={id} {...otherProps}/>
      ))}
    </div>
  );
}

export default ShopPage;

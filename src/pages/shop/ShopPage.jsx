import React, { Component, useState } from 'react';
import CollectionPreview from '../../components/collection_preview/CollectionPreview';
import { SHOP_DATA } from './shop.data';

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);

  // Map through each collection (hats, sneaker...) and display them.
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default ShopPage;

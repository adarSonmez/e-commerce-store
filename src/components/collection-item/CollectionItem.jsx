import React from 'react';
import './CollectionItem.scss';

function CollectionItem({ id, name, price, imageUrl }) {
  // Return collections with an image and price.
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;

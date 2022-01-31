import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

function CollectionPreview({ title, items }) {
  // Display only four collection items for each collection.
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;

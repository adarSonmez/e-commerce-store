import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/CollectionItem';

import './CollectionPage.scss';

function CollectionPage() {
  const {collectionId} = useParams();
  const collection = useSelector(selectCollection(collectionId));

  if (!collection) return <div className='loading'>Loading...</div>;
  else {
    const items = collection.items;
    const title = collection.title;

    return (
      <div className="collection-page page">
        <h2 className="title">{title.toUpperCase()}</h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default CollectionPage;

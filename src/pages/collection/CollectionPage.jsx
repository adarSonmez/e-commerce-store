import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/CollectionItem';

import './CollectionPage.scss';

function CollectionPage() {
  const params = useParams();
  const collection = useSelector(selectCollection(params.collectionId));
  const navigate = useNavigate();

  // I know that looks so interesting.
  // But this line handles some errors gracefully
  if (collection.length === 0) return <div onLoad={navigate('/')} />;
  else {
    const items = collection[0].items;
    const title = collection[0].title;

    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
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

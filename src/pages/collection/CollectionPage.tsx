import { useParams } from 'react-router-dom';

import {
  selectCollection,
  selectShopRequestStatus,
} from '../../store/features/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/CollectionItem';

import './CollectionPage.scss';
import { useAppSelector } from '../../store/hooks';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const shopRequestStatus = useAppSelector(selectShopRequestStatus);

  const collection = useAppSelector(selectCollection(collectionId!))!;

  return shopRequestStatus === 'loading' ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="collection-page page">
      <h2 className="title">{collection.title.toUpperCase()}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

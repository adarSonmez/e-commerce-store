import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { loadCollections } from '../../store/features/shop/shop.slice';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import { useAppDispatch } from '../../store/hooks';

// Get updated categories on every render
const ShopPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCollections());
  }, [dispatch]);

  return (
    <div className="shop-page page">
      <Routes>
        <Route path="" element={<CollectionOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;

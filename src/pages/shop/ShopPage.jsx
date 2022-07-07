import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loadCollections } from '../../store/features/shop/shop.slice';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

// Get updated categories on every render
function ShopPage() {
  const dispatch = useDispatch();

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
}

export default ShopPage;

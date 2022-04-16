import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllDocuments } from '../../firebase/controller';

import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import { convertCollectionsSnapshotToMap } from '../../redux/shop/shop.utils';

// Get updated categories on every render
function ShopPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllDocuments('collections', async (docs) => {
      const mapped = await convertCollectionsSnapshotToMap(docs);
      dispatch(updateCollections(mapped));
    });
  });

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

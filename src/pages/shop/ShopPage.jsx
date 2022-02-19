import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllDocuments } from '../../firebase/controller';

import { updateCollections } from '../../redux/shop/shop.actions';
import { convertCollectionsSnapshotToMap } from '../../redux/shop/shop.utils';

function ShopPage({ updateCollections }) {
  useEffect(() => {
    getAllDocuments('collections')
      .then((allDocs) => convertCollectionsSnapshotToMap(allDocs))
      .then((map) => updateCollections(map));
  });

  // Map through each collection (hats, sneaker...) and display them.
  return (
    <div className="shop-page page">
      <Outlet />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

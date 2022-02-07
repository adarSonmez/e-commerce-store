import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionSlider from '../collection_slider/CollectionSlider';
import { selectCollectionsAsArray } from '../../redux/shop/shop.selectors.js';

function CollectionOverview({ collections }) {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionSlider key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionOverview);

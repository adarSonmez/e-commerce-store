import React, { Component } from 'react';
import CollectionPreview from '../../components/collection_preview/CollectionPreview';
import SHOP_DATA from './shop.data';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  // Map through each collection (hats, sneaker...) and display them.
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import { addItem } from '../../redux/cart/cart.actions';

import './CollectionItem.scss';

// Display name, image, and price of each collection item
function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image-wrapper"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="collection-footer">
          <span className="name">{name.toUpperCase()}</span>
        </div>{' '}
        <CustomButton onClick={() => addItem(item)} inverted="true">
          Add to cart {'$' + price}
        </CustomButton>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

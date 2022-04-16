import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/CustomButton';
import './CollectionItem.scss';

// Display name, image, and price of each collection item
function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const addItemToTheCart = () => dispatch(addItem(item));

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
        <CustomButton onClick={addItemToTheCart} inverted="true">
          Add to cart {'$' + price}
        </CustomButton>
      </div>
    </div>
  );
}

export default CollectionItem;

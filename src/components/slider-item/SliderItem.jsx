import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.slice';
import CustomButton from '../custom-button/CustomButton';
import './SliderItem.scss';

function SliderItem({ item, currentID, setCurrentOnClick }) {
  const slideRef = useRef();
  const dispatch = useDispatch();
  const { id, name, imageUrl, price } = item;

  const addItemToTheCart = () => dispatch(addItem(item));

  // Cool effect on mouse move
  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      '--x',
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      '--y',
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = () => {
    slideRef.current.style.setProperty('--x', 0);
    slideRef.current.style.setProperty('--y', 0);
  };

  // Get clicked slide
  const handleSlideItemClick = () => {
    setCurrentOnClick(id);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  // Set class names to slides to focus current one
  const setClassNames = () => {
    let classNames = 'slide';

    if (currentID === id - 1) classNames += ' slide-current';
    else if (currentID - 1 === id - 1) classNames += ' slide-previous';
    else if (currentID + 1 === id - 1) classNames += ' slide-next';

    return classNames;
  };

  return (
    <li
      ref={slideRef}
      className={setClassNames()}
      onClick={handleSlideItemClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide-image-wrapper">
        <img
          className="slide-image"
          alt={name}
          src={imageUrl}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide-content">
        <h2 className="slide-headline">{name}</h2>
        <h2 className="price">{'$' + price}</h2>
        <CustomButton inverted="true" onClick={addItemToTheCart}>
          ADD TO CART
        </CustomButton>
      </article>
    </li>
  );
}

export default SliderItem;

import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/CustomButton';
import './SliderItem.scss';

function SliderItem({ item, addItem, slide, currentID, handleSlideClick }) {
  const slideRef = useRef();
  const { id, name, imageUrl, price } = slide;

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
  const handleSideClick = () => {
    handleSlideClick(id);
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
      onClick={handleSideClick}
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
        <CustomButton inverted="true" onClick={() => addItem(item)}>
          ADD TO CART
        </CustomButton>
      </article>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SliderItem);

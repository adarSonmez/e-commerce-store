import React, { useState } from 'react';
import SliderItem from '../slider-item/SliderItem';
import './CollectionSlider.scss';

function CollectionSlider({ title, items, routeName }) {
  const [current, setCurrent] = useState(0);

  // Change current slide when user clicks right or left of the slider
  const handleSlideClick = (index) => {
    let turn = index - items[0].id;

    if (current !== turn) {
      setCurrent(turn);
    }
  };

  // Move slides based on (rerendered) current slide
  const moveSlideFocus = () => {
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / items.length)}%)`,
    };
    return wrapperTransform;
  };

  return (
    <div className="slider-container">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="slider">
        <ul className="slider-wrapper" style={moveSlideFocus()}>
          {items.map((slide) => (
            <SliderItem
              key={slide.id}
              slide={slide}
              currentID={current + items[0].id - 1}
              handleSlideClick={handleSlideClick}
              item={slide}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CollectionSlider;

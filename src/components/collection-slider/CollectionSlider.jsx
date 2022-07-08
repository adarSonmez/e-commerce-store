import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectShopRequestStatus } from '../../store/features/shop/shop.selectors';
import SliderItem from '../slider-item/SliderItem';
import './CollectionSlider.scss';

function CollectionSlider({ title, items, routeName }) {
  const [current, setCurrent] = useState(0);

  const shopRequestStatus = useSelector(selectShopRequestStatus);
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(routeName);

  // Change current slide when user clicks right or left of the slider
  const setCurrentOnClick = (index) => {
    let turn = index - items[0].id;

    if (current !== turn) {
      setCurrent(turn);
    }
  };

  // Move slides based on (rerendered) current slide
  const moveSlide = () => {
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / items.length)}%)`,
    };
    return wrapperTransform;
  };

  if (shopRequestStatus === 'loading')
    return <div className="loading">Loading...</div>;
  return (
    <div className="slider-container">
      <h1 className="title" onClick={onNavigateHandler}>
        {title.toUpperCase()}
      </h1>
      <div className="slider">
        <ul className="slider-wrapper" style={moveSlide()}>
          {items.map((slide) => (
            <SliderItem
              key={slide.id}
              slide={slide}
              currentID={current + items[0].id - 1}
              setCurrentOnClick={setCurrentOnClick}
              item={slide}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CollectionSlider;

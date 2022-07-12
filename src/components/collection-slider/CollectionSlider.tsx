import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectShopRequestStatus } from '../../store/features/shop/shop.selectors';
import { ShopItem } from '../../store/features/shop/shop.slice';
import { useAppSelector } from '../../store/hooks';
import SliderItem from '../slider-item/SliderItem';
import './CollectionSlider.scss';

type CollectionSliderProps = {
  items: ShopItem[];
  title: string;
  routeName: string;
};

const CollectionSlider: FC<CollectionSliderProps> = ({
  title,
  items,
  routeName,
}) => {
  const [current, setCurrent] = useState(0);

  const shopRequestStatus = useAppSelector(selectShopRequestStatus);
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(routeName);

  // Change current slide when user clicks right or left of the slider
  const setCurrentOnClick = (index: number) => {
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
              currentID={current + items[0].id - 1}
              setCurrentOnClick={setCurrentOnClick}
              item={slide}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollectionSlider;

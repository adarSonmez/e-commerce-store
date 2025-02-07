import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectShopRequestStatus } from '../../store/features/shop/shop.selectors'
import { ShopItem } from '../../store/features/shop/shop.slice'
import { useAppSelector } from '../../store/hooks'
import SliderItem from '../slider-item/SliderItem'
import './CollectionSlider.sass'

type CollectionSliderProps = {
  items: ShopItem[]
  title: string
  routeName: string
}

function CollectionSlider({ title, items, routeName }: CollectionSliderProps) {
  const [current, setCurrent] = useState(0)

  const shopRequestStatus = useAppSelector(selectShopRequestStatus)
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(routeName)

  const setCurrentOnClick = (index: number) => {
    let turn = index - items[0].id

    if (current !== turn) {
      setCurrent(turn)
    }
  }

  const moveSlide = () => {
    return {
      transform: `translateX(-${current * (100 / items.length)}%)`,
    }
  }

  if (shopRequestStatus === 'loading')
    return (
      <div role="status" className="loading">
        Loading...
      </div>
    )

  return (
    <section className="slider-container">
      <button className="title-button" onClick={onNavigateHandler} type="button">
        {title.toUpperCase()}
      </button>
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
    </section>
  )
}

export default CollectionSlider

import CollectionSlider from '../collection-slider/CollectionSlider'
import { selectCollectionsAsArray } from '../../store/features/shop/shop.selectors'
import { useAppSelector } from '../../store/hooks'

// Container of slider components
function CollectionOverview() {
  const collections = useAppSelector(selectCollectionsAsArray)

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionSlider key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default CollectionOverview

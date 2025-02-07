import CollectionSlider from '../collection-slider/CollectionSlider'
import { selectCollectionsAsArray } from '../../store/features/shop/shop.selectors'
import { useAppSelector } from '../../store/hooks'

function CollectionOverview() {
  const collections = useAppSelector(selectCollectionsAsArray)

  return (
    <section className="collection-overview">
      <h2 className="visually-hidden">Collection Overview</h2>

      {collections.length === 0 ? (
        <p role="alert" className="empty-message">
          No collections available
        </p>
      ) : (
        collections.map(({ id, ...otherProps }) => (
          <CollectionSlider key={id} {...otherProps} />
        ))
      )}
    </section>
  )
}

export default CollectionOverview

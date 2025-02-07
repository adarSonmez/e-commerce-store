import { useParams } from 'react-router-dom'
import {
  selectCollection,
  selectShopRequestStatus,
} from '../../store/features/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/CollectionItem'

import './CollectionPage.sass'
import { useAppSelector } from '../../store/hooks'

function CollectionPage() {
  const { collectionId } = useParams<{ collectionId: string }>()
  const shopRequestStatus = useAppSelector(selectShopRequestStatus)

  const collection = useAppSelector(selectCollection(collectionId!))

  if (shopRequestStatus === 'loading') {
    return (
      <div role="status" className="loading">
        Loading...
      </div>
    )
  }

  if (!collection) {
    return (
      <div role="alert" className="error-message">
        Collection not found
      </div>
    )
  }

  return (
    <section className="collection-page page">
      <h2 className="title">{collection.title.toUpperCase()}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default CollectionPage

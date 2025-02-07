import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { loadCollections } from '../../store/features/shop/shop.slice'
import { selectCollectionsAsArray } from '../../store/features/shop/shop.selectors'
import CollectionOverview from '../../components/collection-overview/CollectionOverview'
import CollectionPage from '../collection/CollectionPage'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

function ShopPage() {
  const dispatch = useAppDispatch()
  const collections = useAppSelector(selectCollectionsAsArray)

  useEffect(() => {
    if (collections.length === 0) {
      dispatch(loadCollections())
    }
  }, [dispatch, collections.length])

  return (
    <main className="shop-page page">
      <Routes>
        <Route path="" element={<CollectionOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </main>
  )
}

export default ShopPage

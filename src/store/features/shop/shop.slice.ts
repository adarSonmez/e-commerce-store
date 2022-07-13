import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DocumentData } from 'firebase/firestore'
import { getAllDocuments } from '../../../utils/firebase/controller'

export interface ShopItem {
  id: number
  name: string
  imageUrl: string
  price: number
  quantity: number
}

export interface Collection {
  id: number
  title: string
  routeName: string
  items: ShopItem[]
}

export interface Collections {
  [key: string]: Collection
}
export interface ShopState {
  collections: Collections | null
  status: 'loading' | 'idle' | 'failed'
  error?: string | null
}

const initialState: ShopState = {
  collections: null,
  status: 'loading',
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCollections.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadCollections.fulfilled, (state, action) => {
        state.status = 'idle'
        state.collections = action.payload
      })
      .addCase(loadCollections.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const loadCollections = createAsyncThunk(
  'shop/loadCollections',
  async (): Promise<Collections> => {
    const response = await getAllDocuments('collections')
    const collections: Collections = await response?.docs
      .map((doc: DocumentData) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      // Array to map
      .reduce((accumulator, collection: Collection) => {
        accumulator[collection.routeName] = collection
        return accumulator
      }, {} as Collections)
    return collections
  }
)

export default shopSlice.reducer

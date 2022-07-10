import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllDocuments } from '../../../utils/firebase/controller';

export interface ShopItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: ShopItem[];
}

export interface Collections {
  collections: { [key: string]: Collection } | null;
}

export interface ShopState extends Collections {
  status: 'loading' | 'idle' | 'failed';
  error?: string | null;
}

const initialState: ShopState = {
  collections: null,
  status: 'loading',
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCollections.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadCollections.fulfilled, (state, action) => {
        state.status = 'idle';
        state.collections = action.payload;
      })
      .addCase(loadCollections.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const loadCollections = createAsyncThunk(
  'shop/loadCollections',
  async () => {
    const response: any = await getAllDocuments('collections');
    return (
      response.docs
        .map((doc: any) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
        // Array to map
        .reduce((accumulator: any, collection: Collection) => {
          accumulator[collection.routeName] = collection;
          return accumulator;
        }, {})
    );
  }
);

export default shopSlice.reducer;

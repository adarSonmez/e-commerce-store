import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllDocuments } from '../../../firebase/controller';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    collections: null,
    status: 'loading',
  },
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
    const response = await getAllDocuments('collections');
    return (
      response.docs
        .map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
        // Array to map
        .reduce((accumulator, collection) => {
          accumulator[collection.routeName] = collection;
          return accumulator;
        }, {})
    );
  }
);

export default shopSlice.reducer;

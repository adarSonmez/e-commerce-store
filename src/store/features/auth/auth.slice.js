import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocByID } from '../../../utils/firebase/controller';

const INITIAL_STATE = {
  status: 'idle',
  user: {
    userInfo: {
      id: null,
      name: null,
      email: null,
    },
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCurrentUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setCurrentUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(setCurrentUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const setCurrentUser = createAsyncThunk(
  'auth/setCurrentUser',
  async (userAuth) => {
    if (userAuth !== null) {
      const response = await getDocByID('users', userAuth);
      const { email, name } = response.data();
      let userInfo = { email, name, id: response.id };
      return { userInfo };
    } else {
      return INITIAL_STATE.user;
    }
  }
);

export default authSlice.reducer;

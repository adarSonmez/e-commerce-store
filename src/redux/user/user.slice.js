import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { getDocByID } from '../../firebase/controller';

const INITIAL_STATE = {
  status: 'idle',
  user: {
    userAuth: null,
    userInfo: {
      id: null,
      name: null,
      email: null,
    },
  },
};

export const userSlice = createSlice({
  name: 'user',
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
  'user/setCurrentUser',
  async (auth) => {
    let user = INITIAL_STATE.user;
    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth !== null) {
        await getDocByID('users', userAuth, (snapshot) => {
          let userInfo = { ...snapshot.data(), id: snapshot.id };
          user = { userAuth, userInfo };
        });
      }
    });
    return user;
  }
);

export default userSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getDocByID } from '../../../utils/firebase/controller';

export interface User {
  id?: string | null;
  name?: string | null;
  email?: string | null;
}

export interface AuthState {
  status: 'loading' | 'idle' | 'failed';
  user: User;
  error?: string | null;
}

const initialState: AuthState = {
  status: 'idle',
  user: {
    id: null,
    name: null,
    email: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCurrentUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        setCurrentUser.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = 'idle';
          state.user = action.payload;
        }
      )
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
      const { email, name }: any = response.data();

      return { email, name, id: response.id };
    } else {
      return initialState.user;
    }
  }
);

export default authSlice.reducer;

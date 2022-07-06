import { createSlice } from '@reduxjs/toolkit';
import DIRECTORY_DATA from './directory.data';

export const directorySlice = createSlice({
  name: 'directory',
  initialState: {
    sections: DIRECTORY_DATA,
  },
  reducers: {},
});

export default directorySlice.reducer;

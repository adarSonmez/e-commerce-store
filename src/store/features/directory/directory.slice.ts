import { createSlice } from '@reduxjs/toolkit'
import DIRECTORY_DATA from './directory.data'

export interface Section {
  title: string
  imageUrl: string
  id: number
  linkUrl: string
  size?: string
}

export interface DirectoryState {
  sections: Section[]
}

const INITIAL_STATE: DirectoryState = { sections: DIRECTORY_DATA }

export const directorySlice = createSlice({
  name: 'directory',
  initialState: INITIAL_STATE,
  reducers: {
    /* 
    forLearningPurpose: {
      reducer: (state, action) => {
        state.sections = action.payload.sections
      },
      // prepare payload for the reducer
      prepare: (param1, param2) => {
        return {
          payload: {
            id: nanoid,
            date: new Date().toISOString(),
            param1,
            param2,
            sections: DIRECTORY_DATA,
          },
        }
      },
    }, 
    */
  },
})

export default directorySlice.reducer

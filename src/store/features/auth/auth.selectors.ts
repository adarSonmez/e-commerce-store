import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../..'

const selectAuth = (state: RootState) => state.auth

export const selectUserInfo = createSelector([selectAuth], (auth) => auth.user)

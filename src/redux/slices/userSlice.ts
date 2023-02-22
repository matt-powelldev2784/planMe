import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { HYDRATE } from 'next-redux-wrapper'

// Type for our state
export interface UserState {
  userState: boolean
}

// Initial state
const initialState: UserState = {
  userState: false,
}

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the authentication status
    setUserState(state, action) {
      state.userState = action.payload
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.user,
        }
      },
    },
  },
})

export const { setUserState } = userSlice.actions

export const selectUserState = (state: AppState) => state.user.userState

export default userSlice.reducer

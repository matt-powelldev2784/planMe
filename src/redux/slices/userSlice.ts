import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { HYDRATE } from 'next-redux-wrapper'

// Type for our state
export interface UserState {
  user_id: string | null
  user: {} | null
}

// Initial state
const initialState: UserState = {
  user_id: null,
  user: null,
}

export const getUser = createAsyncThunk('userState/user', async () => {
  try {
    const url = 'http://localhost:3000/api/users/user'
    const res = await fetch(url)
    const { data } = await res.json()
    const { user } = data
    return user
  } catch (err) {
    console.log('err', err)
  }
})

export const getUserId = createAsyncThunk('userState/user_id', async () => {
  try {
    const url = 'http://localhost:3000/api/users/user_id'
    const res = await fetch(url)
    const { data } = await res.json()
    const user_id = data.user_id.id
    return user_id
  } catch (err) {
    console.log('err', err)
  }
})

export const getClients = createAsyncThunk('userState/clients', async () => {
  try {
    const url = 'http://localhost:3000/api/clients/getClients'
    const res = await fetch(url)
    const { data } = await res.json()
    console.log('data', data)
    return data
  } catch (err) {
    console.log('err', err)
  }
})

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState(state, action) {
      state.userState = action.payload
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.user,
  //     }
  //   },
  // },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(getUser.pending, (state) => {
        state.user = null
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload
      })
      .addCase(getUser.rejected, (state, { error }: any) => {
        state.user = null
      })
      //---------------------------------------------------------------------
      .addCase(getUserId.pending, (state) => {
        state.user_id = null
      })
      .addCase(getUserId.fulfilled, (state, { payload }) => {
        state.user_id = payload
      })
      .addCase(getUserId.rejected, (state, { error }: any) => {
        state.user_id = null
      })
      //---------------------------------------------------------------------
      .addCase(getClients.pending, (state) => {
        state.userState = false
      })
      .addCase(getClients.fulfilled, (state, { payload }) => {
        state.userState = payload
      })
      .addCase(getClients.rejected, (state, { error }: any) => {
        state.userState = false
      })
  },
})

export const { setUserState } = userSlice.actions

export const selectUserState = (state: AppState) => state.user
export const selectUserId = (state: AppState) => state.user.user_id

export default userSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { HYDRATE } from 'next-redux-wrapper'
import type { Client } from '@/ts/interfaces'

export interface ClientsState {
  clientsList: [Client] | []
}

const initialState: ClientsState = {
  clientsList: [],
}

export const getClients = createAsyncThunk('clientsState/clients', async (user_id: string) => {
  try {
    const url = `http://localhost:3000/api/users/${user_id}/clients`
    const res = await fetch(url)
    const { data } = await res.json()
    return data
  } catch (err) {
    console.log('err', err)
  }
})

export const addClient = createAsyncThunk('clientsState/addClient', async (newClient) => {
  try {
    const url = `http://localhost:3000/api/clients`
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClient),
    }
    const res = await fetch(url, requestOptions)
    const { data } = await res.json()
    return data
  } catch (err) {
    console.log('err', err)
  }
})

// Actual Slice
export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    // setDummyReducer(state, action) {
    //   state.dummyState = action.payload
    // },
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
      .addCase(getClients.pending, (state) => {
        state.clientsList = []
      })
      .addCase(getClients.fulfilled, (state, { payload }) => {
        state.clientsList = payload
      })
      .addCase(getClients.rejected, (state, { error }: any) => {
        state.clientsList = []
      })
    //---------------------------------------------------------------------
  },
})

//export const { setDummyReducer } = clientsSlice.actions

export const selectClients = (state: AppState) => state.clients.clientsList

export default clientsSlice.reducer

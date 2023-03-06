import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { HYDRATE } from 'next-redux-wrapper'
import type { Client, ClientMinusId, UserAndClientId } from '@/ts/interfaces'

export interface ClientsState {
  clientsList: [Client] | []
  singleClientId: string | null
  singleClient: [Client] | []
}

const initialState: ClientsState = {
  clientsList: [],
  singleClientId: null,
  singleClient: [],
}

export const getClients = createAsyncThunk('clientsState/clients', async (user_id) => {
  try {
    const url = `http://localhost:3000/api/users/${user_id}/clients_list`
    const res = await fetch(url)
    const { data } = await res.json()
    return data
  } catch (err) {
    console.log('err', err)
  }
})

export const getClient = createAsyncThunk(
  'clientsState/client',
  async ({ user_id, client_id }: UserAndClientId) => {
    try {
      const url = `http://localhost:3000/api/users/${user_id}/${client_id}`
      const res = await fetch(url)
      const { data } = await res.json()
      return data
    } catch (err) {
      console.log('err', err)
    }
  }
)

export const addClient = createAsyncThunk('clientsState/addClient', async (newClient: ClientMinusId) => {
  try {
    const { user_id } = newClient
    const url = `http://localhost:3000/api/users/${user_id}/clients`
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

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setSingleClientId(state, action) {
      state.singleClientId = sessionStorage.getItem('singleClientId')
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
      .addCase(getClient.pending, (state) => {
        state.singleClient = []
      })
      .addCase(getClient.fulfilled, (state, { payload }) => {
        state.singleClient = payload
      })
      .addCase(getClient.rejected, (state, { error }: any) => {
        state.singleClient = []
      })
      //---------------------------------------------------------------------
      .addCase(addClient.pending, (state) => {
        state.singleClientId = null
      })
      .addCase(addClient.fulfilled, (state, { payload }) => {
        const { id } = payload
        state.singleClientId = id
        sessionStorage.setItem('singleClientId', id)
      })
      .addCase(addClient.rejected, (state, { error }: any) => {
        state.singleClientId = null
      })
    //---------------------------------------------------------------------
  },
})

export const { setSingleClientId } = clientsSlice.actions

export const selectClients = (state: AppState) => state.clients.clientsList
export const selectClient = (state: AppState) => state.clients.singleClient
export const selectSingleClientId = (state: AppState) => state.clients.singleClientId

export const selectClientSlice = (state: AppState) => state.clients

export default clientsSlice.reducer

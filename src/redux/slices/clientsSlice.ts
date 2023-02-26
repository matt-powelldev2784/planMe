import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { HYDRATE } from 'next-redux-wrapper'

export interface ClientsState {
  clientsList:
    | [
        {
          id: string
          name: string
          company_name: string
          add1: string
          add2: string
          post_code: string
          user_id: string
        }
      ]
    | []
}

const initialState: ClientsState = {
  clientsList: [],
}

export const getClients = createAsyncThunk('clientsState/clients', async (user_id: string) => {
  try {
    const url = `http://localhost:3000/api/clients/${user_id}`
    const res = await fetch(url)
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

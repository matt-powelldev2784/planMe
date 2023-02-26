import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { userSlice } from '../slices/userSlice'
import { clientsSlice } from './../slices/clientsSlice'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [clientsSlice.name]: clientsSlice.reducer,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
export type AppDispatch = ReturnType<typeof makeStore>['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)

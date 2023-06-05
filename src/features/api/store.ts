import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../search/reducer'
import { serviceApi } from './serviceApi'

const rootReducer = {
  search: searchReducer,
  [serviceApi.reducerPath]: serviceApi.reducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceApi.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>
}

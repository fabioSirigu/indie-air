import { createSlice } from '@reduxjs/toolkit'
import { FLightsState } from './model'

const initialState: FLightsState = {
  flights: null
}

const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {}
})

export const flightActions = {
  ...flightSlice.actions
}

export default flightSlice.reducer

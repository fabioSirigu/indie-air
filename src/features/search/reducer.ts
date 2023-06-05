import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchState } from './model'

const initialState: SearchState = {
  departureAirport: null,
  arrivalAirport: null
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setAirport: (
      state,
      { payload }: PayloadAction<{ name: string; iataCode: string }>
    ) => {
      state.departureAirport
        ? (state.arrivalAirport = payload)
        : (state.departureAirport = payload)
    },
    removeDepartureValue: (state) => {
      state.departureAirport = null
    },
    removeArrivalValue: (state) => {
      state.arrivalAirport = null
    }
  }
})

export const searchActions = {
  ...searchSlice.actions
}

export default searchSlice.reducer

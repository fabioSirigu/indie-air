import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchOption, SearchState } from './model'

const initialState: SearchState = {
  searchFlightsOptions: {
    departureAirport: { name: '', iataCode: '' },
    arrivalAirport: { name: '', iataCode: '' },
    departureDate: '',
    arrivalDate: '',
    passengers: 1
  }
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateAirport: (
      state,
      { payload }: PayloadAction<{ name: string; iataCode: string }>
    ) => {
      const key = state.searchFlightsOptions.departureAirport.iataCode
        ? 'arrivalAirport'
        : 'departureAirport'
      state.searchFlightsOptions = {
        ...state.searchFlightsOptions,
        [key]: payload
      }
    },
    updateSearchParams: (
      state,
      { payload }: PayloadAction<{ key: keyof SearchOption; value?: any }>
    ) => {
      const { key, value } = payload
      state.searchFlightsOptions = {
        ...state.searchFlightsOptions,
        [key]: value ?? initialState.searchFlightsOptions[key]
      }
    },
    resetAirport: (
      state,
      { payload }: PayloadAction<'departureAirport' | 'arrivalAirport'>
    ) => {
      state.searchFlightsOptions = {
        ...state.searchFlightsOptions,
        [payload]: initialState.searchFlightsOptions[payload]
      }
    }
  }
})

export const searchActions = {
  ...searchSlice.actions
}

export default searchSlice.reducer

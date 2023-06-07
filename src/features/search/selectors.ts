import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../api/store'

export const selectState = (state: RootState) => state.search

export const searchFlightsOptions = createSelector(
  selectState,
  (flights) => flights.searchFlightsOptions
)

export const selectCanSearch = createSelector(searchFlightsOptions, (searchOptions) =>
  Object.values(searchOptions).every((option) => {
    if (Array.isArray(option)) return !!option.length
    if (typeof option === 'object' && option !== null) {
      return Object.values(option).some((item) => {
        return !!item
      })
    }
    return !!option
  })
)

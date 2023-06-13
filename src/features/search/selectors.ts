import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../api/store'

export const selectState = (state: RootState) => state.search

export const searchFlightsOptions = createSelector(
  selectState,
  (flights) => flights.searchFlightsOptions
)

export const selectedDates = createSelector(searchFlightsOptions, (dates) => {
  const date = [dates.departureDate, dates.returnDate]
  return date
})
export const selectCanSearch = createSelector(searchFlightsOptions, (searchOptions) =>
  Object.values(searchOptions).every((option) => {
    if (typeof option === 'object' && option !== null) {
      return Object.values(option).some((item) => {
        return !!item
      })
    }
    return !!option
  })
)

import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../api/store'

export const selectState = (state: RootState) => state.search

export const selectDeparture = createSelector(
  selectState,
  (flights) => flights.departureAirport
)
export const selectArrival = createSelector(
  selectState,
  (flights) => flights.arrivalAirport
)

export const selectFlights = createSelector(selectState, (flight) => flight.flightOffer)

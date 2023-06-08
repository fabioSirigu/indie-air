import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../api/store'

export const selectState = (state: RootState) => state

export const selectFlights = createSelector(selectState, (flights) => flights)

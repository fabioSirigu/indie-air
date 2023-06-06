import { SearchType } from '../api/endpoints/types'

export type SearchState = {
  searchFlightsOptions: SearchOption
}

export type SearchOption = {
  departureAirport: { name: string; iataCode: string }
  arrivalAirport: { name: string; iataCode: string }
  dates: string[]
  passengers: number
}

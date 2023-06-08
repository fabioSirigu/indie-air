export type SearchState = {
  searchFlightsOptions: SearchOption
}

export type SearchOption = {
  departureAirport: { name: string; iataCode: string }
  arrivalAirport: { name: string; iataCode: string }
  departureDate: string
  returnDate: string
  passengers: number
}

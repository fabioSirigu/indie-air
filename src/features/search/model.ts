export type SearchState = {
  searchFlightsOptions: SearchOption
}

export type SearchOption = {
  departureAirport: { name: string; iataCode: string; lat: number; lng: number }
  arrivalAirport: { name: string; iataCode: string; lat: number; lng: number }
  departureDate: string
  returnDate: string
  passengers: number
}

export type SearchState = {
  departureAirport: { name: string; iataCode: string } | null
  arrivalAirport: { name: string; iataCode: string } | null
  flightOffer: {
    iataCode?: string[]
    dates?: string[]
  } | null
}

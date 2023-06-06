export type Airport = {
  name: string
  iata_code: string
  icao_code: string
  lat: number
  lng: number
  country_code: string
}

export type SearchType = {
  iataCodeDeparture: string
  iataCodeArrival: string
  date: string[]
  passengers: number
}

export type AnyCallbackFunction = (...args: any[]) => any

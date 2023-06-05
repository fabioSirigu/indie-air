export type AirportDto = {
  name: string
  iata_code: string
  icao_code: string
  lat: number
  lng: number
  country_code: string
}

export type AnyCallbackFunction = (...args: any[]) => any

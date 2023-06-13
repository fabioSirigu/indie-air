import { Geometry } from 'geojson'

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

export type FlightsDto = {
  id: string
  itineraries: ItinerariesType[]
}

export type ItinerariesType = {
  duration: string
  segments: SegmentsType[]
}

export type SegmentsType = {
  arrival: { iataCode: string; at: string }
  departure: { iataCode: string; at: string }
  duration: string
}

export type AnyCallbackFunction = (...args: any[]) => any

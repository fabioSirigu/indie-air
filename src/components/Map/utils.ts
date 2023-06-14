import { GeoJSONSourceOptions } from 'mapbox-gl'
import { useMemo } from 'react'
import { Airport } from '../../features/api/endpoints/types'
import { SearchOption } from '../../features/search/model'

export const CreateGeojson = (
  coordinates: SearchOption
): GeoJSONSourceOptions['data'] => {
  const lineCoordinates = useMemo(() => {
    const departure = coordinates.departureAirport
    const arrival = coordinates.arrivalAirport

    if (departure.lng && departure.lat && arrival.lng && arrival.lat)
      return [
        [departure.lng, departure.lat],
        [arrival.lng, arrival.lat]
      ]
    return []
  }, [coordinates])

  return {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: lineCoordinates || []
    },
    properties: {
      name: 'polyline'
    }
  }
}

export const setIcon = (city: Airport, selectedAirports: SearchOption) => {
  return city.name === selectedAirports.departureAirport.name ||
    city.name === selectedAirports.arrivalAirport.name
    ? 'https://img.icons8.com/?size=512&id=lbptJGvp4inW&format=png'
    : 'https://cdn-icons-png.flaticon.com/512/7720/7720736.png'
}

export const setAirport = (airport: Airport) => {
  return {
    name: airport.name,
    iataCode: airport.iata_code,
    lat: airport.lat,
    lng: airport.lng
  }
}

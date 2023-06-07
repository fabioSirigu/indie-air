import { SearchOption } from '../../search/model'
import { fligthsApi } from '../flightsApi'

const version = 'shopping/flight-offers'
export const fligths = fligthsApi.injectEndpoints({
  endpoints: (builder) => ({
    getFlights: builder.query<any, SearchOption>({
      query: (params) => {
        const encodedParams = new URLSearchParams({
          originLocationCode: `${params.departureAirport.iataCode}`,
          destinationLocationCode: `${params.arrivalAirport.iataCode}`,
          departureDate: `${params.departureDate}`,
          adults: `${params.passengers}`
        })
        return { url: version, params: encodedParams }
      }
    })
  })
})

export const { useGetFlightsQuery, useLazyGetFlightsQuery } = fligths

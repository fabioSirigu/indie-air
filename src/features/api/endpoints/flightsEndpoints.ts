import { SearchOption } from '../../search/model'
import { fligthsApi } from '../flightsApi'

const version = 'shopping/flight-offers/'
export const fligths = fligthsApi.injectEndpoints({
  endpoints: (builder) => ({
    getFlights: builder.query<any, SearchOption>({
      query: (params) => {
        const bodyEncodedParams = new URLSearchParams({
          originalLocationCode: `${params.departureAirport.iataCode}`,
          destinationLocationCode: `${params.arrivalAirport.iataCode}`,
          departureDate: `${params.dates[0]}`,
          adults: `${params.passengers}`
        })
        return { url: `${version}`, body: bodyEncodedParams }
      }
    })
  })
})

export const { useGetFlightsQuery, useLazyGetFlightsQuery } = fligths

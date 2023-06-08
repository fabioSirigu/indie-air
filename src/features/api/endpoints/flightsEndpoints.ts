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
          returnDate: `${params.returnDate}`,
          adults: `${params.passengers}`,
          max: `${10}`
        })
        return { url: version, params: encodedParams }
      }
      /* transformResponse: (response: { data: any }) => {
        return response.data
      } */
    })
  })
})

export const { useGetFlightsQuery, useLazyGetFlightsQuery } = fligths

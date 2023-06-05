import { serviceApi } from '../serviceApi'
import { AirportDto } from './types'

export const airportsApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getAirports: builder.query<AirportDto[], void>({
      query: () => 'airports'
    })
  })
})

export const { useGetAirportsQuery } = airportsApi

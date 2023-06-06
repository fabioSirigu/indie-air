import { serviceApi } from '../serviceApi'
import { Airport } from './types'

export const airportsApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getAirports: builder.query<Airport[], void>({
      query: () => 'airports'
    })
  })
})

export const { useGetAirportsQuery } = airportsApi

import { AirportDto } from '../../../components/api/types'
import { serviceApi } from '../serviceApi'

export const airportsApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getAirports: builder.query<AirportDto[], void>({
      query: () => 'airports'
    })
  })
})

export const { useGetAirportsQuery } = airportsApi

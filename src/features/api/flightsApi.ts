import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fligthsApi = createApi({
  reducerPath: 'flights',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_AMADEUS_FLIGHTS_BASE_URL,
    headers: { 'x-api-key': process.env.REACT_APP_AMADEUS_API_KEY }
  }),
  endpoints: () => ({})
})

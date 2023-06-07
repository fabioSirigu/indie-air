import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fligthsApi = createApi({
  reducerPath: 'flights',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_AMADEUS_FLIGHTS_BASE_URL,
    prepareHeaders: (headers, api) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
    }
  }),
  endpoints: () => ({})
})

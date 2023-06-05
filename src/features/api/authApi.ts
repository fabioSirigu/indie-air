import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_AMADEUS_TOKEN_BASE_URL,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }),
  endpoints: (builder) => ({
    getAuthToken: builder.mutation<any, void>({
      query: () => {
        const bodyEncodedParams = new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: process.env.REACT_APP_AMADEUS_API_KEY,
          client_secret: process.env.REACT_APP_AMADEUS_API_SECRET
        })
        return { url: 'security/oauth2/token', method: 'POST', body: bodyEncodedParams }
      }
    })
  })
})

export const { useGetAuthTokenMutation } = authApi

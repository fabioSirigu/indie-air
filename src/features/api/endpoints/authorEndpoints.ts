import { serviceApi } from '../serviceApi'

export const authApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    auth: builder.query<any, any>({
      query: (order) => ({
        url: 'JArGx8BjSSrm5DvI3loNfS9ATn458CHF',
        method: 'POST',
        body: order
      })
    })
  })
})

export const { useAuthQuery } = authApi

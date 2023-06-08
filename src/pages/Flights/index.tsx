import { useSelector } from 'react-redux'
import { Loader } from '../../components/Loader'
import { useGetFlightsQuery } from '../../features/api/endpoints/flightsEndpoints'
import { searchFlightsOptions } from '../../features/search/selectors'
import { StyledCard } from './styled'

export const Flights = () => {
  const searchParams = useSelector(searchFlightsOptions)
  const { data, isLoading } = useGetFlightsQuery(searchParams)
  if (isLoading) return <Loader />

  const dataArray = Object.values(data.data)

  // const getItineraries = dataArray.map((item)
  console.log(dataArray)

  return <StyledCard />
}

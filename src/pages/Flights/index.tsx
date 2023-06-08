import { useSelector } from 'react-redux'
import { Loader } from '../../components/Loader'
import { useGetFlightsQuery } from '../../features/api/endpoints/flightsEndpoints'
import {
  FlightsDto,
  ItinerariesType,
  SegmentsType
} from '../../features/api/endpoints/types'
import { searchFlightsOptions } from '../../features/search/selectors'
import { FlightCard } from './FlightCard'
import { StyledBody } from './styled'

export const Flights = () => {
  const searchParams = useSelector(searchFlightsOptions)
  const { data: flight, isLoading } = useGetFlightsQuery(searchParams)

  if (isLoading) return <Loader />

  const dataArray = flight.data
  // console.log(dataArray)

  const itineraries = dataArray.map((item: FlightsDto) => item)
  // console.log('itineraries', itineraries)

  return (
    <StyledBody>
      {itineraries.map((item: FlightsDto) => {
        // console.log(item)

        return <FlightCard itineraries={item.itineraries} />
      })}
    </StyledBody>
  )
}

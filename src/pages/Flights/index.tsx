import { useSelector } from 'react-redux'
import { useGetFlightsQuery } from '../../features/api/endpoints/flightsEndpoints'
import { StyledCard } from './styled'

export const Flights = () => {
  /* const data = useSelector(selectFlights)
  const { data: flights, isLoading } = useGetFlightsQuery()
  if (isLoading) return <div>Loading..</div> */

  return (
    <StyledCard>
      {/* <ul>
        {flights.map((airport: any) => (
          <li key={airport}>{airport}</li>
        ))}
      </ul> */}
    </StyledCard>
  )
}

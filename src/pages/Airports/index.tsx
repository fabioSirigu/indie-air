import { memo } from 'react'
import { useGetAirportsQuery } from '../../features/api/endpoints/airportsEndpoints'
import { Airport } from '../../features/api/endpoints/types'
import { StyledCard } from './styled'

export const Airports = memo(() => {
  const { data: airports, isLoading } = useGetAirportsQuery()
  const filteredAirports = airports!.filter((item) => item.iata_code)
  if (isLoading) return <div>Loading..</div>
  return (
    <StyledCard>
      <ul>
        {filteredAirports.map((airport: Airport) => (
          <li key={airport.name}>{airport.name}</li>
        ))}
      </ul>
    </StyledCard>
  )
})

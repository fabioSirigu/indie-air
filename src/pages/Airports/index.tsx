import { AirportDto } from '../../components/api/types'
import { useGetAirportsQuery } from '../../features/api/endpoints/airportsEndpoints'

export const Airports = () => {
  const { data: airports, isLoading } = useGetAirportsQuery()
  if (isLoading) return <div>Loading..</div>
  return (
    <div>
      <ul>
        {airports?.map((airport: AirportDto) => (
          <li>{airport.name}</li>
        ))}
      </ul>
    </div>
  )
}

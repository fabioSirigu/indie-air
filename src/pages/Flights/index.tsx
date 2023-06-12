import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import { useGetFlightsQuery } from '../../features/api/endpoints/flightsEndpoints'
import { FlightsDto } from '../../features/api/endpoints/types'
import { searchFlightsOptions } from '../../features/search/selectors'
import { StyledLoader } from '../../style/global'
import { FlightCard } from './FlightCard'
import { StyledBody } from './styled'

export const Flights = () => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate('/')
  }, [navigate])

  const searchParams = useSelector(searchFlightsOptions)
  const { data: flight, isLoading } = useGetFlightsQuery(searchParams)

  if (isLoading) return <StyledLoader />

  const dataArray = flight.data
  console.log(dataArray)

  const itineraries = dataArray.map((item: FlightsDto) => item)
  // console.log('itineraries', itineraries)

  return (
    <StyledBody>
      <Text color="text" variant="h1">
        Lista Voli
      </Text>
      {!dataArray.length ? (
        <Text color="text">Nessun volo disponibile</Text>
      ) : (
        itineraries.map((item: FlightsDto) => {
          return <FlightCard key={item.id} itineraries={item.itineraries} />
        })
      )}
      <Button onClick={handleNavigate} title="Go Back" />
    </StyledBody>
  )
}

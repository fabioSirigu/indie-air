import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import { useGetFlightsQuery } from '../../features/api/endpoints/flightsEndpoints'
import { FlightsDto } from '../../features/api/endpoints/types'
import { searchActions } from '../../features/search/reducer'
import { searchFlightsOptions } from '../../features/search/selectors'
import { StyledLoader } from '../../style/global'
import { FlightCard } from './FlightCard'
import { StyledBody, StyledNoData, StyledWrapperList } from './styled'

export const Flights = memo(() => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavigate = useCallback(() => {
    navigate('/')
    dispatch(searchActions.resetAirport('departureAirport'))
    dispatch(searchActions.resetAirport('arrivalAirport'))
    dispatch(searchActions.resetDate('departureDate'))
    dispatch(searchActions.resetDate('returnDate'))
  }, [navigate, dispatch])

  const searchParams = useSelector(searchFlightsOptions)
  const { data: flight, isLoading } = useGetFlightsQuery(searchParams)

  if (isLoading) return <StyledLoader />

  const dataArray = flight.data
  const itineraries = dataArray.map((item: FlightsDto) => item)

  return (
    <StyledBody>
      <Text color="text" variant="h1" weight="bold">
        Lista Voli
      </Text>
      <Button onClick={handleNavigate} title="Go Back" />
      <StyledWrapperList>
        {!dataArray.length ? (
          <StyledNoData>
            <Text color="text" variant="h1">
              Nessun volo disponibile
            </Text>
          </StyledNoData>
        ) : (
          itineraries.map((item: FlightsDto) => {
            return <FlightCard key={item.id} itineraries={item.itineraries} />
          })
        )}
      </StyledWrapperList>
    </StyledBody>
  )
})

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLazyGetFlightsQuery } from '../../features/api/endpoints/flightsEndpoints'
import { searchActions } from '../../features/search/reducer'
import { searchFlightsOptions, selectCanSearch } from '../../features/search/selectors'
import { Button } from '../Button'
import { CardInfo } from '../CardInfo'
import { Date } from '../DateCard'
import { Logo } from '../Logo'
import { InputNumber } from '../Select'
import { StyledFilter } from './styled'

export const FilterRow = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchParams = useSelector(searchFlightsOptions)
  const { departureDate, arrivalAirport, departureAirport, passengers } = searchParams
  const canUserSearch = useSelector(selectCanSearch)
  const [trigger, data] = useLazyGetFlightsQuery()

  const searchFlights = useCallback(() => {
    searchParams && trigger(searchParams)
    navigate('/flights')
  }, [searchParams, trigger, navigate])

  return (
    <StyledFilter>
      <Logo />
      <CardInfo
        label={'Aereporto di Partenza'}
        value={departureAirport.name}
        onChange={() => dispatch(searchActions.resetAirport('departureAirport'))}
      />
      <CardInfo
        label={'Aereporto di Arrivo'}
        value={arrivalAirport.name}
        onChange={() => dispatch(searchActions.resetAirport('arrivalAirport'))}
      />
      <Date />
      <InputNumber
        value={passengers}
        onChange={(value) =>
          dispatch(
            searchActions.updateSearchParams({
              key: 'passengers',
              value: Number(value)
            })
          )
        }
      />
      <Button
        title="Cerca"
        background="primary"
        onClick={searchFlights}
        disabled={!canUserSearch}
      />
    </StyledFilter>
  )
}

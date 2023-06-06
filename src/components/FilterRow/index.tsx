import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useGetFlightsQuery,
  useLazyGetFlightsQuery
} from '../../features/api/endpoints/flightsEndpoints'
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

  const searchParams = useSelector(searchFlightsOptions)
  const { dates, arrivalAirport, departureAirport, passengers } = searchParams
  const canUserSearch = useSelector(selectCanSearch)
  const [trigger, data] = useLazyGetFlightsQuery()

  const searchFlights = useCallback(() => {
    searchParams && trigger(searchParams)
  }, [searchParams, trigger])

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
        onChange={() =>
          dispatch(
            searchActions.updateSearchParams({
              key: 'arrivalAirport',
              value: arrivalAirport.iataCode
            })
          )
        }
      />
      <Date />
      <InputNumber />
      <Button
        title="Cerca"
        background="primary"
        onClick={searchFlights}
        disabled={!canUserSearch}
      />
    </StyledFilter>
  )
}

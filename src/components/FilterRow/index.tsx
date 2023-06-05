import { useDispatch, useSelector } from 'react-redux'
import { searchActions } from '../../features/search/reducer'
import { selectArrival, selectDeparture } from '../../features/search/selectors'
import { Button } from '../Button'
import { CardInfo } from '../CardInfo'
import { Date } from '../DateCard'
import { Logo } from '../Logo'
import { Select } from '../Select'
import { StyledFilter } from './styled'

export const FilterRow = () => {
  const dispatch = useDispatch()
  const departureAirport = useSelector(selectDeparture)
  const arrivalAirport = useSelector(selectArrival)

  return (
    <StyledFilter>
      <Logo />
      <CardInfo
        label={'Aereporto di Partenza'}
        value={departureAirport?.name ?? ''}
        onChange={() => dispatch(searchActions.removeDepartureValue())}
      />
      <CardInfo
        label={'Aereporto di Arrivo'}
        value={arrivalAirport?.name ?? ''}
        onChange={() => dispatch(searchActions.removeArrivalValue())}
      />
      <Date />
      <Select />
      <Button title="Cerca" background="primary" />
    </StyledFilter>
  )
}

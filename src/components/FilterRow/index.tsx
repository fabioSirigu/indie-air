import { log } from 'console'
import { useDispatch, useSelector } from 'react-redux'
import { searchActions } from '../../features/search/reducer'
import { selectArrival, selectDeparture } from '../../features/search/selectors'
import { Button } from '../Button/Button'
import { CardInfo } from '../CardInfo'
import { Date } from '../DateCard'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { StyledFilter } from './styled'

export const FilterRow = () => {
  const dispatch = useDispatch()
  const departureAirport = useSelector(selectDeparture)
  const arrivalAirport = useSelector(selectArrival)

  return (
    <StyledFilter>
      <Logo />
      <CardInfo
        label={'da'}
        value={departureAirport?.name ?? ''}
        onChange={() => dispatch(searchActions.removeDepartureValue())}
      />
      <CardInfo
        label={'a'}
        value={arrivalAirport?.name ?? ''}
        onChange={() => dispatch(searchActions.removeArrivalValue())}
      />
      <Date />
      <Button title="Cerca" background="primary" />
    </StyledFilter>
  )
}

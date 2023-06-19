import { memo } from 'react'
import { useSelector } from 'react-redux'
import { IconButton } from '../../components/Button/IconButton'
import { Icon } from '../../components/Icon'
import { NameIcon } from '../../components/Icon/config'
import { Text } from '../../components/Text'
import { ItinerariesType } from '../../features/api/endpoints/types'
import { searchFlightsOptions } from '../../features/search/selectors'
import {
  StyledDateWrapper,
  StyledWrapperStopovers,
  StyledWrapperTitleCard
} from './styled'

type Props = {
  departure: ItinerariesType
  returnFlight: ItinerariesType
}
export const TypeOfFlight = memo(({ departure, returnFlight }: Props) => {
  const date = useSelector(searchFlightsOptions)
  const { departureDate, returnDate } = date

  return (
    <StyledWrapperStopovers>
      <StyledDateWrapper>
        <Text color="textLight" variant="h4">
          A/R: {`${departureDate} / ${returnDate}`}
        </Text>
      </StyledDateWrapper>
      {departure.segments.length > 1 && returnFlight.segments.length > 1 ? (
        <StyledWrapperTitleCard>
          <Text weight="mediumBold" color="dangerLight" variant="h3">
            Scali: {departure.segments.length - 1}
          </Text>
          <Icon iconName="arrival" color="dangerLight" />
        </StyledWrapperTitleCard>
      ) : (
        <>
          <Text weight="mediumBold" variant="h3" color="confirm">
            Diretto
          </Text>
          <Icon iconName="plane" color="confirm" />
        </>
      )}
    </StyledWrapperStopovers>
  )
})
